import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformJPushUserIdBindRegistrationIdDto,PlatformPagedResultDto, } from './platform.types';

@BaseUrl('/platform/JPush')
@Injectable({ providedIn: 'root' })
export class PlatformJPushService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/JPush/CreateAsync
     * 
     */

    @POST('createAsync')
    createAsync(
        @Payload
        _req:PlatformJPushUserIdBindRegistrationIdDto

    ): Observable<PlatformJPushUserIdBindRegistrationIdDto> {
        return null as any
    }


    /**
     * @param url /Platform/JPush/CreateOrUpdate
     * 
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformJPushUserIdBindRegistrationIdDto

    ): Observable<PlatformJPushUserIdBindRegistrationIdDto> {
        return null as any
    }


    /**
     * @param url /Platform/JPush/Get
     * 
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformJPushUserIdBindRegistrationIdDto> {
        return null as any
    }


    /**
     * @param url /Platform/JPush/GetAll
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {sorting?:string,skipCount?:number,maxResultCount?:number} 

    ): Observable<PlatformPagedResultDto<PlatformJPushUserIdBindRegistrationIdDto>> {
        return null as any
    }


    /**
     * @param url /Platform/JPush/Create
     * 
     */

    @POST('create')
    create(
        @Payload
        _req:PlatformJPushUserIdBindRegistrationIdDto

    ): Observable<PlatformJPushUserIdBindRegistrationIdDto> {
        return null as any
    }


    /**
     * @param url /Platform/JPush/Update
     * 
     */

    @PUT('update')
    update(
        @Payload
        _req:PlatformJPushUserIdBindRegistrationIdDto

    ): Observable<PlatformJPushUserIdBindRegistrationIdDto> {
        return null as any
    }


    /**
     * @param url /Platform/JPush/Delete
     * 
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
