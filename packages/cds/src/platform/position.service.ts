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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
        _req:PlatformEntityDto<any>

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
        _req:PlatformEntityDto<any>

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Position/GetByUserIdCompanyAsync
     * 
     */

    @GET('getByUserIdCompanyAsync')
    getByUserIdCompanyAsync(
        @Payload
        _req: {userId?:number} 

    ): Observable<any> {
        return null as any
    }



  }
