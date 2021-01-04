import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBSolutionDto,PUBListResultDto,PUBEntityDto, } from './pub.types';

@BaseUrl('/pub/Solution')
@Injectable({ providedIn: 'root' })
export class PUBSolutionService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/Solution/Get
     * 
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PUBSolutionDto> {
        return null as any
    }


    /**
     * @param url /PUB/Solution/GetAll
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {searchText?:string,type?:number,invoiceDateType?:number,isAccountingShare?:boolean,isValid?:boolean} 

    ): Observable<PUBListResultDto<PUBSolutionDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Solution/CreateOrUpdate
     * 
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PUBSolutionDto

    ): Observable<PUBSolutionDto> {
        return null as any
    }


    /**
     * @param url /PUB/Solution/SetValid
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
     * @param url /PUB/Solution/Delete
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
