import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { v1#/definitions/ListResultDto[CacheDto],v1#/definitions/EntityDto[String], } from './sso.types';

@BaseUrl('/SSO/Caching')
@Injectable({ providedIn: 'root' })
export class v1CachingService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /SSO/Caching/GetAllCaches
     * 
     */

    @GET('getAllCaches')
    getAllCaches(
        @Payload
        _req: {} 

    ): Observable<v1#/definitions/ListResultDto[CacheDto]> {
        return null as any
    }


    /**
     * @param url /SSO/Caching/ClearCache
     * 
     */

    @POST('clearCache')
    clearCache(
        @Payload
        _req:v1#/definitions/EntityDto[String]

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/Caching/ClearAllCaches
     * 
     */

    @POST('clearAllCaches')
    clearAllCaches(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }



  }
