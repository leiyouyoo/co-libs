import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBExchangeRateDto,PUBPagedResultDto,PUBEntityDto, } from './pub.types';

@BaseUrl('/pub/ExchangeRate')
@Injectable({ providedIn: 'root' })
export class PUBExchangeRateService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/ExchangeRate/Get
     * 
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
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {type?:number,sourceCurrency?:string,targetCurrency?:string,fromDate?:string,toDate?:string,isValid?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PUBPagedResultDto<PUBExchangeRateDto>> {
        return null as any
    }


    /**
     * @param url /PUB/ExchangeRate/CreateOrUpdate
     * 
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
     * 
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
