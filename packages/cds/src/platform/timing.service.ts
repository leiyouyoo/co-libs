import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformListResultDto1,PlatformNameValueDto } from './platform.types';

@BaseUrl('/Platform/Timing')
@Injectable({ providedIn: 'root' })
export class PlatformTimingService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Timing/GetTimezones
     * 暂无备注
     */

    @GET('GetTimezones')
    getTimezones(
        @Payload
        _req: {defaultTimezoneScope?:number} 

    ): Observable<PlatformListResultDto1<PlatformNameValueDto>> {
        return null as any
    }



  }
