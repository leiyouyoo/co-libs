import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { CommodityDto,CommodityCheckInputDto,GetAllCommodityForUiPickerInput,CommodityUiPickerDto, } from './pub.types';

@BaseUrl('/pub/Commodity')
@Injectable({ providedIn: 'root' })
export class CommodityService extends BaseApi {

   
    /**
     * @param url /PUB/Commodity/GetAll
     * 分页获取品名顶级父类集合
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {isValid?:boolean,text?:string,isRecursion?:boolean,maxResultCount?:number,skipCount?:number} 

    ): Observable<ListResultDto<CommodityDto>> {
        return null as any
    }

 
    /**
     * @param url /PUB/Commodity/Get
     * 获取品名明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<CommodityDto> {
        return null as any
    }

 
    /**
     * @param url /PUB/Commodity/Check
     * 品名重复校验
     */

    @POST('check')
    check(
        @Payload
        _req:CommodityCheckInputDto

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /PUB/Commodity/Create
     * 创建品名
     */

    @POST('create')
    create(
        @Payload
        _req:CommodityDto

    ): Observable<CommodityDto> {
        return null as any
    }

 
    /**
     * @param url /PUB/Commodity/Update
     * 更新品名
     */

    @PUT('update')
    update(
        @Payload
        _req:CommodityDto

    ): Observable<CommodityDto> {
        return null as any
    }

 
    /**
     * @param url /PUB/Commodity/Delete
     * 删除品名
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /PUB/Commodity/GetAllForUiPicker
     * 提供给UI品名选择器服务接口
     */

    @POST('getAllForUiPicker')
    getAllForUiPicker(
        @Payload
        _req:GetAllCommodityForUiPickerInput

    ): Observable<PagedResultDto<CommodityUiPickerDto>> {
        return null as any
    }



  }
