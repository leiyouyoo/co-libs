import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseHeaders, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { AreaDto,AreaCheckDto,GetAllAreaForUiPickerInput,AreaUiPickerDto, } from './pub.types';

// @BaseUrl('/pub/Area')
@BaseUrl('http://192.168.1.5:8002/pub/Area')
@Injectable({ providedIn: 'root' })
@BaseHeaders({"Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZDg1MzI1MGYxYWY0ZjE4ODBmZTBjOTRkZWNjNTRjIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1OTQwOTkzMzcsImV4cCI6MTU5NDEwMjkzNywiaXNzIjoiaHR0cDovLzE5Mi4xNjguMS41OjgwMDEvIiwiYXVkIjpbImh0dHA6Ly8xOTIuMTY4LjEuNTo4MDAxL3Jlc291cmNlcyIsImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiXSwiY2xpZW50X2lkIjoiY2l0eU9jZWFuIiwic3ViIjoiNTUyIiwiYXV0aF90aW1lIjoxNTk0MDg4NjU0LCJpZHAiOiJsb2NhbCIsImh0dHA6Ly93d3cuYXNwbmV0Ym9pbGVycGxhdGUuY29tL2lkZW50aXR5L2NsYWltcy90ZW5hbnRJZCI6IjEiLCJyb2xlIjoiNCwzIiwicm9sZV9uYW1lcyI6IlN0YWZmLENvbW1lcmNpYWxBdHRhY2giLCJ0ZW5hbmN5X25hbWUiOiJDaXR5IE9jZWFuIiwibmFtZSI6ImNoZXJ5bHlhbmciLCJzdXJfbmFtZSI6IiIsInBsYXRmb3JtIjoiIiwicGFyZW50X3VzZXJpZCI6IiIsImNyZWF0b3JfdXNlcklkIjoiIiwiYXV0aG9yaXphdGlvbl90eXBlIjoiSW50ZXJuYWwiLCJjdXN0b21lcl9pZCI6IjYwYTk0NDc5LTQzNzMtNDkwNy04OTM1LTYyODBhNzliNzNmZCIsInNjb3BlIjpbImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.NvRuFRRsmMGnhg9_ea_dJinUXeBRahjaQu2NSIKknoTvYYw8T_CLChTI8LtfVRsx9X1C-DMxw7oiWjAkTM4gyF3Eb6Q612nM6MoPb9rySjIj5OL_GuNIVYQfBLmnxyyMCIUqzau9EamsfxM-XvoWtEEqD6dx9SX3y9N_46nJ8mRSyBS7ljUzdM1VPLCsIKKMzpaBSVl2beoL2Oiw4EOMJtdkhKQkZ7ZTiRSAaj2ExIT7EzBjiSFjv6IFp7xTs-rLGDplI2_e6oAZE320NcMovQZGhRAg4PYf7RwN10Q2rWov1dzGsP2XhpvjqCK-rnEaZl0v9gPPGoW5JZ20yAAPZQ"})
export class AreaService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }


    /**
     * @param url /PUB/Area/Get
     * 获取片区
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string}

    ): Observable<AreaDto> {
        return null as any
    }


    /**
     * @param url /PUB/Area/GetAll
     * 获取片区列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {name?:string,isValid?:boolean}

    ): Observable<ListResultDto<AreaDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Area/CreateOrUpdate
     * 创建或编辑片区
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:AreaDto

    ): Observable<AreaDto> {
        return null as any
    }


    /**
     * @param url /PUB/Area/Check
     * 校验重复性数据
     */

    @POST('check')
    check(
        @Payload
        _req:AreaCheckDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Area/Delete
     * 删除片区
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string}

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Area/GetAllForUiPicker
     * 用于前端片区选择器
     */

    @POST('getAllForUiPicker')
    getAllForUiPicker(
        @Payload
        _req:GetAllAreaForUiPickerInput

    ): Observable<PagedResultDto<AreaUiPickerDto>> {
        return null as any
    }



  }
