import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformConditionGroupInfo,PlatformListResultDto1 } from './platform.types';

@BaseUrl('/Platform/BusinessFilter')
@Injectable({ providedIn: 'root' })
export class PlatformBusinessFilterService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/BusinessFilter/GetConditionGroup
     * 暂无备注
     */

    @GET('GetConditionGroup')
    getConditionGroup(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformConditionGroupInfo> {
        return null as any
    }


    /**
     * @param url /Platform/BusinessFilter/GetConditionGroupList
     * 暂无备注
     */

    @GET('GetConditionGroupList')
    getConditionGroupList(
        @Payload
        _req: {businessType?:string} 

    ): Observable<PlatformListResultDto1<PlatformConditionGroupInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/BusinessFilter/CreateOrUpdateConditionGroup
     * 暂无备注
     */

    @POST('CreateOrUpdateConditionGroup')
    createOrUpdateConditionGroup(
        @Payload
        _req:PlatformConditionGroupInfo

    ): Observable<PlatformConditionGroupInfo> {
        return null as any
    }


    /**
     * @param url /Platform/BusinessFilter/DeleteConditionGroup
     * 暂无备注
     */

    @DELETE('DeleteConditionGroup')
    deleteConditionGroup(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
