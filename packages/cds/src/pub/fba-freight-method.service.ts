import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBFbaFreightMethodDto,PUBFbaFreightMethodCheckDto,PUBPagedResultDto, } from './pub.types';

@BaseUrl('/pub/FbaFreightMethod')
@Injectable({ providedIn: 'root' })
export class PUBFbaFreightMethodService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/FbaFreightMethod/CreateOrUpdate
     * 保存运输方式
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PUBFbaFreightMethodDto

    ): Observable<PUBFbaFreightMethodDto> {
        return null as any
    }


    /**
     * @param url /PUB/FbaFreightMethod/Check
     * 校验重复性数据
     */

    @POST('check')
    check(
        @Payload
        _req:PUBFbaFreightMethodCheckDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/FbaFreightMethod/Delete
     * 删除运输方式
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/FbaFreightMethod/Get
     * 获取运输方式
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PUBFbaFreightMethodDto> {
        return null as any
    }


    /**
     * @param url /PUB/FbaFreightMethod/GetAll
     * 获取运输方式列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {value?:string,ids?:any[],keyName?:string,searchText?:string,includeDeleted?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PUBPagedResultDto<PUBFbaFreightMethodDto>> {
        return null as any
    }



  }
