import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformPagedResultDto1,PlatformEditionDto,PlatformSetEditionPermissionsInput,PlatformGrantToTenantsInput,PlatformRevokeFromTenantsInput } from './platform.types';

@BaseUrl('/Platform/Edition')
@Injectable({ providedIn: 'root' })
export class PlatformEditionService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Edition/GetAll
     * 暂无备注
     */

    @GET('GetAll')
    getAll(
        @Payload
        _req: {searchText?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto1<PlatformEditionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/Get
     * 暂无备注
     */

    @GET('Get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformEditionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/Create
     * 暂无备注
     */

    @POST('Create')
    create(
        @Payload
        _req:PlatformEditionDto

    ): Observable<PlatformEditionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/CreateOrUpdate
     * 暂无备注
     */

    @POST('CreateOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformEditionDto

    ): Observable<PlatformEditionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/Update
     * 暂无备注
     */

    @PUT('Update')
    update(
        @Payload
        _req:PlatformEditionDto

    ): Observable<PlatformEditionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/Delete
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
     * @param url /Platform/Edition/GetPermissions
     * 暂无备注
     */

    @GET('GetPermissions')
    getPermissions(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/SetPermissions
     * 暂无备注
     */

    @POST('SetPermissions')
    setPermissions(
        @Payload
        _req:PlatformSetEditionPermissionsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/RemovePermissions
     * 暂无备注
     */

    @DELETE('RemovePermissions')
    removePermissions(
        @Payload
        _req: {functionPermissionIds?:any[],id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/GrantToTenants
     * 暂无备注
     */

    @POST('GrantToTenants')
    grantToTenants(
        @Payload
        _req:PlatformGrantToTenantsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/RevokeFromTenants
     * 暂无备注
     */

    @POST('RevokeFromTenants')
    revokeFromTenants(
        @Payload
        _req:PlatformRevokeFromTenantsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/GetByTenantId
     * 暂无备注
     */

    @GET('GetByTenantId')
    getByTenantId(
        @Payload
        _req: {id?:number} 

    ): Observable<PlatformEditionDto> {
        return null as any
    }



  }
