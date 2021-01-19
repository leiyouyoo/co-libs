import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformPagedResultDto1,PlatformPositionDto,PlatformPositionAndOrganizationUnitDto,PlatformCreatePositionDto,PlatformResMsgDto,PlatformUpdatePositionDto,PlatformAddUsersToPositionInput,PlatformAddPositionsToUserInput,PlatformSetUserDefaultPositionInput,PlatformIsInPositionInput,PlatformEntityDto1 } from './platform.types';

@BaseUrl('/Platform/Position')
@Injectable({ providedIn: 'root' })
export class PlatformPositionService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Position/GetAll
     * 暂无备注
     */

    @GET('GetAll')
    getAll(
        @Payload
        _req: {organizationUnitId?:string,parentId?:string,searchText?:string,isRecursion?:boolean,isValid?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto1<PlatformPositionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Position/Get
     * 暂无备注
     */

    @GET('Get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformPositionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/GetPositionAndOrganization
     * 暂无备注
     */

    @GET('GetPositionAndOrganization')
    getPositionAndOrganization(
        @Payload
        _req: {userId?:number} 

    ): Observable<PlatformPositionAndOrganizationUnitDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/Create
     * 暂无备注
     */

    @POST('Create')
    create(
        @Payload
        _req:PlatformPositionDto

    ): Observable<PlatformPositionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/CreateAsync
     * 暂无备注
     */

    @POST('CreateAsync')
    createAsync(
        @Payload
        _req:PlatformCreatePositionDto

    ): Observable<PlatformResMsgDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/Update
     * 暂无备注
     */

    @PUT('Update')
    update(
        @Payload
        _req:PlatformPositionDto

    ): Observable<PlatformPositionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/UpdateAsync
     * 暂无备注
     */

    @PUT('UpdateAsync')
    updateAsync(
        @Payload
        _req:PlatformUpdatePositionDto

    ): Observable<PlatformResMsgDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/CreateOrUpdate
     * 暂无备注
     */

    @POST('CreateOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformPositionDto

    ): Observable<PlatformPositionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Position/Delete
     * 暂无备注
     */

    @DELETE('Delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/AddUsersToPosition
     * 暂无备注
     */

    @POST('AddUsersToPosition')
    addUsersToPosition(
        @Payload
        _req:PlatformAddUsersToPositionInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/SetUserPositions
     * 暂无备注
     */

    @POST('SetUserPositions')
    setUserPositions(
        @Payload
        _req:PlatformAddPositionsToUserInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/SetUserDefaultPosition
     * 暂无备注
     */

    @POST('SetUserDefaultPosition')
    setUserDefaultPosition(
        @Payload
        _req:PlatformSetUserDefaultPositionInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/RemoveUsersFromPosition
     * 暂无备注
     */

    @DELETE('RemoveUsersFromPosition')
    removeUsersFromPosition(
        @Payload
        _req: {userIds?:any[],positionId?:string,isDefault?:boolean} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/RemovePositionsFromUser
     * 暂无备注
     */

    @DELETE('RemovePositionsFromUser')
    removePositionsFromUser(
        @Payload
        _req: {userId?:number} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/GetUsersFromPosition
     * 暂无备注
     */

    @GET('GetUsersFromPosition')
    getUsersFromPosition(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/GetBatchUserPositions
     * 暂无备注
     */

    @GET('GetBatchUserPositions')
    getBatchUserPositions(
        @Payload
        _req: {userIds?:any[]} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/GetPositionByUserId
     * 暂无备注
     */

    @GET('GetPositionByUserId')
    getPositionByUserId(
        @Payload
        _req: {id?:number,isDefault?:boolean} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/IsUserInPosition
     * 暂无备注
     */

    @POST('IsUserInPosition')
    isUserInPosition(
        @Payload
        _req:PlatformIsInPositionInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/GetSubordinates
     * 暂无备注
     */

    @GET('GetSubordinates')
    getSubordinates(
        @Payload
        _req: {userId?:number,subordinatePositionName?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/Recover
     * 暂无备注
     */

    @POST('Recover')
    recover(
        @Payload
        _req:PlatformEntityDto1<any>

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/Cancel
     * 暂无备注
     */

    @POST('Cancel')
    cancel(
        @Payload
        _req:PlatformEntityDto1<any>

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/GetByUserIdCompanyAsync
     * 暂无备注
     */

    @GET('GetByUserIdCompanyAsync')
    getByUserIdCompanyAsync(
        @Payload
        _req: {userId?:number} 

    ): Observable<any> {
        return null as any
    }



  }
