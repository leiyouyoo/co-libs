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
     * 获取用户所在组织机构
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
     * 获取所有组织机构（分层级）
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
     * 获取组织机构详情
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
     * 获取组织机构下的用户
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
     * 获取公司下的用户
     */

    @GET('getUsersByCompanyCustomerId')
    getUsersByCompanyCustomerId(
        @Payload
        _req: {userId?:number,searchText?:string,customerId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto<PlatformUserInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/OrganizationUnit/GetSaleUsers
     * 获取业务员
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
     * 获取组织机构下的所有用户（平台用）
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
     * 获取客服人员
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
     * 获取组织机构下的用户带上组织机构、职位信息（用于IM ）
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
     * 获取 用户详情带职位、组织机构
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
     * 获取组织机构下的用户
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
     * 获取用户详情
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
     * 获取组织节点集合
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
     * 获取全部组织节点集合
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
     * 保存组织项
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
     * 移动组织节点
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
     * 删除组织节点
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
     * 恢复组织
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
     * 作废组织
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
     * 根据用户名称模糊获取所属组织架构
     */

    @GET('getOrganizationUnitsByUserName')
    getOrganizationUnitsByUserName(
        @Payload
        _req: {searchText?:string} 

    ): Observable<any> {
        return null as any
    }



  }
