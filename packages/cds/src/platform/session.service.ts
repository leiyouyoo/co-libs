import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformUserConfigurationDto, } from './platform.types';

@BaseUrl('/platform/Session')
@Injectable({ providedIn: 'root' })
export class PlatformSessionService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Session/GetCurrentUserConfiguration
     * 获取当前用户配置信息
     */

    @GET('getCurrentUserConfiguration')
    getCurrentUserConfiguration(
        @Payload
        _req: {client?:string} 

    ): Observable<PlatformUserConfigurationDto> {
        return null as any
    }



  }
