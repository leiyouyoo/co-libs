import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformNameValueDto,PlatformListResultDto, } from './platform.types';

@BaseUrl('/platform/Timing')
@Injectable({ providedIn: 'root' })
export class PlatformTimingService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Timing/GetTimezones
     * 
     */

    @GET('getTimezones')
    getTimezones(
        @Payload
        _req: {defaultTimezoneScope?:number} 

    ): Observable<PlatformListResultDto<NameValueDto>> {
        return null as any
    }



  }
