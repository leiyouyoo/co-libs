import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseHeaders, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { RegionDto,GetByAreaInput,RegionCheckDto,GetAllCountryForUiPickerInput,CountryUiPickerDto,GetAllRegionForUiPickerInput,RegionUiPickerDto, } from './pub.types';

//@BaseUrl('/pub/Region')
@BaseUrl('http://192.168.1.5:8002/pub/Region')
@Injectable({ providedIn: 'root' })
@BaseHeaders({"Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZDg1MzI1MGYxYWY0ZjE4ODBmZTBjOTRkZWNjNTRjIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1OTQwODg2NTQsImV4cCI6MTU5NDA5MjI1NCwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMS41OjgwMDEvIiwiYXVkIjpbImh0dHA6Ly8xOTIuMTY4LjEuNTo4MDAxL3Jlc291cmNlcyIsImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiXSwiY2xpZW50X2lkIjoiY2l0eU9jZWFuIiwic3ViIjoiNTUyIiwiYXV0aF90aW1lIjoxNTk0MDg4NjU0LCJpZHAiOiJsb2NhbCIsImh0dHA6Ly93d3cuYXNwbmV0Ym9pbGVycGxhdGUuY29tL2lkZW50aXR5L2NsYWltcy90ZW5hbnRJZCI6IjEiLCJyb2xlIjoiNCwzIiwicm9sZV9uYW1lcyI6IlN0YWZmLENvbW1lcmNpYWxBdHRhY2giLCJ0ZW5hbmN5X25hbWUiOiJDaXR5IE9jZWFuIiwibmFtZSI6ImNoZXJ5bHlhbmciLCJzdXJfbmFtZSI6IiIsInBsYXRmb3JtIjoiIiwicGFyZW50X3VzZXJpZCI6IiIsImNyZWF0b3JfdXNlcklkIjoiIiwiYXV0aG9yaXphdGlvbl90eXBlIjoiSW50ZXJuYWwiLCJjdXN0b21lcl9pZCI6IjYwYTk0NDc5LTQzNzMtNDkwNy04OTM1LTYyODBhNzliNzNmZCIsInNjb3BlIjpbImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.DA7cS_NU5xpbTRCAW2whyv7VwNyQT6Nay59fYAS1lbRL9U356XfjLmLmI0dywUxUwOehSFkxz-9Z8WX0v6znwgfTZ_PFaUsMq70xVB32eidUMsgZrVACizoz748inpjlXVAQtn0NL9qqxp9mzqMG-EicuHa3bwbVXKUwco6Lwmj_wY9v_Tw4ecApmjILLMG7wqPuBw8l3Qu1mvlS0nEFI7Ts5sTIxcrc3lqn79iS5wRJFKG2kSEbPJkYTIWlnOHj_iDo3Jo7QKgPaNp5OmG8XH4yuAQJwx7FhqAGeZidAH4k_PxYmA5S2ZDOh2VDKYW8WG_ciVZzPcQKhyrtr8C-kQ"})

export class RegionService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }


    /**
     * @param url /PUB/Region/Get
     * 获取地区明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string}

    ): Observable<RegionDto> {
        return null as any
    }


    /**
     * @param url /PUB/Region/GetAll
     * 获取地区列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {code?:string,name?:string,parentId?:string,isValid?:boolean,isRecursion?:boolean,id?:string}

    ): Observable<ListResultDto<RegionDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Region/GetByAreaIds
     * 根据片区获取省份地区
     */

    @POST('getByAreaIds')
    getByAreaIds(
        @Payload
        _req:GetByAreaInput

    ): Observable<ListResultDto<RegionDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Region/Check
     * 校验重复性数据
     */

    @POST('check')
    check(
        @Payload
        _req:RegionCheckDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Region/CreateOrUpdate
     * 创建或更新地区-前端提交只需调用这个方法即可
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:RegionDto

    ): Observable<RegionDto> {
        return null as any
    }


    /**
     * @param url /PUB/Region/Create
     * 创建地区
     */

    @POST('create')
    create(
        @Payload
        _req:RegionDto

    ): Observable<RegionDto> {
        return null as any
    }


    /**
     * @param url /PUB/Region/Update
     * 更新地区
     */

    @PUT('update')
    update(
        @Payload
        _req:RegionDto

    ): Observable<RegionDto> {
        return null as any
    }


    /**
     * @param url /PUB/Region/Delete
     * 删除地区
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string}

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Region/BulkCreateAsync
     *
     */

    @POST('bulkCreateAsync')
    bulkCreateAsync(
        @Payload
        _req:RegionDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Region/GetAllCountryForUiPicker
     * 提供给UI国家选择器的服务接口
     */

    @POST('getAllCountryForUiPicker')
    getAllCountryForUiPicker(
        @Payload
        _req:GetAllCountryForUiPickerInput

    ): Observable<PagedResultDto<CountryUiPickerDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Region/GetAllRegionForUiPicker
     * 提供给UI地区（省份）选择器的服务接口
     */

    @POST('getAllRegionForUiPicker')
    getAllRegionForUiPicker(
        @Payload
        _req:GetAllRegionForUiPickerInput

    ): Observable<PagedResultDto<RegionUiPickerDto>> {
        return null as any
    }



  }
