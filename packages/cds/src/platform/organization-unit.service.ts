import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformOrganizationUnitDto,PlatformListResultDto,PlatformUserInfo,PlatformPagedResultDto,PlatformIMContactGroupDto,PlatformContactUserDto,PlatformOrganizationUnitUserDto,PlatformMoveOrganizationUnitInput,PlatformEntityDto, } from './platform.types';

@BaseUrl('/platform/OrganizationUnit')
@Injectable({ providedIn: 'root' })
export class PlatformOrganizationUnitService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/OrganizationUnit/GetByUserId
     * 
     */

    @GET('getByUserId')
    getByUserId(
        @Payload
        _req: {userId?:number} 

    ): Observable<PlatformListResultDto<PlatformOrganizationUnitDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetGroupOrganizationUnits
     * 
     */

    @GET('getGroupOrganizationUnits')
    getGroupOrganizationUnits(
        @Payload
        _req: {} 

    ): Observable<PlatformListResultDto<PlatformOrganizationUnitDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetAsync
     * 
     */

    @GET('getAsync')
    getAsync(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformOrganizationUnitDto> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetUsersByOrganizationUnitId
     * 
     */

    @GET('getUsersByOrganizationUnitId')
    getUsersByOrganizationUnitId(
        @Payload
        _req: {searchText?:string,organizationUnitId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto<PlatformUserInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetUsersByCompanyCustomerId
     * 
     */

    @GET('getUsersByCompanyCustomerId')
    getUsersByCompanyCustomerId(
        @Payload
        _req: {searchText?:string,customerId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto<PlatformUserInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetSaleUsers
     * 
     */

    @GET('getSaleUsers')
    getSaleUsers(
        @Payload
        _req: {userId?:number,searchText?:string,isOwnDepartment?:boolean,includeOrganization?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto<PlatformUserInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetAllUsersByOrganizationUnitId
     * 
     */

    @GET('getAllUsersByOrganizationUnitId')
    getAllUsersByOrganizationUnitId(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformListResultDto<PlatformUserInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetCustomerServiceUsers
     * 
     */

    @GET('getCustomerServiceUsers')
    getCustomerServiceUsers(
        @Payload
        _req: {ids?:any[],searchText?:string,type?:number,organizationType?:number,isOwnDepartment?:boolean,organizationUnitId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto<PlatformUserInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetUsersAndOrganizationUnit
     * 
     */

    @GET('getUsersAndOrganizationUnit')
    getUsersAndOrganizationUnit(
        @Payload
        _req: {input?:object} 

    ): Observable<PlatformListResultDto<PlatformIMContactGroupDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetUserDetail
     * 
     */

    @GET('getUserDetail')
    getUserDetail(
        @Payload
        _req: {userId?:number} 

    ): Observable<PlatformContactUserDto> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetOrganizationUnitUsers
     * 
     */

    @GET('getOrganizationUnitUsers')
    getOrganizationUnitUsers(
        @Payload
        _req: {organizationUnitId?:string,organizationUnitName?:string} 

    ): Observable<PlatformListResultDto<PlatformOrganizationUnitUserDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetPositionUserDetail
     * 
     */

    @GET('getPositionUserDetail')
    getPositionUserDetail(
        @Payload
        _req: {userId?:number} 

    ): Observable<PlatformOrganizationUnitUserDto> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetAll
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {parentId?:string,isRecursion?:boolean,type?:number} 

    ): Observable<PlatformListResultDto<PlatformOrganizationUnitDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetAllListAsync
     * 
     */

    @GET('getAllListAsync')
    getAllListAsync(
        @Payload
        _req: {searchText?:string} 

    ): Observable<PlatformListResultDto<PlatformOrganizationUnitDto>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/CreateOrUpdate
     * 
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformOrganizationUnitDto

    ): Observable<PlatformOrganizationUnitDto> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/Move
     * 
     */

    @POST('move')
    move(
        @Payload
        _req:PlatformMoveOrganizationUnitInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/Delete
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
     * @param url /Platform/OrganizationUnit/Recover
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
     * @param url /Platform/OrganizationUnit/Cancel
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
     * @param url /Platform/OrganizationUnit/GetOrganizationUnitsByUserName
     * 
     */

    @GET('getOrganizationUnitsByUserName')
    getOrganizationUnitsByUserName(
        @Payload
        _req: {searchText?:string} 

    ): Observable<any> {
        return null as any
    }



  }
