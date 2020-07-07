import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseHeaders, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { CountyDto, } from './pub.types';

//@BaseUrl('/pub/County')
@BaseUrl('http://192.168.1.5:8002/pub/County')
@Injectable({ providedIn: 'root' })
@BaseHeaders({"Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZDg1MzI1MGYxYWY0ZjE4ODBmZTBjOTRkZWNjNTRjIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1OTQwODg2NTQsImV4cCI6MTU5NDA5MjI1NCwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMS41OjgwMDEvIiwiYXVkIjpbImh0dHA6Ly8xOTIuMTY4LjEuNTo4MDAxL3Jlc291cmNlcyIsImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiXSwiY2xpZW50X2lkIjoiY2l0eU9jZWFuIiwic3ViIjoiNTUyIiwiYXV0aF90aW1lIjoxNTk0MDg4NjU0LCJpZHAiOiJsb2NhbCIsImh0dHA6Ly93d3cuYXNwbmV0Ym9pbGVycGxhdGUuY29tL2lkZW50aXR5L2NsYWltcy90ZW5hbnRJZCI6IjEiLCJyb2xlIjoiNCwzIiwicm9sZV9uYW1lcyI6IlN0YWZmLENvbW1lcmNpYWxBdHRhY2giLCJ0ZW5hbmN5X25hbWUiOiJDaXR5IE9jZWFuIiwibmFtZSI6ImNoZXJ5bHlhbmciLCJzdXJfbmFtZSI6IiIsInBsYXRmb3JtIjoiIiwicGFyZW50X3VzZXJpZCI6IiIsImNyZWF0b3JfdXNlcklkIjoiIiwiYXV0aG9yaXphdGlvbl90eXBlIjoiSW50ZXJuYWwiLCJjdXN0b21lcl9pZCI6IjYwYTk0NDc5LTQzNzMtNDkwNy04OTM1LTYyODBhNzliNzNmZCIsInNjb3BlIjpbImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.DA7cS_NU5xpbTRCAW2whyv7VwNyQT6Nay59fYAS1lbRL9U356XfjLmLmI0dywUxUwOehSFkxz-9Z8WX0v6znwgfTZ_PFaUsMq70xVB32eidUMsgZrVACizoz748inpjlXVAQtn0NL9qqxp9mzqMG-EicuHa3bwbVXKUwco6Lwmj_wY9v_Tw4ecApmjILLMG7wqPuBw8l3Qu1mvlS0nEFI7Ts5sTIxcrc3lqn79iS5wRJFKG2kSEbPJkYTIWlnOHj_iDo3Jo7QKgPaNp5OmG8XH4yuAQJwx7FhqAGeZidAH4k_PxYmA5S2ZDOh2VDKYW8WG_ciVZzPcQKhyrtr8C-kQ"})

export class CountyService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }


    /**
     * @param url /PUB/County/Get
     * 获取区县镇
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string}

    ): Observable<CountyDto> {
        return null as any
    }


    /**
     * @param url /PUB/County/GetAll
     * 获取区县镇列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {code?:string,name?:string,parentId?:string,isRecursion?:boolean,id?:string}

    ): Observable<ListResultDto<CountyDto>> {
        return null as any
    }


    /**
     * @param url /PUB/County/GetFlatList
     * 获取区县镇列表（不区分上下级）
     */

    @GET('getFlatList')
    getFlatList(
        @Payload
        _req: {id?:string,code?:string,name?:string,sorting?:string,maxResultCount?:number,skipCount?:number}

    ): Observable<PagedResultDto<CountyDto>> {
        return null as any
    }


    /**
     * @param url /PUB/County/CreateOrUpdate
     * 创建或更新地区-前端提交只需调用这个方法即可
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:CountyDto

    ): Observable<CountyDto> {
        return null as any
    }


    /**
     * @param url /PUB/County/Create
     * 创建地区
     */

    @POST('create')
    create(
        @Payload
        _req:CountyDto

    ): Observable<CountyDto> {
        return null as any
    }


    /**
     * @param url /PUB/County/Update
     * 更新地区
     */

    @PUT('update')
    update(
        @Payload
        _req:CountyDto

    ): Observable<CountyDto> {
        return null as any
    }


    /**
     * @param url /PUB/County/Delete
     * 删除区县镇
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string}

    ): Observable<any> {
        return null as any
    }



  }
