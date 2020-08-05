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
     * 获取自定义的过滤条件组详情
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
     * 根据业务类型获取当前用户自定义的过滤条件组
     */

    @GET('getConditionGroupList')
    getConditionGroupList(
        @Payload
        _req: {businessType?:string} 

    ): Observable<PlatformListResultDto<ConditionGroupInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/BusinessFilter/CreateOrUpdateConditionGroup
     * 新增或编辑用户自定义的过滤条件组
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
     * Deletes the condition group.
     */

    @DELETE('deleteConditionGroup')
    deleteConditionGroup(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
