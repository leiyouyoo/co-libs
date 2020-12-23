import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBExchangeRateDto,PUBListResultDto,PUBEntityDto, } from './pub.types';

@BaseUrl('/pub/ExchangeRate')
@Injectable({ providedIn: 'root' })
export class PUBExchangeRateService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/ExchangeRate/Get
     * 获取汇率明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PUBExchangeRateDto> {
        return null as any
    }


    /**
     * @param url /PUB/ExchangeRate/GetAll
     * 获取汇率列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {type?:number,sourceCurrency?:string,targetCurrency?:string,fromDate?:string,toDate?:string,isValid?:boolean} 

    ): Observable<PUBListResultDto<PUBExchangeRateDto>> {
        return null as any
    }


    /**
     * @param url /PUB/ExchangeRate/CreateOrUpdate
     * 保存汇率
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PUBExchangeRateDto

    ): Observable<PUBExchangeRateDto> {
        return null as any
    }


    /**
     * @param url /PUB/ExchangeRate/SetValid
     * 设置是否有效
     */

    @POST('setValid')
    setValid(
        @Payload
        _req:PUBEntityDto<any>

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/ExchangeRate/Delete
     * 删除汇率
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
