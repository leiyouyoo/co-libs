import { Injectable, Injector } from '@angular/core';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { Observable } from 'rxjs';
import { SsoWorkWechatNotificationInput } from './sso.types';

@BaseUrl('/sso/Notification')
@Injectable({ providedIn: 'root' })
export class SSONotificationService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * @param url /SSO/Notification/SendWorkWechatMessage
   * 发送企业微信信息
   */

  @POST('sendWorkWechatMessage')
  sendWorkWechatMessage(
    @Payload
    _req: SsoWorkWechatNotificationInput,
  ): Observable<any> {
    return null as any;
  }
}
