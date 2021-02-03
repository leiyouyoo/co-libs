import { Injectable, Injector } from '@angular/core';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { Observable } from 'rxjs';
import { SsoGetRecentUserLoginAttemptsInput, SsoPagedResultDto } from './sso.types';

@BaseUrl('/sso/UserLogin')
@Injectable({ providedIn: 'root' })
export class SSOUserLoginService extends BaseApi {
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
    _req: SsoGetRecentUserLoginAttemptsInput,
  ): Observable<SsoPagedResultDto[]> {
    return null as any;
  }
}
