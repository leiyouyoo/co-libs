import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { v1#/definitions/TenantDto,v1#/definitions/ListResultDto[TenantDto],v1#/definitions/CreateTenantDto,v1#/definitions/EntityDto[Int32],v1#/definitions/PagedResultDto[TenantDto], } from './sso.types';

@BaseUrl('/SSO/Tenant')
@Injectable({ providedIn: 'root' })
export class v1TenantService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /SSO/Tenant/QueryTenantListById
     * 根据Id获取租户列表
     */

    @POST('queryTenantListById')
    queryTenantListById(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/Tenant/GetAsync
     * 获取租户列表
     */

    @GET('getAsync')
    getAsync(
        @Payload
        _req: {id?:number} 

    ): Observable<v1#/definitions/TenantDto> {
        return null as any
    }


    /**
     * @param url /SSO/Tenant/GetAllAsync
     * 获取租户列表
     */

    @GET('getAllAsync')
    getAllAsync(
        @Payload
        _req: {searchText?:string,isActive?:boolean} 

    ): Observable<v1#/definitions/ListResultDto[TenantDto]> {
        return null as any
    }


    /**
     * @param url /SSO/Tenant/Create
     * 
     */

    @POST('create')
    create(
        @Payload
        _req:v1#/definitions/CreateTenantDto

    ): Observable<v1#/definitions/TenantDto> {
        return null as any
    }


    /**
     * @param url /SSO/Tenant/CreateAsync
     * 创建
     */

    @POST('createAsync')
    createAsync(
        @Payload
        _req:v1#/definitions/TenantDto

    ): Observable<v1#/definitions/TenantDto> {
        return null as any
    }


    /**
     * @param url /SSO/Tenant/UpdateAsync
     * 更新
     */

    @PUT('updateAsync')
    updateAsync(
        @Payload
        _req:v1#/definitions/TenantDto

    ): Observable<v1#/definitions/TenantDto> {
        return null as any
    }


    /**
     * @param url /SSO/Tenant/Delete
     * 
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:number} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/Tenant/Recover
     * 恢复租户
     */

    @POST('recover')
    recover(
        @Payload
        _req:v1#/definitions/EntityDto[Int32]

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/Tenant/Cancel
     * 作废租户
     */

    @POST('cancel')
    cancel(
        @Payload
        _req:v1#/definitions/EntityDto[Int32]

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/Tenant/Get
     * 
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:number} 

    ): Observable<v1#/definitions/TenantDto> {
        return null as any
    }


    /**
     * @param url /SSO/Tenant/GetAll
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {keyword?:string,isActive?:boolean,skipCount?:number,maxResultCount?:number} 

    ): Observable<v1#/definitions/PagedResultDto[TenantDto]> {
        return null as any
    }


    /**
     * @param url /SSO/Tenant/Update
     * 
     */

    @PUT('update')
    update(
        @Payload
        _req:v1#/definitions/TenantDto

    ): Observable<v1#/definitions/TenantDto> {
        return null as any
    }



  }
