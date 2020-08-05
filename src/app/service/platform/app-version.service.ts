import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformAppVersionDto,PlatformPagedResultDto, } from './platform.types';

@BaseUrl('/platform/AppVersion')
@Injectable({ providedIn: 'root' })
export class PlatformAppVersionService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/AppVersion/GetVersionByAppType
     * 根据系统类型获取当前系统的最新版本号
     */

    @GET('getVersionByAppType')
    getVersionByAppType(
        @Payload
        _req: {input?:number} 

    ): Observable<PlatformAppVersionDto> {
        return null as any
    }


    /**
     * @param url /Platform/AppVersion/CheckVersion
     * 检查更新版本(true表示有更新，false表示没有更新)
     */

    @POST('checkVersion')
    checkVersion(
        @Payload
        _req:PlatformAppVersionDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/AppVersion/CreateOrUpdate
     * 保存
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformAppVersionDto

    ): Observable<PlatformAppVersionDto> {
        return null as any
    }


    /**
     * @param url /Platform/AppVersion/Get
     * 
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformAppVersionDto> {
        return null as any
    }


    /**
     * @param url /Platform/AppVersion/GetAll
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {sorting?:string,skipCount?:number,maxResultCount?:number} 

    ): Observable<PlatformPagedResultDto<AppVersionDto>> {
        return null as any
    }


    /**
     * @param url /Platform/AppVersion/Create
     * 
     */

    @POST('create')
    create(
        @Payload
        _req:PlatformAppVersionDto

    ): Observable<PlatformAppVersionDto> {
        return null as any
    }


    /**
     * @param url /Platform/AppVersion/Update
     * 
     */

    @PUT('update')
    update(
        @Payload
        _req:PlatformAppVersionDto

    ): Observable<PlatformAppVersionDto> {
        return null as any
    }


    /**
     * @param url /Platform/AppVersion/Delete
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
