import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformPagedResultDto1,PlatformCompanyConfigureDto,PlatformListResultDto1 } from './platform.types';

@BaseUrl('/Platform/CompanyConfigure')
@Injectable({ providedIn: 'root' })
export class PlatformCompanyConfigureService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/CompanyConfigure/GetAll
     * 暂无备注
     */

    @GET('GetAll')
    getAll(
        @Payload
        _req: {isActive?:boolean} 

    ): Observable<PlatformPagedResultDto1<PlatformCompanyConfigureDto>> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/Get
     * 暂无备注
     */

    @GET('Get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformCompanyConfigureDto> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/GetByCompanyId
     * 暂无备注
     */

    @GET('GetByCompanyId')
    getByCompanyId(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformCompanyConfigureDto> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/GetByUserId
     * 暂无备注
     */

    @GET('GetByUserId')
    getByUserId(
        @Payload
        _req: {userId?:number} 

    ): Observable<PlatformCompanyConfigureDto> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/Create
     * 暂无备注
     */

    @POST('Create')
    create(
        @Payload
        _req:PlatformCompanyConfigureDto

    ): Observable<PlatformCompanyConfigureDto> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/CreateOrUpdate
     * 暂无备注
     */

    @POST('CreateOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformCompanyConfigureDto

    ): Observable<PlatformCompanyConfigureDto> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/Update
     * 暂无备注
     */

    @PUT('Update')
    update(
        @Payload
        _req:PlatformCompanyConfigureDto

    ): Observable<PlatformCompanyConfigureDto> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/Delete
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
     * @param url /Platform/CompanyConfigure/GetCompanies
     * 暂无备注
     */

    @GET('GetCompanies')
    getCompanies(
        @Payload
        _req: {isActive?:boolean,isMarkDefault?:boolean,placeId?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/GetCompanyCustomers
     * 暂无备注
     */

    @GET('GetCompanyCustomers')
    getCompanyCustomers(
        @Payload
        _req: {isActive?:boolean,isMarkDefault?:boolean,placeId?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/GetByPlaceOrLocation
     * 暂无备注
     */

    @GET('GetByPlaceOrLocation')
    getByPlaceOrLocation(
        @Payload
        _req: {placeId?:string,locationId?:string,isMarkDefault?:boolean} 

    ): Observable<PlatformListResultDto1<PlatformCompanyConfigureDto>> {
        return null as any
    }



  }
