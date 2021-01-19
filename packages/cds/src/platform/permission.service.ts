import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformListResultDto1,PlatformPermissionDto,PlatformEntityDto1,PlatformMovePermissionItemInput,PlatformGrantFunctionPermissionsToUserInput,PlatformRevokeUserFunctionPermissionsInput,PlatformGrantFunctionPermissionsToRoleInput,PlatformRevokeRoleFunctionPermissionsInput,PlatformDataPermissionDto,PlatformGrantDataPermissionsToUserInput,PlatformRevokeUserDataPermissionsInput,PlatformGrantDataPermissionsToRoleInput,PlatformRevokeRoleDataPermissionsInput,PlatformDistributePermissionForTenantInput } from './platform.types';

@BaseUrl('/Platform/Permission')
@Injectable({ providedIn: 'root' })
export class PlatformPermissionService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Permission/GetAll
     * 暂无备注
     */

    @GET('GetAll')
    getAll(
        @Payload
        _req: {searchText?:string,parentId?:string,isRecursion?:boolean,type?:number,id?:string} 

    ): Observable<PlatformListResultDto1<PlatformPermissionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/CreateOrUpdate
     * 暂无备注
     */

    @POST('CreateOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformPermissionDto

    ): Observable<PlatformPermissionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/Delete
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
     * @param url /Platform/Permission/Recover
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
     * @param url /Platform/Permission/Cancel
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
     * @param url /Platform/Permission/Move
     * 暂无备注
     */

    @POST('Move')
    move(
        @Payload
        _req:PlatformMovePermissionItemInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GetUserFunctionPermissions
     * 暂无备注
     */

    @GET('GetUserFunctionPermissions')
    getUserFunctionPermissions(
        @Payload
        _req: {userId?:number} 

    ): Observable<PlatformListResultDto1<PlatformPermissionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GrantFunctionPermissionsToUser
     * 暂无备注
     */

    @POST('GrantFunctionPermissionsToUser')
    grantFunctionPermissionsToUser(
        @Payload
        _req:PlatformGrantFunctionPermissionsToUserInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/RevokeUserFunctionPermissions
     * 暂无备注
     */

    @POST('RevokeUserFunctionPermissions')
    revokeUserFunctionPermissions(
        @Payload
        _req:PlatformRevokeUserFunctionPermissionsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GetRoleFunctionPermissions
     * 暂无备注
     */

    @GET('GetRoleFunctionPermissions')
    getRoleFunctionPermissions(
        @Payload
        _req: {roleId?:number} 

    ): Observable<PlatformListResultDto1<PlatformPermissionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GrantFunctionPermissionsToRole
     * 暂无备注
     */

    @POST('GrantFunctionPermissionsToRole')
    grantFunctionPermissionsToRole(
        @Payload
        _req:PlatformGrantFunctionPermissionsToRoleInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/RevokeRoleFunctionPermissions
     * 暂无备注
     */

    @POST('RevokeRoleFunctionPermissions')
    revokeRoleFunctionPermissions(
        @Payload
        _req:PlatformRevokeRoleFunctionPermissionsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GetUserDataPermissions
     * 暂无备注
     */

    @GET('GetUserDataPermissions')
    getUserDataPermissions(
        @Payload
        _req: {userId?:number} 

    ): Observable<PlatformListResultDto1<PlatformDataPermissionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GrantDataPermissionsToUser
     * 暂无备注
     */

    @POST('GrantDataPermissionsToUser')
    grantDataPermissionsToUser(
        @Payload
        _req:PlatformGrantDataPermissionsToUserInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/RevokeUserDataPermissions
     * 暂无备注
     */

    @POST('RevokeUserDataPermissions')
    revokeUserDataPermissions(
        @Payload
        _req:PlatformRevokeUserDataPermissionsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GetRoleDataPermissions
     * 暂无备注
     */

    @GET('GetRoleDataPermissions')
    getRoleDataPermissions(
        @Payload
        _req: {roleId?:number} 

    ): Observable<PlatformListResultDto1<PlatformDataPermissionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GrantDataPermissionsToRole
     * 暂无备注
     */

    @POST('GrantDataPermissionsToRole')
    grantDataPermissionsToRole(
        @Payload
        _req:PlatformGrantDataPermissionsToRoleInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/RevokeRoleDataPermissions
     * 暂无备注
     */

    @POST('RevokeRoleDataPermissions')
    revokeRoleDataPermissions(
        @Payload
        _req:PlatformRevokeRoleDataPermissionsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/DistributePermissionForTenant
     * 暂无备注
     */

    @POST('DistributePermissionForTenant')
    distributePermissionForTenant(
        @Payload
        _req:PlatformDistributePermissionForTenantInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GetPermissionForTenant
     * 暂无备注
     */

    @GET('GetPermissionForTenant')
    getPermissionForTenant(
        @Payload
        _req: {tenantId?:number} 

    ): Observable<any> {
        return null as any
    }



  }
