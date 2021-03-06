import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, Injector, Optional } from '@angular/core';
import { CoAuthConfig, CoConfigService } from '@co/core';
import { Observable, Observer } from 'rxjs';
import { mergeConfig } from '../auth.config';
import { ToLogin } from './helper';
import { ITokenModel } from './interface';

class HttpAuthInterceptorHandler implements HttpHandler {
  constructor(private next: HttpHandler, private interceptor: HttpInterceptor) {}

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return this.interceptor.intercept(req, this.next);
  }
}

@Injectable()
export abstract class BaseInterceptor implements HttpInterceptor {
  constructor(@Optional() protected injector: Injector) {}

  protected model: ITokenModel;

  abstract isAuth(options: CoAuthConfig): boolean;

  abstract setReq(req: HttpRequest<any>, options: CoAuthConfig): HttpRequest<any>;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const options = mergeConfig(this.injector.get(CoConfigService));
    if (options.ignores) {
      for (const item of options.ignores as RegExp[]) {
        if (item.test(req.url)) return next.handle(req);
      }
    }

    if (
      options.allow_anonymous_key &&
      (req.params.has(options.allow_anonymous_key) || new RegExp(`[\?|&]${options.allow_anonymous_key}=[^&]+`).test(req.urlWithParams))
    ) {
      return next.handle(req);
    }

    if (this.isAuth(options)) {
      req = this.setReq(req, options);
    } else {
      ToLogin(options, this.injector);
      // Interrupt Http request, so need to generate a new Observable
      const err$ = new Observable((observer: Observer<HttpEvent<any>>) => {
        const res = new HttpErrorResponse({
          url: req.url,
          headers: req.headers,
          status: 401,
          statusText: `来自 @co/auth 的拦截，所请求URL未授权，若是登录API可加入 [url?_allow_anonymous=true] 来表示忽略校验，更多方法请参考： https://www.cityocean.com/auth/getting-started#AlainAuthConfig\nThe interception from @co/auth, the requested URL is not authorized. If the login API can add [url?_allow_anonymous=true] to ignore the check, please refer to: https://www.cityocean.com/auth/getting-started#AlainAuthConfig`,
        });
        observer.error(res);
      });
      if (options.executeOtherInterceptors) {
        const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
        const lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
        if (lastInterceptors.length > 0) {
          const chain = lastInterceptors.reduceRight((_next, _interceptor) => new HttpAuthInterceptorHandler(_next, _interceptor), {
            handle: (_: HttpRequest<any>) => err$,
          });
          return chain.handle(req);
        }
      }
      return err$;
    }
    return next.handle(req);
  }
}
