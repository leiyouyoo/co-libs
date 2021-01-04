import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBGLCodeDto,PUBListResultDto,PUBEntityDto,PUBGLCodeSetGroupInput, } from './pub.types';

@BaseUrl('/pub/GLCode')
@Injectable({ providedIn: 'root' })
export class PUBGLCodeService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/GLCode/Get
     * 获取会计科目明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PUBGLCodeDto> {
        return null as any
    }


    /**
     * @param url /PUB/GLCode/GetAll
     * 获取会计科目列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {solutionId:string,groupId?:string,searchText?:string,parentId?:string,isRecursion?:boolean} 

    ): Observable<PUBListResultDto<PUBGLCodeDto>> {
        return null as any
    }


    /**
     * @param url /PUB/GLCode/CreateOrUpdate
     * 保存会计科目
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PUBGLCodeDto

    ): Observable<PUBGLCodeDto> {
        return null as any
    }


    /**
     * @param url /PUB/GLCode/SetValid
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
     * @param url /PUB/GLCode/Delete
     * 删除会计科目
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/GLCode/SetGroup
     * 转移分组
     */

    @POST('setGroup')
    setGroup(
        @Payload
        _req:PUBGLCodeSetGroupInput

    ): Observable<any> {
        return null as any
    }



  }
