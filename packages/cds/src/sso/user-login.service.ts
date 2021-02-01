import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { v1#/definitions/GetRecentUserLoginAttemptsInput,v1#/definitions/PagedResultDto[UserLoginAttemptDto], } from './sso.types';

@BaseUrl('/SSO/UserLogin')
@Injectable({ providedIn: 'root' })
export class v1UserLoginService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /SSO/UserLogin/RecentUserLoginAttempts
     * 获取登录用户最近的登录尝试记录
     */

    @POST('recentUserLoginAttempts')
    recentUserLoginAttempts(
        @Payload
        _req:v1#/definitions/GetRecentUserLoginAttemptsInput

    ): Observable<v1#/definitions/PagedResultDto[UserLoginAttemptDto]> {
        return null as any
    }



  }
