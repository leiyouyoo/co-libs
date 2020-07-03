import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { UserConfigurationDto, } from './platform.types';

@BaseUrl('/platform/Session')
@Injectable({ providedIn: 'root' })
export class SessionService extends BaseApi {

   
    /**
     * @param url /Platform/Session/GetCurrentUserConfiguration
     * 获取当前用户配置信息
     */

    @GET('getCurrentUserConfiguration')
    getCurrentUserConfiguration(
        @Payload
        _req: {} 

    ): Observable<UserConfigurationDto> {
        return null as any
    }



  }
