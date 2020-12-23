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
     * 获取解决方案明细
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
     * 获取解决方案列表
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
     * 保存解决方案
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
     * @param url /PUB/Solution/Delete
     * 删除解决方案
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
