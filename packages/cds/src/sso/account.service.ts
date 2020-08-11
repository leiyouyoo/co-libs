import { Injectable, Injector } from '@angular/core';
// tslint:disable-next-line: ordered-imports
import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { Observable } from 'rxjs';
import {
  SsoActivateEmailInput,
  SsoCheckEmailInput,
  SsoRegisterInput,
  SsoRegisterOutput,
  SsoResetPasswordInput,
  SsoResetPasswordOutput,
  SsoSendEmailActivationLinkInput,
  SsoSendPasswordResetCodeInput,
} from './sso.types';

@BaseUrl('/sso/Account')
@Injectable({ providedIn: 'root' })
export class SSOAccountService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * @param url /SSO/Account/CheckEmailUrlIsExpired
   * 判断邮件链接是否过期，true为过期
   */

  @POST('checkEmailUrlIsExpired')
  checkEmailUrlIsExpired(
    @Payload
    _req: SsoCheckEmailInput,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/Account/ActivateEmail
   * 激活邮箱，激活前需先SendEmailActivationLink发送邮件
   */

  @POST('activateEmail')
  activateEmail(
    @Payload
    _req: SsoActivateEmailInput,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/Account/Register
   *
   */

  @POST('register')
  register(
    @Payload
    _req: SsoRegisterInput,
  ): Observable<SsoRegisterOutput> {
    return null as any;
  }

  /**
   * @param url /SSO/Account/ResetPassword
   *
   */

  @POST('resetPassword')
  resetPassword(
    @Payload
    _req: SsoResetPasswordInput,
  ): Observable<SsoResetPasswordOutput> {
    return null as any;
  }

  /**
   * @param url /SSO/Account/SendEmailActivationLink
   * 发送邮件激活链接
   */

  @POST('sendEmailActivationLink')
  sendEmailActivationLink(
    @Payload
    _req: SsoSendEmailActivationLinkInput,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/Account/SendPasswordResetCode
   *
   */

  @POST('sendPasswordResetCode')
  sendPasswordResetCode(
    @Payload
    _req: SsoSendPasswordResetCodeInput,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/Account/GetExternalAuthenticationProviders
   * 获取外部登录提供器信息
   */

  @GET('getExternalAuthenticationProviders')
  getExternalAuthenticationProviders(
    @Payload
    _req: {},
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/Account/ClearExpiredPersistedGrants
   * 清理过期的PersistedGrants
   */

  @POST('clearExpiredPersistedGrants')
  clearExpiredPersistedGrants(
    @Payload
    _req: {},
  ): Observable<any> {
    return null as any;
  }
}
