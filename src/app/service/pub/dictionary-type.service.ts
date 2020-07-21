import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';

import { DictionaryTypeDto,PagedResultDto,DictionaryTypeCheckDto, } from './pub.types';

@BaseUrl('/pub/DictionaryType')
@Injectable({ providedIn: 'root' })
export class DictionaryTypeService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/DictionaryType/Get
     * 获取字典类型明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<DictionaryTypeDto> {
        return null as any
    }


    /**
     * @param url /PUB/DictionaryType/GetAll
     * 获取字典类型列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {code?:string,name?:string,isValid?:boolean} 

    ): Observable<PagedResultDto<DictionaryTypeDto>> {
        return null as any
    }


    /**
     * @param url /PUB/DictionaryType/Check
     * 校验重复性数据
     */

    @POST('check')
    check(
        @Payload
        _req:DictionaryTypeCheckDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/DictionaryType/CreateOrUpdate
     * 创建或更新字典类型
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:DictionaryTypeDto

    ): Observable<DictionaryTypeDto> {
        return null as any
    }


    /**
     * @param url /PUB/DictionaryType/Create
     * 创建字典类型
     */

    @POST('create')
    create(
        @Payload
        _req:DictionaryTypeDto

    ): Observable<DictionaryTypeDto> {
        return null as any
    }


    /**
     * @param url /PUB/DictionaryType/Update
     * 更新字典类型
     */

    @PUT('update')
    update(
        @Payload
        _req:DictionaryTypeDto

    ): Observable<DictionaryTypeDto> {
        return null as any
    }


    /**
     * @param url /PUB/DictionaryType/Delete
     * 删除字典类型
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
