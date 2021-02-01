import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { v1#/definitions/CheckEmailInput,v1#/definitions/ActivateEmailInput,v1#/definitions/RegisterInput,v1#/definitions/RegisterOutput,v1#/definitions/ResetPasswordInput,v1#/definitions/ResetPasswordOutput,v1#/definitions/SendEmailActivationLinkInput,v1#/definitions/SendPasswordResetCodeInput, } from './sso.types';

@BaseUrl('/SSO/Account')
@Injectable({ providedIn: 'root' })
export class v1AccountService extends BaseApi {
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
        _req:v1#/definitions/CheckEmailInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/Account/ActivateEmail
     * 激活邮箱，激活前需先SendEmailActivationLink发送邮件
     */

    @POST('activateEmail')
    activateEmail(
        @Payload
        _req:v1#/definitions/ActivateEmailInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/Account/Register
     * 
     */

    @POST('register')
    register(
        @Payload
        _req:v1#/definitions/RegisterInput

    ): Observable<v1#/definitions/RegisterOutput> {
        return null as any
    }


    /**
     * @param url /SSO/Account/ResetPassword
     * 
     */

    @POST('resetPassword')
    resetPassword(
        @Payload
        _req:v1#/definitions/ResetPasswordInput

    ): Observable<v1#/definitions/ResetPasswordOutput> {
        return null as any
    }


    /**
     * @param url /SSO/Account/SendEmailActivationLink
     * 发送邮件激活链接
     */

    @POST('sendEmailActivationLink')
    sendEmailActivationLink(
        @Payload
        _req:v1#/definitions/SendEmailActivationLinkInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/Account/SendPasswordResetCode
     * 
     */

    @POST('sendPasswordResetCode')
    sendPasswordResetCode(
        @Payload
        _req:v1#/definitions/SendPasswordResetCodeInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/Account/GetExternalAuthenticationProviders
     * 获取外部登录提供器信息
     */

    @GET('getExternalAuthenticationProviders')
    getExternalAuthenticationProviders(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/Account/ClearExpiredPersistedGrants
     * 清理过期的PersistedGrants
     */

    @POST('clearExpiredPersistedGrants')
    clearExpiredPersistedGrants(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }



  }
