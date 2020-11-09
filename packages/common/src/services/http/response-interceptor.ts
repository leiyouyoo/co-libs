import { Inject, Injectable, Injector } from '@angular/core';
// tslint:disable-next-line: ordered-imports
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN, ITokenService } from '@co/auth';
// import { Planet, ReuseTabService } from '@co/cms';
// import { MODAL_SERVICE, ModalService } from '../ModalService.injector';
import { CoCommonConfig, CoConfigService } from '@co/core';
import * as _ from 'lodash';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Subject } from 'rxjs';
import { CoAuthService } from '../auth/auth.service';
import { ENVIRONMENT } from './environment';

export interface IValidationErrorInfo {
  message: string;
  members: string[];
}

export interface IErrorInfo {
  code: number;
  message: string;
  details: string;
  validationErrors: IValidationErrorInfo[];
  duration?: number;
}

export interface IAjaxResponse {
  success: boolean;
  result?: any;
  targetUrl?: string;
  error?: IErrorInfo;
  unAuthorizedRequest: boolean;
  __abp: boolean;
}

const loginUrl = `/passport/login`;

@Injectable({
  providedIn: 'root',
})
export class AbpHttpConfiguration {
  loginUrl: string;
  constructor(
    private messageService: NzMessageService,
    private injector: Injector, // private reuseTabService: ReuseTabService, // private planet: Planet,
  ) {}

  defaultError = {
    message: 'An error has occurred!',
    details: 'Error details were not sent by server.',
  } as IErrorInfo;

  defaultError401 = {
    message: 'You are not authenticated!',
    details: 'You should be authenticated (sign in) in order to perform this operation.',
  } as IErrorInfo;

  defaultError403 = {
    message: 'You are not authorized!',
    details: 'You are not allowed to perform this operation.',
  } as IErrorInfo;

  defaultError404 = {
    message: 'Resource not found!',
    details: 'The resource requested could not be found on the server.',
  } as IErrorInfo;

  logError(error: IErrorInfo): void {
    console.error(error);
  }

  showError(error: IErrorInfo): any {
    // return;
    // alert(error.message);
    // const message = {
    //   nzTitle: error.message,
    //   nzContent: error.details,
    // };
    const duration = {
      nzDuration: error.duration || 3000,
    };
    return this.messageService.error(error.message, duration);
  }

  handleTargetUrl(targetUrl?: string): void {
    if (targetUrl) {
      setTimeout(() => this.injector.get(Router).navigateByUrl(targetUrl));
    }
  }

  handleUnAuthorizedRequest(targetUrl?: string) {
    targetUrl = targetUrl || this.loginUrl;
    localStorage.removeItem('_token');

    (this.injector.get(DA_SERVICE_TOKEN) as ITokenService).clear();

    if (location.hash.includes('isForShare=true')) {
      const authService = this.injector.get(CoAuthService);
      authService.login('Anonymous', 'co@123').then(
        () => {
          location.reload();
        },
        () => this.handleTargetUrl(targetUrl),
      );
      throw new Error('reload');
    } else {
      this.handleTargetUrl(targetUrl);
    }
  }

  handleNonAbpErrorResponse(response: HttpResponse<any>, notShowError = false) {
    const self = this;
    const body = response.body;
    let error;
    switch (response.status) {
      case 401:
        self.handleUnAuthorizedRequest();
        break;
      case 403:
        error = self.defaultError403;
        break;
      case 404:
        error = self.defaultError404;
        self.showError(self.defaultError404);
        break;
      default:
        error = self.defaultError;
    }
    if (error && !notShowError) {
      this.showError(error);
    }
  }

  handleAbpResponse(response: HttpResponse<any>, ajaxResponse: IAjaxResponse): HttpResponse<any> {
    let newResponse;
    if (ajaxResponse.success) {
      if (ajaxResponse.targetUrl) {
        this.handleTargetUrl(ajaxResponse.targetUrl);
      }

      newResponse = response.clone({
        body: ajaxResponse,
      });
    } else {
      if (!ajaxResponse.error) {
        ajaxResponse.error = this.defaultError;
      }

      const targetUrl = ajaxResponse.targetUrl;

      if (response.status === 401) {
        this.handleUnAuthorizedRequest(targetUrl);
      }
    }

    return newResponse;
  }

  getAbpAjaxResponseOrNull(response: HttpResponse<any>): IAjaxResponse | null {
    if (!response || !response.headers) {
      return null;
    }
    const contentType = response.headers.get('Content-Type');
    if (!contentType) {
      console.warn('Content-Type is not sent!');
      return null;
    }

    if (contentType.indexOf('application/json') < 0) {
      console.warn('Content-Type is not application/json: ' + contentType);
      return null;
    }

    const responseObj = JSON.parse(JSON.stringify(response.body));
    if (!responseObj.__abp) {
      return null;
    }

    return responseObj as IAjaxResponse;
  }

  handleResponse(response: HttpResponse<any>): HttpResponse<any> {
    const ajaxResponse = this.getAbpAjaxResponseOrNull(response);
    if (ajaxResponse == null) {
      return response;
    }

    return this.handleAbpResponse(response, ajaxResponse);
  }
}

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  protected configuration: AbpHttpConfiguration;
  private config: CoCommonConfig | undefined;

  constructor(configuration: AbpHttpConfiguration, @Inject(ENVIRONMENT) private environment) {
    configuration.loginUrl = environment?.LOGIN_URL ?? loginUrl;
    this.configuration = configuration;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiBaseUrl = this.environment.SERVER_URL;
    if (request.url.startsWith(apiBaseUrl)) {
      const notShowError = request.headers.has('Do-not-show-error');
      const interceptObservable = new Subject<HttpEvent<any>>();
      const modifiedRequest = this.normalizeRequestHeaders(request);

      next.handle(modifiedRequest).subscribe(
        (event: HttpEvent<any>) => {
          this.handleSuccessResponse(event, interceptObservable);
        },
        (error: any) => {
          return this.handleErrorResponse(error, interceptObservable, notShowError);
        },
      );

      return interceptObservable;
    } else {
      return next.handle(request);
    }
  }

  protected normalizeRequestHeaders(request: HttpRequest<any>): HttpRequest<any> {
    let modifiedHeaders = new HttpHeaders();
    modifiedHeaders = request.headers.set('Pragma', 'no-cache').set('Cache-Control', 'no-cache').delete('Do-not-show-error');

    modifiedHeaders = this.addXRequestedWithHeader(modifiedHeaders);
    modifiedHeaders = this.addAcceptLanguageHeader(modifiedHeaders);
    return request.clone({
      headers: modifiedHeaders,
    });
  }
  /**
   * @description 添加headers:Accept-Language字段
   * @protected
   * @param headers
   * @returns
   * @memberof ResponseInterceptor
   */
  protected addAcceptLanguageHeader(headers: HttpHeaders): HttpHeaders {
    const aspCultureMap = {
      'zh-cn': 'zh-Hans',
      'en-us': 'en',
    };
    const layout = JSON.parse(localStorage.getItem('layout')!);
    let langValue = `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7`;
    let aspCultureValue = 'en';
    if (layout && layout.lang) {
      langValue = layout.lang;
      aspCultureValue = aspCultureMap[layout.lang.toLowerCase()];
    }
    if (headers && !headers.has('Accept-Language')) {
      headers = headers.set('Accept-Language', langValue);
      headers = headers.set('.AspNetCore.Culture', aspCultureValue);
    }
    return headers;
  }
  /**
   * 添加 X-Requested-With 到 Header 明确为 ajax 方式请求
   */
  protected addXRequestedWithHeader(headers: HttpHeaders): HttpHeaders {
    if (headers) {
      headers = headers.set('X-Requested-With', 'XMLHttpRequest');
    }

    return headers;
  }

  protected handleSuccessResponse(event: HttpEvent<any>, interceptObservable: Subject<HttpEvent<any>>): void {
    const self = this;

    if (event instanceof HttpResponse) {
      const responseBody = event.body;

      const modifiedResponse = self.configuration.handleResponse(
        event.clone({
          body: responseBody,
        }),
      );

      if (!('success' in modifiedResponse.body) || modifiedResponse.body.success) {
        let innerRes;
        if (modifiedResponse.body.__abp) {
          innerRes = modifiedResponse.clone({
            body: modifiedResponse.body.result,
          });
        } else {
          innerRes = modifiedResponse.clone({
            body: modifiedResponse.body,
          });
        }

        interceptObservable.next(innerRes);
        interceptObservable.complete();
      } else {
        interceptObservable.error(modifiedResponse);
      }
    } else {
      interceptObservable.next(event);
    }
  }

  protected handleErrorResponse(error: any, interceptObservable: Subject<HttpEvent<any>>, notShowError = false): Observable<any> {
    const errorObservable = new Subject<any>();
    const errorBody = error.error ? error.error : error;
    const errorResponse = new HttpResponse({
      headers: error.headers,
      status: error.status,
      body: errorBody,
    });

    const ajaxResponse: any = this.configuration.getAbpAjaxResponseOrNull(errorResponse);

    if (ajaxResponse != null) {
      this.configuration.handleAbpResponse(errorResponse, ajaxResponse);
      // tslint:disable-next-line: no-unused-expression
      !notShowError && this.configuration.showError(ajaxResponse.error);
    } else {
      this.configuration.handleNonAbpErrorResponse(errorResponse, notShowError);
    }

    errorObservable.complete();

    interceptObservable.error(error);
    interceptObservable.complete();

    return errorObservable;
  }
}
