import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformEditionDto,PlatformPagedResultDto,PlatformSetEditionPermissionsInput,PlatformGrantToTenantsInput,PlatformRevokeFromTenantsInput, } from './platform.types';

@BaseUrl('/platform/Edition')
@Injectable({ providedIn: 'root' })
export class PlatformEditionService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Edition/GetAll
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {searchText?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto<PlatformEditionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/Get
     * 
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformEditionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/Create
     * 
     */

    @POST('create')
    create(
        @Payload
        _req:PlatformEditionDto

    ): Observable<PlatformEditionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/CreateOrUpdate
     * 
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformEditionDto

    ): Observable<PlatformEditionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/Update
     * 
     */

    @PUT('update')
    update(
        @Payload
        _req:PlatformEditionDto

    ): Observable<PlatformEditionDto> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/Delete
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
     * @param url /Platform/Edition/GetPermissions
     * 
     */

    @GET('getPermissions')
    getPermissions(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/SetPermissions
     * 
     */

    @POST('setPermissions')
    setPermissions(
        @Payload
        _req:PlatformSetEditionPermissionsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/RemovePermissions
     * 
     */

    @DELETE('removePermissions')
    removePermissions(
        @Payload
        _req: {functionPermissionIds?:any[],id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/GrantToTenants
     * 
     */

    @POST('grantToTenants')
    grantToTenants(
        @Payload
        _req:PlatformGrantToTenantsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/RevokeFromTenants
     * 
     */

    @POST('revokeFromTenants')
    revokeFromTenants(
        @Payload
        _req:PlatformRevokeFromTenantsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Edition/GetByTenantId
     * 
     */

    @GET('getByTenantId')
    getByTenantId(
        @Payload
        _req: {id?:number} 

    ): Observable<PlatformEditionDto> {
        return null as any
    }



  }
