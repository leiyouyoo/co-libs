import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBGLGroupDto,PUBListResultDto, } from './pub.types';

@BaseUrl('/pub/GLGroup')
@Injectable({ providedIn: 'root' })
export class PUBGLGroupService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/GLGroup/Get
     * 获取会计科目分组明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PUBGLGroupDto> {
        return null as any
    }


    /**
     * @param url /PUB/GLGroup/GetAll
     * 获取会计科目分组列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {code?:string,name?:string,parentId?:string,isRecursion?:boolean,id?:string} 

    ): Observable<PUBListResultDto<PUBGLGroupDto>> {
        return null as any
    }


    /**
     * @param url /PUB/GLGroup/CreateOrUpdate
     * 保存会计科目分组
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PUBGLGroupDto

    ): Observable<PUBGLGroupDto> {
        return null as any
    }


    /**
     * @param url /PUB/GLGroup/Delete
     * 删除会计科目分组
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }



  }
