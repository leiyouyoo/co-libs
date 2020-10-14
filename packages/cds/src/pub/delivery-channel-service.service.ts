import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBDeliveryChannelDto,PUBListResultDto, } from './pub.types';

@BaseUrl('/pub/DeliveryChannelService')
@Injectable({ providedIn: 'root' })
export class PUBDeliveryChannelServiceService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/DeliveryChannelService/CreateOrUpdate
     * 创建或添加数据
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PUBDeliveryChannelDto

    ): Observable<PUBDeliveryChannelDto> {
        return null as any
    }


    /**
     * @param url /PUB/DeliveryChannelService/Delete
     * 删除数据
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/DeliveryChannelService/Get
     * 获取详细数据
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PUBDeliveryChannelDto> {
        return null as any
    }


    /**
     * @param url /PUB/DeliveryChannelService/Check
     * 验证名称重复
     */

    @POST('check')
    check(
        @Payload
        _req:PUBDeliveryChannelDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/DeliveryChannelService/GetAll
     * 根据条件查询列表数据
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {name?:string,tradeType?:number,isTaxIncluded?:boolean,isValid?:boolean} 

    ): Observable<PUBListResultDto<PUBDeliveryChannelDto>> {
        return null as any
    }



  }
