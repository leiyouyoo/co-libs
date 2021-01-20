import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformPagedResultDto1,PlatformCacheExampleDto,PlatformEntityHistorySnapshot } from './platform.types';

@BaseUrl('/Platform/CacheExample')
@Injectable({ providedIn: 'root' })
export class PlatformCacheExampleService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/CacheExample/GetAll
     * 暂无备注
     */

    @GET('GetAll')
    getAll(
        @Payload
        _req: {name?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto1<PlatformCacheExampleDto>> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/Get
     * 暂无备注
     */

    @GET('Get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformCacheExampleDto> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/Subscriber
     * 暂无备注
     */

    @POST('Subscriber')
    subscriber(
        @Payload
        _req: {p?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/Create
     * 暂无备注
     */

    @POST('Create')
    create(
        @Payload
        _req:PlatformCacheExampleDto

    ): Observable<PlatformCacheExampleDto> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/BulkInsert
     * 暂无备注
     */

    @POST('BulkInsert')
    bulkInsert(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/Update
     * 暂无备注
     */

    @PUT('Update')
    update(
        @Payload
        _req:PlatformCacheExampleDto

    ): Observable<PlatformCacheExampleDto> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/Test
     * 暂无备注
     */

    @POST('Test')
    test(
        @Payload
        _req: {} 

    ): Observable<PlatformEntityHistorySnapshot> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/Delete
     * 暂无备注
     */

    @DELETE('Delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
