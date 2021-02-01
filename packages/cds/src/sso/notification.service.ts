import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { v1#/definitions/WorkWechatNotificationInput, } from './sso.types';

@BaseUrl('/SSO/Notification')
@Injectable({ providedIn: 'root' })
export class v1NotificationService extends BaseApi {
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
        _req:v1#/definitions/WorkWechatNotificationInput

    ): Observable<any> {
        return null as any
    }



  }
