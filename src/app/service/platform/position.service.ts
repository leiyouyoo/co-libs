import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';

import { PagedResultDto,PositionDto,PositionAndOrganizationUnitDto,CreatePositionDto,ResMsgDto,UpdatePositionDto,AddUsersToPositionInput,SetUserDefaultPositionInput,IsInPositionInput,EntityDto, } from './platform.types';

@BaseUrl('/platform/Position')
@Injectable({ providedIn: 'root' })
export class PositionService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Position/GetAll
     * 返回职位集合
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {organizationUnitId?:string,parentId?:string,isRecursion?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PagedResultDto<PositionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Position/Get
     * 获取职位明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PositionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/GetPositionAndOrganization
     * 
     */

    @GET('getPositionAndOrganization')
    getPositionAndOrganization(
        @Payload
        _req: {userId?:number} 

    ): Observable<PositionAndOrganizationUnitDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/Create
     * 创建
     */

    @POST('create')
    create(
        @Payload
        _req:PositionDto

    ): Observable<PositionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/CreateAsync
     * 
     */

    @POST('createAsync')
    createAsync(
        @Payload
        _req:CreatePositionDto

    ): Observable<ResMsgDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/Update
     * 更新
     */

    @PUT('update')
    update(
        @Payload
        _req:PositionDto

    ): Observable<PositionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/UpdateAsync
     * 
     */

    @PUT('updateAsync')
    updateAsync(
        @Payload
        _req:UpdatePositionDto

    ): Observable<ResMsgDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/CreateOrUpdate
     * 创建或更新职位
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PositionDto

    ): Observable<PositionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/Delete
     * 删除
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/AddUsersToPosition
     * 添加用户到指定职位中
     */

    @POST('addUsersToPosition')
    addUsersToPosition(
        @Payload
        _req:AddUsersToPositionInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/SetUserDefaultPosition
     * 设置默认用户职位
     */

    @POST('setUserDefaultPosition')
    setUserDefaultPosition(
        @Payload
        _req:SetUserDefaultPositionInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/RemoveUsersFromPosition
     * 删除指定用户从指定职位中
     */

    @DELETE('removeUsersFromPosition')
    removeUsersFromPosition(
        @Payload
        _req: {userIds?:any[],positionId?:string,isDefault?:boolean} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/GetUsersFromPosition
     * 获取指定职位下用户集合
     */

    @GET('getUsersFromPosition')
    getUsersFromPosition(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/GetBatchUserPositions
     * 批量获取用户职位集合
     */

    @GET('getBatchUserPositions')
    getBatchUserPositions(
        @Payload
        _req: {userIds?:any[]} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/IsUserInPosition
     * 判断用户是否挂在指定职位下
     */

    @POST('isUserInPosition')
    isUserInPosition(
        @Payload
        _req:IsInPositionInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/GetSubordinates
     * 获取下属集合
     */

    @GET('getSubordinates')
    getSubordinates(
        @Payload
        _req: {userId?:number,subordinatePositionName?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/Recover
     * 
     */

    @POST('recover')
    recover(
        @Payload
        _req:EntityDto<any>

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/Cancel
     * 
     */

    @POST('cancel')
    cancel(
        @Payload
        _req:EntityDto<any>

    ): Observable<any> {
        return null as any
    }



  }
