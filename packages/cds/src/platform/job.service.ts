import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformPagedResultDto1,PlatformJobDto,PlatformEntityDto1,PlatformCheckedRepeatForJobInput } from './platform.types';

@BaseUrl('/Platform/Job')
@Injectable({ providedIn: 'root' })
export class PlatformJobService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Job/GetAll
     * 暂无备注
     */

    @GET('GetAll')
    getAll(
        @Payload
        _req: {id?:string,jobTypeId?:string,searchText?:string,isValid?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto1<PlatformJobDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Job/Get
     * 暂无备注
     */

    @GET('Get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformJobDto> {
        return null as any
    }


    /**
     * @param url /Platform/Job/Create
     * 暂无备注
     */

    @POST('Create')
    create(
        @Payload
        _req:PlatformJobDto

    ): Observable<PlatformJobDto> {
        return null as any
    }


    /**
     * @param url /Platform/Job/Update
     * 暂无备注
     */

    @PUT('Update')
    update(
        @Payload
        _req:PlatformJobDto

    ): Observable<PlatformJobDto> {
        return null as any
    }


    /**
     * @param url /Platform/Job/CreateOrUpdate
     * 暂无备注
     */

    @POST('CreateOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformJobDto

    ): Observable<PlatformJobDto> {
        return null as any
    }


    /**
     * @param url /Platform/Job/Delete
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
     * @param url /Platform/Job/CheckIsBindPosition
     * 暂无备注
     */

    @POST('CheckIsBindPosition')
    checkIsBindPosition(
        @Payload
        _req:PlatformEntityDto1<any>

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Job/Recover
     * 暂无备注
     */

    @POST('Recover')
    recover(
        @Payload
        _req:PlatformEntityDto1<any>

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Job/Cancel
     * 暂无备注
     */

    @POST('Cancel')
    cancel(
        @Payload
        _req:PlatformEntityDto1<any>

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Job/CheckedRepeat
     * 暂无备注
     */

    @POST('CheckedRepeat')
    checkedRepeat(
        @Payload
        _req:PlatformCheckedRepeatForJobInput

    ): Observable<any> {
        return null as any
    }



  }
