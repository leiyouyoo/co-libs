import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseHeaders, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { ChargingCodeDto,ChangeChargingCodeStateInput,GetAllChargingCodeForUiPickerInput,ChargingCodeUiPickerDto, } from './pub.types';

//@BaseUrl('/pub/ChargingCode')
@BaseUrl('http://192.168.1.5:8002/pub/ChargingCode')
@Injectable({ providedIn: 'root' })
@BaseHeaders({"Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZDg1MzI1MGYxYWY0ZjE4ODBmZTBjOTRkZWNjNTRjIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1OTQwOTkzMzcsImV4cCI6MTU5NDEwMjkzNywiaXNzIjoiaHR0cDovLzE5Mi4xNjguMS41OjgwMDEvIiwiYXVkIjpbImh0dHA6Ly8xOTIuMTY4LjEuNTo4MDAxL3Jlc291cmNlcyIsImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiXSwiY2xpZW50X2lkIjoiY2l0eU9jZWFuIiwic3ViIjoiNTUyIiwiYXV0aF90aW1lIjoxNTk0MDg4NjU0LCJpZHAiOiJsb2NhbCIsImh0dHA6Ly93d3cuYXNwbmV0Ym9pbGVycGxhdGUuY29tL2lkZW50aXR5L2NsYWltcy90ZW5hbnRJZCI6IjEiLCJyb2xlIjoiNCwzIiwicm9sZV9uYW1lcyI6IlN0YWZmLENvbW1lcmNpYWxBdHRhY2giLCJ0ZW5hbmN5X25hbWUiOiJDaXR5IE9jZWFuIiwibmFtZSI6ImNoZXJ5bHlhbmciLCJzdXJfbmFtZSI6IiIsInBsYXRmb3JtIjoiIiwicGFyZW50X3VzZXJpZCI6IiIsImNyZWF0b3JfdXNlcklkIjoiIiwiYXV0aG9yaXphdGlvbl90eXBlIjoiSW50ZXJuYWwiLCJjdXN0b21lcl9pZCI6IjYwYTk0NDc5LTQzNzMtNDkwNy04OTM1LTYyODBhNzliNzNmZCIsInNjb3BlIjpbImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.NvRuFRRsmMGnhg9_ea_dJinUXeBRahjaQu2NSIKknoTvYYw8T_CLChTI8LtfVRsx9X1C-DMxw7oiWjAkTM4gyF3Eb6Q612nM6MoPb9rySjIj5OL_GuNIVYQfBLmnxyyMCIUqzau9EamsfxM-XvoWtEEqD6dx9SX3y9N_46nJ8mRSyBS7ljUzdM1VPLCsIKKMzpaBSVl2beoL2Oiw4EOMJtdkhKQkZ7ZTiRSAaj2ExIT7EzBjiSFjv6IFp7xTs-rLGDplI2_e6oAZE320NcMovQZGhRAg4PYf7RwN10Q2rWov1dzGsP2XhpvjqCK-rnEaZl0v9gPPGoW5JZ20yAAPZQ"})

export class ChargingCodeService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }


    /**
     * @param url /PUB/ChargingCode/Get
     * 获取费用代码
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string}

    ): Observable<ChargingCodeDto> {
        return null as any
    }


    /**
     * @param url /PUB/ChargingCode/GetAll
     * 获取费用代码列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {groupId?:string,text?:string,isValid?:boolean}

    ): Observable<PagedResultDto<ChargingCodeDto>> {
        return null as any
    }


    /**
     * @param url /PUB/ChargingCode/ChangeChargingCodeState
     * 修改费用代码状态
     */

    @POST('changeChargingCodeState')
    changeChargingCodeState(
        @Payload
        _req:ChangeChargingCodeStateInput

    ): Observable<ChargingCodeDto> {
        return null as any
    }


    /**
     * @param url /PUB/ChargingCode/CreateOrUpdate
     * 创建或更新费用代码
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:ChargingCodeDto

    ): Observable<ChargingCodeDto> {
        return null as any
    }


    /**
     * @param url /PUB/ChargingCode/GetAllForUiPicker
     * 提供给UI费用代码选择器的服务接口
     */

    @POST('getAllForUiPicker')
    getAllForUiPicker(
        @Payload
        _req:GetAllChargingCodeForUiPickerInput

    ): Observable<PagedResultDto<ChargingCodeUiPickerDto>> {
        return null as any
    }


    /**
     * @param url /PUB/ChargingCode/Check
     * 数据检查
     */

    @POST('check')
    check(
        @Payload
        _req:ChargingCodeDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/ChargingCode/Create
     *
     */

    @POST('create')
    create(
        @Payload
        _req:ChargingCodeDto

    ): Observable<ChargingCodeDto> {
        return null as any
    }


    /**
     * @param url /PUB/ChargingCode/Update
     *
     */

    @PUT('update')
    update(
        @Payload
        _req:ChargingCodeDto

    ): Observable<ChargingCodeDto> {
        return null as any
    }


    /**
     * @param url /PUB/ChargingCode/Delete
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
