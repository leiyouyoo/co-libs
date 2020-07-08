import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { TfsWebhookInput, } from './platform.types';

@BaseUrl('/platform/TfsWebhookProxy')
@Injectable({ providedIn: 'root' })
export class TfsWebhookProxyService extends BaseApi {

   
    /**
     * @param url /Platform/TfsWebhookProxy/ReleaseNotification
     * 
     */

    @POST('releaseNotification')
    releaseNotification(
        @Payload
        _req:TfsWebhookInput

    ): Observable<any> {
        return null as any
    }



  }
