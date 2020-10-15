import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformPermissionDto,PlatformListResultDto,PlatformEntityDto,PlatformMovePermissionItemInput,PlatformGrantFunctionPermissionsToUserInput,PlatformRevokeUserFunctionPermissionsInput,PlatformGrantFunctionPermissionsToRoleInput,PlatformRevokeRoleFunctionPermissionsInput,PlatformDataPermissionDto,PlatformGrantDataPermissionsToUserInput,PlatformRevokeUserDataPermissionsInput,PlatformGrantDataPermissionsToRoleInput,PlatformRevokeRoleDataPermissionsInput,PlatformDistributePermissionForTenantInput, } from './platform.types';

@BaseUrl('/platform/Permission')
@Injectable({ providedIn: 'root' })
export class PlatformPermissionService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Permission/GetAll
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {searchText?:string,parentId?:string,isRecursion?:boolean,type?:number,id?:string} 

    ): Observable<PlatformListResultDto<PlatformPermissionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/CreateOrUpdate
     * 
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
     * @param url /Platform/Permission/Recover
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
     * @param url /Platform/Permission/Cancel
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
     * @param url /Platform/Permission/Move
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
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
     * 
     */

    @POST('revokeRoleDataPermissions')
    revokeRoleDataPermissions(
        @Payload
        _req:PlatformRevokeRoleDataPermissionsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/DistributePermissionForTenant
     * 
     */

    @POST('distributePermissionForTenant')
    distributePermissionForTenant(
        @Payload
        _req:PlatformDistributePermissionForTenantInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Permission/GetPermissionForTenant
     * 
     */

    @GET('getPermissionForTenant')
    getPermissionForTenant(
        @Payload
        _req: {tenantId?:number} 

    ): Observable<any> {
        return null as any
    }



  }
