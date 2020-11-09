import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformConditionGroupInfo,PlatformListResultDto, } from './platform.types';

@BaseUrl('/platform/BusinessFilter')
@Injectable({ providedIn: 'root' })
export class PlatformBusinessFilterService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/BusinessFilter/GetConditionGroup
     * 
     */

    @GET('getConditionGroup')
    getConditionGroup(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformConditionGroupInfo> {
        return null as any
    }


    /**
     * @param url /Platform/BusinessFilter/GetConditionGroupList
     * 
     */

    @GET('getConditionGroupList')
    getConditionGroupList(
        @Payload
        _req: {businessType?:string} 

    ): Observable<PlatformListResultDto<PlatformConditionGroupInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/BusinessFilter/CreateOrUpdateConditionGroup
     * 
     */

    @POST('createOrUpdateConditionGroup')
    createOrUpdateConditionGroup(
        @Payload
        _req:PlatformConditionGroupInfo

    ): Observable<PlatformConditionGroupInfo> {
        return null as any
    }


    /**
     * @param url /Platform/BusinessFilter/DeleteConditionGroup
     * 
     */

    @DELETE('deleteConditionGroup')
    deleteConditionGroup(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
