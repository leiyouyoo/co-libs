import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformCacheExampleDto,PlatformPagedResultDto,PlatformEntityHistorySnapshot, } from './platform.types';

@BaseUrl('/platform/CacheExample')
@Injectable({ providedIn: 'root' })
export class PlatformCacheExampleService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/CacheExample/GetAll
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {name?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto<PlatformCacheExampleDto>> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/Get
     * 
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformCacheExampleDto> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/Subscriber
     * 
     */

    @POST('subscriber')
    subscriber(
        @Payload
        _req: {p?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/Create
     * 
     */

    @POST('create')
    create(
        @Payload
        _req:PlatformCacheExampleDto

    ): Observable<PlatformCacheExampleDto> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/BulkInsert
     * 
     */

    @POST('bulkInsert')
    bulkInsert(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/Update
     * 
     */

    @PUT('update')
    update(
        @Payload
        _req:PlatformCacheExampleDto

    ): Observable<PlatformCacheExampleDto> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/Test
     * 
     */

    @POST('test')
    test(
        @Payload
        _req: {} 

    ): Observable<PlatformEntityHistorySnapshot> {
        return null as any
    }


    /**
     * @param url /Platform/CacheExample/Delete
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
