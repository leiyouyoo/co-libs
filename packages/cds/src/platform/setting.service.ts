import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformSettingDto } from './platform.types';

@BaseUrl('/Platform/Setting')
@Injectable({ providedIn: 'root' })
export class PlatformSettingService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Setting/GetCurrentUserSetting
     * 暂无备注
     */

    @GET('GetCurrentUserSetting')
    getCurrentUserSetting(
        @Payload
        _req: {key?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Setting/SetCurrentUserSetting
     * 暂无备注
     */

    @POST('SetCurrentUserSetting')
    setCurrentUserSetting(
        @Payload
        _req:PlatformSettingDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Setting/GetCurrentUserSettings
     * 暂无备注
     */

    @GET('GetCurrentUserSettings')
    getCurrentUserSettings(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }



  }
