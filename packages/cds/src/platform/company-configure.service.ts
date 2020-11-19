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
     * 返回公司配置集合
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
     * 获取公司配置详情
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
     * 根据用户获取公司配置
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
     * 创建
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
     * 创建或更新公司配置
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
     * 更新
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
     * 删除
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
     * 获取公司列表
     */

    @GET('getCompanies')
    getCompanies(
        @Payload
        _req: {isActive?:boolean,isMarkDefault?:boolean,placeId?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/GetCompanyCustomers
     * 
     */

    @GET('getCompanyCustomers')
    getCompanyCustomers(
        @Payload
        _req: {isActive?:boolean,isMarkDefault?:boolean,placeId?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/CompanyConfigure/GetByPlaceOrLocation
     * 根据港口或仓库获取口岸公司配置
     */

    @GET('getByPlaceOrLocation')
    getByPlaceOrLocation(
        @Payload
        _req: {placeId?:string,locationId?:string} 

    ): Observable<PlatformListResultDto<PlatformOrganizationUnitDto>> {
        return null as any
    }



  }
