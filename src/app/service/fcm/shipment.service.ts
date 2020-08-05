import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { FCMShipmentDto,FCMGetPreShipmentListInput,FCMPreShipmentListItemDto,FCMPagedResultDto,FCMShipmentListItemDto,FCMCreateOrUpdateShipmentInput,FCMWarehousingDto,FCMChangeShipmentInvalidStatusInput,FCMSetPostAgentCustomerInput,FCMGetShipmentListInput,FCMGetDeliveryInfoListInput,FCMDeliveryInfoListItemDto,FCMApplyBookingsInput,FCMDeliveryInfoEditDto,FCMDeliveryInfoDetailDto, } from './fcm.types';

@BaseUrl('/fcm/Shipment')
@Injectable({ providedIn: 'root' })
export class FCMShipmentService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /FCM/Shipment/Get
     * 获取已受理单明细
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<FCMShipmentDto> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/GetAllPreShipment
     * 分页获取预报单列表
     */

    @POST('getAllPreShipment')
    getAllPreShipment(
        @Payload
        _req:FCMGetPreShipmentListInput

    ): Observable<FCMPagedResultDto<FCMPreShipmentListItemDto>> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/GetForUpdate
     * 获取用于更新
     */

    @GET('getForUpdate')
    getForUpdate(
        @Payload
        _req: {id?:string} 

    ): Observable<FCMCreateOrUpdateShipmentInput> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/CreateOrUpdate
     * 创建或编辑订单
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:FCMCreateOrUpdateShipmentInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/Warehousing
     * 入仓
     */

    @POST('warehousing')
    warehousing(
        @Payload
        _req:FCMWarehousingDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/ChangeInvalidStatus
     * 作废或取消作废指定的 Shipment(s)
     */

    @POST('changeInvalidStatus')
    changeInvalidStatus(
        @Payload
        _req:FCMChangeShipmentInvalidStatusInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/SetPostAgentCustomer
     * 设置 Shipment(s) 的后段代理，已分配数据不能重复分配
     */

    @POST('setPostAgentCustomer')
    setPostAgentCustomer(
        @Payload
        _req:FCMSetPostAgentCustomerInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/Delete
     * 删除预报单
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/GetShipmentList
     * 获取已受理列表数据
     */

    @POST('getShipmentList')
    getShipmentList(
        @Payload
        _req:FCMGetShipmentListInput

    ): Observable<FCMPagedResultDto<FCMShipmentListItemDto>> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/GetDeliveryInfoList
     * 获取配送列表数据
     */

    @POST('getDeliveryInfoList')
    getDeliveryInfoList(
        @Payload
        _req:FCMGetDeliveryInfoListInput

    ): Observable<FCMPagedResultDto<FCMDeliveryInfoListItemDto>> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/ApplyBooking
     * 申请订舱
     */

    @POST('applyBooking')
    applyBooking(
        @Payload
        _req:FCMApplyBookingsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/UpdateDeliveryInfo
     * 编辑配送信息
     */

    @PUT('updateDeliveryInfo')
    updateDeliveryInfo(
        @Payload
        _req:FCMDeliveryInfoEditDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/GetDeliveryInfo
     * 获取配送明细信息
     */

    @GET('getDeliveryInfo')
    getDeliveryInfo(
        @Payload
        _req: {id?:string} 

    ): Observable<FCMDeliveryInfoDetailDto> {
        return null as any
    }


    /**
     * @param url /FCM/Shipment/CheckAgentCustomer
     * 校验承运人
     */

    @POST('checkAgentCustomer')
    checkAgentCustomer(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }



  }
