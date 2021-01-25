import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformListResultDto1,PlatformOrganizationUnitDto,PlatformPagedResultDto1,PlatformUserInfo,PlatformIMContactGroupDto,PlatformContactUserWithPinyinDto,PlatformSetRemarkAndDescInput,PlatformContactUserDto,PlatformOrganizationUnitUserDto,PlatformMoveOrganizationUnitInput,PlatformEntityDto1 } from './platform.types';

@BaseUrl('/Platform/OrganizationUnit')
@Injectable({ providedIn: 'root' })
export class PlatformOrganizationUnitService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/OrganizationUnit/GetByUserId
     * 暂无备注
     */

    @GET('GetByUserId')
    getByUserId(
        @Payload
        _req: {userId?:number} 

    ): Observable<PlatformListResultDto1<PlatformOrganizationUnitDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetGroupOrganizationUnits
     * 暂无备注
     */

    @GET('GetGroupOrganizationUnits')
    getGroupOrganizationUnits(
        @Payload
        _req: {} 

    ): Observable<PlatformListResultDto1<PlatformOrganizationUnitDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetByCustomerIdAsync
     * 暂无备注
     */

    @GET('GetByCustomerIdAsync')
    getByCustomerIdAsync(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformOrganizationUnitDto> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetAsync
     * 暂无备注
     */

    @GET('GetAsync')
    getAsync(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformOrganizationUnitDto> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetUsersByOrganizationUnitId
     * 暂无备注
     */

    @GET('GetUsersByOrganizationUnitId')
    getUsersByOrganizationUnitId(
        @Payload
        _req: {searchText?:string,organizationUnitId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto1<PlatformUserInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetUsersByCompanyCustomerId
     * 暂无备注
     */

    @GET('GetUsersByCompanyCustomerId')
    getUsersByCompanyCustomerId(
        @Payload
        _req: {userId?:number,searchText?:string,customerId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto1<PlatformUserInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetSaleUsers
     * 暂无备注
     */

    @GET('GetSaleUsers')
    getSaleUsers(
        @Payload
        _req: {userId?:number,searchText?:string,isOwnDepartment?:boolean,includeOrganization?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto1<PlatformUserInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetAllUsersByOrganizationUnitId
     * 暂无备注
     */

    @GET('GetAllUsersByOrganizationUnitId')
    getAllUsersByOrganizationUnitId(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformListResultDto1<PlatformUserInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetCustomerServiceUsers
     * 暂无备注
     */

    @GET('GetCustomerServiceUsers')
    getCustomerServiceUsers(
        @Payload
        _req: {ids?:any[],searchText?:string,type?:number,organizationType?:number,isOwnDepartment?:boolean,organizationUnitId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto1<PlatformUserInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetUsersAndOrganizationUnit
     * 暂无备注
     */

    @GET('GetUsersAndOrganizationUnit')
    getUsersAndOrganizationUnit(
        @Payload
        _req: {input?:object} 

    ): Observable<PlatformListResultDto1<PlatformIMContactGroupDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetMyWorkers
     * 暂无备注
     */

    @GET('GetMyWorkers')
    getMyWorkers(
        @Payload
        _req: {input?:object} 

    ): Observable<PlatformListResultDto1<PlatformContactUserWithPinyinDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/SetRemarkAndDescAsync
     * 暂无备注
     */

    @POST('SetRemarkAndDescAsync')
    setRemarkAndDescAsync(
        @Payload
        _req:PlatformSetRemarkAndDescInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetUserDetail
     * 暂无备注
     */

    @GET('GetUserDetail')
    getUserDetail(
        @Payload
        _req: {userId?:number} 

    ): Observable<PlatformContactUserDto> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetOrganizationUnitUsers
     * 暂无备注
     */

    @GET('GetOrganizationUnitUsers')
    getOrganizationUnitUsers(
        @Payload
        _req: {organizationUnitId?:string,organizationUnitName?:string} 

    ): Observable<PlatformListResultDto1<PlatformOrganizationUnitUserDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetPositionUserDetail
     * 暂无备注
     */

    @GET('GetPositionUserDetail')
    getPositionUserDetail(
        @Payload
        _req: {userId?:number} 

    ): Observable<PlatformOrganizationUnitUserDto> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetAll
     * 暂无备注
     */

    @GET('GetAll')
    getAll(
        @Payload
        _req: {parentId?:string,isRecursion?:boolean,type?:number} 

    ): Observable<PlatformListResultDto1<PlatformOrganizationUnitDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetAllListAsync
     * 暂无备注
     */

    @GET('GetAllListAsync')
    getAllListAsync(
        @Payload
        _req: {searchText?:string} 

    ): Observable<PlatformListResultDto1<PlatformOrganizationUnitDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/CreateOrUpdate
     * 暂无备注
     */

    @POST('CreateOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformOrganizationUnitDto

    ): Observable<PlatformOrganizationUnitDto> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/Move
     * 暂无备注
     */

    @POST('Move')
    move(
        @Payload
        _req:PlatformMoveOrganizationUnitInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/Delete
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
     * @param url /Platform/OrganizationUnit/Recover
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
     * @param url /Platform/OrganizationUnit/Cancel
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
     * @param url /Platform/OrganizationUnit/GetOrganizationUnitsByUserName
     * 暂无备注
     */

    @GET('GetOrganizationUnitsByUserName')
    getOrganizationUnitsByUserName(
        @Payload
        _req: {searchText?:string} 

    ): Observable<any> {
        return null as any
    }



  }
