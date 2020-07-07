import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseHeaders, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { PlaceDto,GetPlaceListByRegionsInput,PlaceOrCountyDto,PlaceCheckDto,ChangePlaceStateInput,GetPlaceMapInput,PlaceView,FromToDto,GetByPortIdsOutput,GetPortByCityInput,GetPortByCityDto,GetAllPlaceForUiPickerInput,PlaceUiPickerDto, } from './pub.types';

//@BaseUrl('/pub/Place')
@BaseUrl('http://192.168.1.5:8002/pub/Place')
@Injectable({ providedIn: 'root' })
@BaseHeaders({"Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZDg1MzI1MGYxYWY0ZjE4ODBmZTBjOTRkZWNjNTRjIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1OTQwODg2NTQsImV4cCI6MTU5NDA5MjI1NCwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMS41OjgwMDEvIiwiYXVkIjpbImh0dHA6Ly8xOTIuMTY4LjEuNTo4MDAxL3Jlc291cmNlcyIsImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiXSwiY2xpZW50X2lkIjoiY2l0eU9jZWFuIiwic3ViIjoiNTUyIiwiYXV0aF90aW1lIjoxNTk0MDg4NjU0LCJpZHAiOiJsb2NhbCIsImh0dHA6Ly93d3cuYXNwbmV0Ym9pbGVycGxhdGUuY29tL2lkZW50aXR5L2NsYWltcy90ZW5hbnRJZCI6IjEiLCJyb2xlIjoiNCwzIiwicm9sZV9uYW1lcyI6IlN0YWZmLENvbW1lcmNpYWxBdHRhY2giLCJ0ZW5hbmN5X25hbWUiOiJDaXR5IE9jZWFuIiwibmFtZSI6ImNoZXJ5bHlhbmciLCJzdXJfbmFtZSI6IiIsInBsYXRmb3JtIjoiIiwicGFyZW50X3VzZXJpZCI6IiIsImNyZWF0b3JfdXNlcklkIjoiIiwiYXV0aG9yaXphdGlvbl90eXBlIjoiSW50ZXJuYWwiLCJjdXN0b21lcl9pZCI6IjYwYTk0NDc5LTQzNzMtNDkwNy04OTM1LTYyODBhNzliNzNmZCIsInNjb3BlIjpbImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.DA7cS_NU5xpbTRCAW2whyv7VwNyQT6Nay59fYAS1lbRL9U356XfjLmLmI0dywUxUwOehSFkxz-9Z8WX0v6znwgfTZ_PFaUsMq70xVB32eidUMsgZrVACizoz748inpjlXVAQtn0NL9qqxp9mzqMG-EicuHa3bwbVXKUwco6Lwmj_wY9v_Tw4ecApmjILLMG7wqPuBw8l3Qu1mvlS0nEFI7Ts5sTIxcrc3lqn79iS5wRJFKG2kSEbPJkYTIWlnOHj_iDo3Jo7QKgPaNp5OmG8XH4yuAQJwx7FhqAGeZidAH4k_PxYmA5S2ZDOh2VDKYW8WG_ciVZzPcQKhyrtr8C-kQ"})

export class PlaceService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }


    /**
     * @param url /PUB/Place/Get
     * 获取地点明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string}

    ): Observable<PlaceDto> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetAll
     * 获取地点列表
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {id?:string,name?:string,regionId?:string,isOcean?:boolean,isAir?:boolean,isRail?:boolean,isOther?:boolean,isCity?:boolean,isValid?:boolean,isMultiple?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number}

    ): Observable<PagedResultDto<PlaceDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetByRegionIds
     * 根据地区id集合查找地点
     */

    @POST('getByRegionIds')
    getByRegionIds(
        @Payload
        _req:GetPlaceListByRegionsInput

    ): Observable<PagedResultDto<PlaceDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetByCountryIds
     * 根据国家id查找国家下的place
     */

    @GET('getByCountryIds')
    getByCountryIds(
        @Payload
        _req: {placeId?:string,name?:string,regionIds?:any[],isOcean?:boolean,isAir?:boolean,isAirOrOcean?:boolean,isOther?:boolean,isCity?:boolean,isValid?:boolean,isPaged?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number}

    ): Observable<PagedResultDto<PlaceDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetPlaceAndCounty
     * 分页获取港口或区县
     */

    @GET('getPlaceAndCounty')
    getPlaceAndCounty(
        @Payload
        _req: {code?:string,name?:string,type?:number,sorting?:string,maxResultCount?:number,skipCount?:number}

    ): Observable<PagedResultDto<PlaceOrCountyDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Place/Check
     * 校验重复性数据
     */

    @POST('check')
    check(
        @Payload
        _req:PlaceCheckDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Place/CreateOrUpdate
     * 创建或更新地点
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlaceDto

    ): Observable<PlaceDto> {
        return null as any
    }


    /**
     * @param url /PUB/Place/Create
     * 创建地点
     */

    @POST('create')
    create(
        @Payload
        _req:PlaceDto

    ): Observable<PlaceDto> {
        return null as any
    }


    /**
     * @param url /PUB/Place/Update
     * 更新地点
     */

    @PUT('update')
    update(
        @Payload
        _req:PlaceDto

    ): Observable<PlaceDto> {
        return null as any
    }


    /**
     * @param url /PUB/Place/Delete
     * 删除地点
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string}

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Place/ChangePlaceState
     * 修改地点状态
     */

    @POST('changePlaceState')
    changePlaceState(
        @Payload
        _req:ChangePlaceStateInput

    ): Observable<PlaceDto> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetByPlacesIds
     * 根据地点id集合查找地点集合
     */

    @POST('getByPlacesIds')
    getByPlacesIds(
        @Payload
        _req: {}

    ): Observable<ListResultDto<PlaceDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Place/Resolve
     * 根据地图解析地址
     */

    @POST('resolve')
    resolve(
        @Payload
        _req:GetPlaceMapInput

    ): Observable<PlaceView> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetFromToList
     * 获取港口或地点列表
     */

    @GET('getFromToList')
    getFromToList(
        @Payload
        _req: {searchText?:string,id?:string,isPort?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number}

    ): Observable<PagedResultDto<FromToDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetByPortIds
     * 根据港口Id获取港口信息(含逆向检索省州片区)
     */

    @POST('getByPortIds')
    getByPortIds(
        @Payload
        _req: {}

    ): Observable<GetByPortIdsOutput> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetByCountyIds
     * 根据城市港口、区县镇Id数组获取详细文本
     */

    @POST('getByCountyIds')
    getByCountyIds(
        @Payload
        _req: {}

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetPortByCity
     * 根据城市信息获取港口
     */

    @POST('getPortByCity')
    getPortByCity(
        @Payload
        _req:GetPortByCityInput

    ): Observable<GetPortByCityDto> {
        return null as any
    }


    /**
     * @param url /PUB/Place/GetAllForUiPacker
     * 提供给UI地点选择器的服务接口
     */

    @POST('getAllForUiPacker')
    getAllForUiPacker(
        @Payload
        _req:GetAllPlaceForUiPickerInput

    ): Observable<PagedResultDto<PlaceUiPickerDto>> {
        return null as any
    }



  }
