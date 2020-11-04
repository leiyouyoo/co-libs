import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformJobDto,PlatformPagedResultDto,PlatformEntityDto,PlatformCheckedRepeatForJobInput, } from './platform.types';

@BaseUrl('/platform/Job')
@Injectable({ providedIn: 'root' })
export class PlatformJobService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Job/GetAll
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {id?:string,jobTypeId?:string,searchText?:string,isValid?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto<PlatformJobDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Job/Get
     * 
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformJobDto> {
        return null as any
    }


    /**
     * @param url /Platform/Job/Create
     * 
     */

    @POST('create')
    create(
        @Payload
        _req:PlatformJobDto

    ): Observable<PlatformJobDto> {
        return null as any
    }


    /**
     * @param url /Platform/Job/Update
     * 
     */

    @PUT('update')
    update(
        @Payload
        _req:PlatformJobDto

    ): Observable<PlatformJobDto> {
        return null as any
    }


    /**
     * @param url /Platform/Job/CreateOrUpdate
     * 
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformJobDto

    ): Observable<PlatformJobDto> {
        return null as any
    }


    /**
     * @param url /Platform/Job/Delete
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
     * @param url /Platform/Job/CheckIsBindPosition
     * 
     */

    @POST('checkIsBindPosition')
    checkIsBindPosition(
        @Payload
        _req:PlatformEntityDto<any>

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Job/Recover
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
     * @param url /Platform/Job/Cancel
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
     * @param url /Platform/Job/CheckedRepeat
     * 
     */

    @POST('checkedRepeat')
    checkedRepeat(
        @Payload
        _req:PlatformCheckedRepeatForJobInput

    ): Observable<any> {
        return null as any
    }



  }
