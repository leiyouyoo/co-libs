import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { CRMCustomerDto,CRMCustomerBindCoUserDto,CRMListResultDto,CRMGetByCustomerIdsOutput,CRMGetCustomerAndPartnerOutput,CRMCustomerAndContactDto,CRMCustomerListDto,CRMPagedResultDto,CRMBecomeCooperationInput, } from './crm.types';

@BaseUrl('/crm/CustomerExternal')
@Injectable({ providedIn: 'root' })
export class CRMCustomerExternalService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /CRM/CustomerExternal/Get
     * 客户详情
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<CRMCustomerDto> {
        return null as any
    }


    /**
     * @param url /CRM/CustomerExternal/GetCoUserByCustomer
     * 根据当前登录客户获取客户所属业务员、以及业务员所属的组织机构客户
     */

    @GET('getCoUserByCustomer')
    getCoUserByCustomer(
        @Payload
        _req: {customerId?:string} 

    ): Observable<CRMCustomerBindCoUserDto> {
        return null as any
    }


    /**
     * @param url /CRM/CustomerExternal/GetSaleUsersByCustomer
     * 根据当前登录客户获取客户所属业务员集合
     */

    @GET('getSaleUsersByCustomer')
    getSaleUsersByCustomer(
        @Payload
        _req: {customerId?:string} 

    ): Observable<CRMListResultDto<CRMCustomerBindCoUserDto>> {
        return null as any
    }


    /**
     * @param url /CRM/CustomerExternal/GetByCustomerIds
     * 根据客户id集合返回客户集合
     */

    @POST('getByCustomerIds')
    getByCustomerIds(
        @Payload
        _req: {} 

    ): Observable<CRMListResultDto<CRMGetByCustomerIdsOutput>> {
        return null as any
    }


    /**
     * @param url /CRM/CustomerExternal/GetCustomerAndPartner
     * 获取当前客户所有的合作伙伴（包含客户自己的信息）
     */

    @GET('getCustomerAndPartner')
    getCustomerAndPartner(
        @Payload
        _req: {customerId?:string,isRegistered?:boolean} 

    ): Observable<CRMListResultDto<CRMGetCustomerAndPartnerOutput>> {
        return null as any
    }


    /**
     * @param url /CRM/CustomerExternal/GetCustomerAndContact
     * 搜索获取客户、联系人 (Rate询价列表可用)
     */

    @GET('getCustomerAndContact')
    getCustomerAndContact(
        @Payload
        _req: {searchText?:string} 

    ): Observable<CRMListResultDto<CRMCustomerAndContactDto>> {
        return null as any
    }


    /**
     * @param url /CRM/CustomerExternal/GetAgentCustomers
     * 获取代理商客户
     */

    @GET('getAgentCustomers')
    getAgentCustomers(
        @Payload
        _req: {name?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<CRMPagedResultDto<CRMCustomerListDto>> {
        return null as any
    }


    /**
     * @param url /CRM/CustomerExternal/BecomeCooperation
     * 转成合作客户
     */

    @POST('becomeCooperation')
    becomeCooperation(
        @Payload
        _req:CRMBecomeCooperationInput

    ): Observable<any> {
        return null as any
    }



  }
