import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformPermissionDto,PlatformPagedResultDto,PlatformMovePermissionItemInput,PlatformListResultDto,PlatformGrantFunctionPermissionsToUserInput,PlatformRevokeUserFunctionPermissionsInput,PlatformGrantFunctionPermissionsToRoleInput,PlatformRevokeRoleFunctionPermissionsInput,PlatformDataPermissionDto,PlatformGrantDataPermissionsToUserInput,PlatformRevokeUserDataPermissionsInput,PlatformGrantDataPermissionsToRoleInput,PlatformRevokeRoleDataPermissionsInput, } from './platform.types';

@BaseUrl('/platform/Permission')
@Injectable({ providedIn: 'root' })
export class PlatformPermissionService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Permission/GetAll
     * 获取所有权限项集合
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {searchText?:string,parentId?:string,isRecursion?:boolean,type?:number,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto<PlatformPermissionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/CreateOrUpdate
     * 保存权限项
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformPermissionDto

    ): Observable<PlatformPermissionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/Delete
     * 删除权限项
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/Move
     * 移动权限项
     */

    @POST('move')
    move(
        @Payload
        _req:PlatformMovePermissionItemInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GetUserFunctionPermissions
     * 获取用户拥有的功能权限集合
     */

    @GET('getUserFunctionPermissions')
    getUserFunctionPermissions(
        @Payload
        _req: {userId?:number} 

    ): Observable<PlatformListResultDto<PlatformPermissionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GrantFunctionPermissionsToUser
     * 批量授予用户功能权限
     */

    @POST('grantFunctionPermissionsToUser')
    grantFunctionPermissionsToUser(
        @Payload
        _req:PlatformGrantFunctionPermissionsToUserInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/RevokeUserFunctionPermissions
     * 撤销用户功能权限
     */

    @POST('revokeUserFunctionPermissions')
    revokeUserFunctionPermissions(
        @Payload
        _req:PlatformRevokeUserFunctionPermissionsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GetRoleFunctionPermissions
     * 获取角色拥有的权限集合
     */

    @GET('getRoleFunctionPermissions')
    getRoleFunctionPermissions(
        @Payload
        _req: {roleId?:number} 

    ): Observable<PlatformListResultDto<PlatformPermissionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GrantFunctionPermissionsToRole
     * 批量授予角色权限
     */

    @POST('grantFunctionPermissionsToRole')
    grantFunctionPermissionsToRole(
        @Payload
        _req:PlatformGrantFunctionPermissionsToRoleInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/RevokeRoleFunctionPermissions
     * 批量撤销角色权限
     */

    @POST('revokeRoleFunctionPermissions')
    revokeRoleFunctionPermissions(
        @Payload
        _req:PlatformRevokeRoleFunctionPermissionsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GetUserDataPermissions
     * 获取用户拥有的数据权限集合
     */

    @GET('getUserDataPermissions')
    getUserDataPermissions(
        @Payload
        _req: {userId?:number} 

    ): Observable<PlatformListResultDto<PlatformDataPermissionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GrantDataPermissionsToUser
     * 批量授予用户数据权限
     */

    @POST('grantDataPermissionsToUser')
    grantDataPermissionsToUser(
        @Payload
        _req:PlatformGrantDataPermissionsToUserInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/RevokeUserDataPermissions
     * 撤销用户数据权限
     */

    @POST('revokeUserDataPermissions')
    revokeUserDataPermissions(
        @Payload
        _req:PlatformRevokeUserDataPermissionsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GetRoleDataPermissions
     * 获取角色拥有的数据权限集合
     */

    @GET('getRoleDataPermissions')
    getRoleDataPermissions(
        @Payload
        _req: {roleId?:number} 

    ): Observable<PlatformListResultDto<PlatformDataPermissionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GrantDataPermissionsToRole
     * 批量授予角色数据权限
     */

    @POST('grantDataPermissionsToRole')
    grantDataPermissionsToRole(
        @Payload
        _req:PlatformGrantDataPermissionsToRoleInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/RevokeRoleDataPermissions
     * 批量撤销角色数据权限
     */

    @POST('revokeRoleDataPermissions')
    revokeRoleDataPermissions(
        @Payload
        _req:PlatformRevokeRoleDataPermissionsInput

    ): Observable<any> {
        return null as any
    }



  }
