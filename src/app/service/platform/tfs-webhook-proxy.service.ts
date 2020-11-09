import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformTfsWebhookInput, } from './platform.types';

@BaseUrl('/platform/TfsWebhookProxy')
@Injectable({ providedIn: 'root' })
export class PlatformTfsWebhookProxyService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/TfsWebhookProxy/ReleaseNotification
     * 
     */

    @POST('releaseNotification')
    releaseNotification(
        @Payload
        _req:PlatformTfsWebhookInput

    ): Observable<any> {
        return null as any
    }



  }
