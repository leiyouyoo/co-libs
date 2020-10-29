import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformSettingDto, } from './platform.types';

@BaseUrl('/platform/Setting')
@Injectable({ providedIn: 'root' })
export class PlatformSettingService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Setting/GetCurrentUserSetting
     * 获取用户指定键设置信息
     */

    @GET('getCurrentUserSetting')
    getCurrentUserSetting(
        @Payload
        _req: {key?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Setting/SetCurrentUserSetting
     * 设置信息
     */

    @POST('setCurrentUserSetting')
    setCurrentUserSetting(
        @Payload
        _req:PlatformSettingDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Setting/GetCurrentUserSettings
     * 获取当前用户设置
     */

    @GET('getCurrentUserSettings')
    getCurrentUserSettings(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }



  }
