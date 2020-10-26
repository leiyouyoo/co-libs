import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformCompanyConfigureDto,PlatformPagedResultDto,PlatformOrganizationUnitDto,PlatformListResultDto, } from './platform.types';

@BaseUrl('/platform/CompanyConfigure')
@Injectable({ providedIn: 'root' })
export class PlatformCompanyConfigureService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/CompanyConfigure/GetAll
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {isActive?:boolean} 

    ): Observable<PlatformPagedResultDto<PlatformCompanyConfigureDto>> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/Get
     * 
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformCompanyConfigureDto> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/GetByCompanyId
     * 
     */

    @GET('getByCompanyId')
    getByCompanyId(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformCompanyConfigureDto> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/GetByUserId
     * 
     */

    @GET('getByUserId')
    getByUserId(
        @Payload
        _req: {userId?:number} 

    ): Observable<PlatformCompanyConfigureDto> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/Create
     * 
     */

    @POST('create')
    create(
        @Payload
        _req:PlatformCompanyConfigureDto

    ): Observable<PlatformCompanyConfigureDto> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/CreateOrUpdate
     * 
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformCompanyConfigureDto

    ): Observable<PlatformCompanyConfigureDto> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/Update
     * 
     */

    @PUT('update')
    update(
        @Payload
        _req:PlatformCompanyConfigureDto

    ): Observable<PlatformCompanyConfigureDto> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/Delete
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
     * @param url /Platform/CompanyConfigure/GetCompanies
     * 
     */

    @GET('getCompanies')
    getCompanies(
        @Payload
        _req: {isActive?:boolean,isMarkDefault?:boolean} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/GetByPlaceOrLocation
     * 
     */

    @GET('getByPlaceOrLocation')
    getByPlaceOrLocation(
        @Payload
        _req: {placeId?:string,locationId?:string} 

    ): Observable<PlatformListResultDto<PlatformOrganizationUnitDto>> {
        return null as any
    }



  }
