import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBSolutionCurrencyDto,PUBListResultDto, } from './pub.types';

@BaseUrl('/pub/SolutionCurrency')
@Injectable({ providedIn: 'root' })
export class PUBSolutionCurrencyService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/SolutionCurrency/Get
     * 
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PUBSolutionCurrencyDto> {
        return null as any
    }


    /**
     * @param url /PUB/SolutionCurrency/GetAll
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {solutionId:string,searchText?:string} 

    ): Observable<PUBListResultDto<PUBSolutionCurrencyDto>> {
        return null as any
    }


    /**
     * @param url /PUB/SolutionCurrency/CreateOrUpdate
     * 
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PUBSolutionCurrencyDto

    ): Observable<PUBSolutionCurrencyDto> {
        return null as any
    }


    /**
     * @param url /PUB/SolutionCurrency/Delete
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
