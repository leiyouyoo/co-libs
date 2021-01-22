import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformUserConfigurationDto } from './platform.types';

@BaseUrl('/Platform/Session')
@Injectable({ providedIn: 'root' })
export class PlatformSessionService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Session/GetCurrentUserConfiguration
     * 暂无备注
     */

    @GET('GetCurrentUserConfiguration')
    getCurrentUserConfiguration(
        @Payload
        _req: {client?:string} 

    ): Observable<PlatformUserConfigurationDto> {
        return null as any
    }



  }
