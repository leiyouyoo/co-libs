import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformPositionDto,PlatformPagedResultDto,PlatformPositionAndOrganizationUnitDto,PlatformCreatePositionDto,PlatformResMsgDto,PlatformUpdatePositionDto,PlatformAddUsersToPositionInput,PlatformAddPositionsToUserInput,PlatformSetUserDefaultPositionInput,PlatformIsInPositionInput,PlatformEntityDto, } from './platform.types';

@BaseUrl('/platform/Position')
@Injectable({ providedIn: 'root' })
export class PlatformPositionService extends BaseApi {
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
        _req: {organizationUnitId?:string,parentId?:string,searchText?:string,isRecursion?:boolean,isValid?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto<PlatformPositionDto>> {
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

    ): Observable<PlatformPositionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/GetPositionAndOrganization
     * 获取用户的职位及组织机构
     */

    @GET('getPositionAndOrganization')
    getPositionAndOrganization(
        @Payload
        _req: {userId?:number} 

    ): Observable<PlatformPositionAndOrganizationUnitDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/Create
     * 创建
     */

    @POST('create')
    create(
        @Payload
        _req:PlatformPositionDto

    ): Observable<PlatformPositionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/CreateAsync
     * 创建职位（支持同一职位的多组织生成）
     */

    @POST('createAsync')
    createAsync(
        @Payload
        _req:PlatformCreatePositionDto

    ): Observable<PlatformResMsgDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/Update
     * 更新
     */

    @PUT('update')
    update(
        @Payload
        _req:PlatformPositionDto

    ): Observable<PlatformPositionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/UpdateAsync
     * 编辑职位（支持同一职位的多组织生成）
     */

    @PUT('updateAsync')
    updateAsync(
        @Payload
        _req:PlatformUpdatePositionDto

    ): Observable<PlatformResMsgDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/CreateOrUpdate
     * 创建或更新职位
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformPositionDto

    ): Observable<PlatformPositionDto> {
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
        _req:PlatformAddUsersToPositionInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/SetUserPositions
     * 设置用户职位
     */

    @POST('setUserPositions')
    setUserPositions(
        @Payload
        _req:PlatformAddPositionsToUserInput

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
        _req:PlatformSetUserDefaultPositionInput

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
     * @param url /Platform/Position/RemovePositionsFromUser
     * 删除用户的职位
     */

    @DELETE('removePositionsFromUser')
    removePositionsFromUser(
        @Payload
        _req: {userId?:number} 

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
     * @param url /Platform/Position/GetPositionByUserId
     * 获取用户职位集合
     */

    @GET('getPositionByUserId')
    getPositionByUserId(
        @Payload
        _req: {id?:number,isDefault?:boolean} 

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
        _req:PlatformIsInPositionInput

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
     * 恢复职位
     */

    @POST('recover')
    recover(
        @Payload
        _req:PlatformEntityDto<any>

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/Cancel
     * 作废职位
     */

    @POST('cancel')
    cancel(
        @Payload
        _req:PlatformEntityDto<any>

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/GetByUserIdCompanyAsync
     * 获取当前登录用户公司集合
     */

    @GET('getByUserIdCompanyAsync')
    getByUserIdCompanyAsync(
        @Payload
        _req: {userId?:number} 

    ): Observable<any> {
        return null as any
    }



  }
