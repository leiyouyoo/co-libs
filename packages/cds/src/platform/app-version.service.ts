import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformAppVersionDto,PlatformPagedResultDto1 } from './platform.types';

@BaseUrl('/Platform/AppVersion')
@Injectable({ providedIn: 'root' })
export class PlatformAppVersionService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/AppVersion/GetVersionByAppType
     * 暂无备注
     */

    @GET('GetVersionByAppType')
    getVersionByAppType(
        @Payload
        _req: {input?:number,from?:number} 

    ): Observable<PlatformAppVersionDto> {
        return null as any
    }


    /**
     * @param url /Platform/AppVersion/CheckVersion
     * 暂无备注
     */

    @POST('CheckVersion')
    checkVersion(
        @Payload
        _req:PlatformAppVersionDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/AppVersion/CreateOrUpdate
     * 暂无备注
     */

    @POST('CreateOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformAppVersionDto

    ): Observable<PlatformAppVersionDto> {
        return null as any
    }


    /**
     * @param url /Platform/AppVersion/Get
     * 暂无备注
     */

    @GET('Get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformAppVersionDto> {
        return null as any
    }


    /**
     * @param url /Platform/AppVersion/GetAll
     * 暂无备注
     */

    @GET('GetAll')
    getAll(
        @Payload
        _req: {sorting?:string,skipCount?:number,maxResultCount?:number} 

    ): Observable<PlatformPagedResultDto1<PlatformAppVersionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/AppVersion/Create
     * 暂无备注
     */

    @POST('Create')
    create(
        @Payload
        _req:PlatformAppVersionDto

    ): Observable<PlatformAppVersionDto> {
        return null as any
    }


    /**
     * @param url /Platform/AppVersion/Update
     * 暂无备注
     */

    @PUT('Update')
    update(
        @Payload
        _req:PlatformAppVersionDto

    ): Observable<PlatformAppVersionDto> {
        return null as any
    }


    /**
     * @param url /Platform/AppVersion/Delete
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
