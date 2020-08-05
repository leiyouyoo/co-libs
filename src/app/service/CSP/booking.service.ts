import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { CSPGetAllListForCRMInput,CSPGetAllListForCRMOutput,CSPPagedResultDto,CSPUpdateRoutesForCRMInput,CSPSureServiceCompanyInput,CSPCoEntityDto,CSPBookingDto,CSPSearchModel,CSPListResultDto,CSPGetCustomerBindUserForCRMOutput,CSPCRMBookingBindQuoteInput,CSPBookingCheckIsExistsInputDto,CSPUpdateBookingForIcpInput,CSPPurchaseOrderItemForIcpDto,CSPBookingForIcpDto,CSPClearanceInviocesUploadOutput,CSPClearanceInviocesDownloadOutput,CSPBookingRecentlyUsedOutput,CSPBookingStatisticsOutput,CSPChangeBookingStatusInput,CSPCancelBookingInput,CSPGetRelatedBusinessOutput,CSPGetChannelListOutput,CSPGetBookingListInputForFcm,CSPBookingForFcmDto,CSPSetBookingAcceptedInput,CSPSetBookingAcceptedOutput,CSPGetClearanceInvoicesForFcmOutput,CSPCreateOrUpdateForFcmInput,CSPCreateOrUpdateForFcmOutput,CSPCreateOrUpdateClearanceInvoicesForFcmInput,CSPDeleteBookingForFcmInput,CSPGetBookingListForFcmInput,CSPBookingListItemDtoForFcm, } from './csp.types';

@BaseUrl('/csp/Booking')
@Injectable({ providedIn: 'root' })
export class CSPBookingService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /CSP/Booking/GetAllListForCRM
     * 为CRM提供订舱单列表
     */

    @POST('getAllListForCRM')
    getAllListForCRM(
        @Payload
        _req:CSPGetAllListForCRMInput

    ): Observable<CSPPagedResultDto<GetAllListForCRMOutput>> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/UpdateRoutesForCRM
     * 为CRM提供更新路线
     */

    @PUT('updateRoutesForCRM')
    updateRoutesForCRM(
        @Payload
        _req:CSPUpdateRoutesForCRMInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/SureServiceCompany
     * CRM确定出货口岸
     */

    @POST('sureServiceCompany')
    sureServiceCompany(
        @Payload
        _req:CSPSureServiceCompanyInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/SalesConfirmCancelForCRM
     * 业务员确认取消
     */

    @POST('salesConfirmCancelForCRM')
    salesConfirmCancelForCRM(
        @Payload
        _req:CSPCoEntityDto<any>

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/GetForCRM
     * CRM根据Id获取详情（收获方与发货方、创建者可见）
     */

    @GET('getForCRM')
    getForCRM(
        @Payload
        _req: {id?:string} 

    ): Observable<CSPBookingDto> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/GetFilterDataSource
     * CRM条件过滤数据源
     */

    @GET('getFilterDataSource')
    getFilterDataSource(
        @Payload
        _req: {isRequiredBookingNo?:boolean,isRequiredBookingName?:boolean,isRequiredCustomer?:boolean,isRequiredContact?:boolean} 

    ): Observable<CSPListResultDto<SearchModel>> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/GetCustomerBindUserForCRM
     * CRM订舱绑定报价入口获取报价接受客户与用户联动关系(BookingId)
     */

    @GET('getCustomerBindUserForCRM')
    getCustomerBindUserForCRM(
        @Payload
        _req: {id?:string} 

    ): Observable<CSPGetCustomerBindUserForCRMOutput> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/CRMBookingBindQuote
     * CRM订舱绑定报价
     */

    @POST('cRMBookingBindQuote')
    cRMBookingBindQuote(
        @Payload
        _req:CSPCRMBookingBindQuoteInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/UpdateForCRM
     * 编辑Booking(普通编辑+既改状态又含普通编辑)
     */

    @PUT('updateForCRM')
    updateForCRM(
        @Payload
        _req:CSPBookingDto

    ): Observable<CSPBookingDto> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/GetListByIds
     * 根据多个bookingId获取对应详情
     */

    @POST('getListByIds')
    getListByIds(
        @Payload
        _req: {} 

    ): Observable<CSPListResultDto<BookingDto>> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/Get
     * 根据Id获取详情（收获方与发货方、创建者可见）
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<CSPBookingDto> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/GetAllList
     * 获取全部列表显示(只返回显示数据)
     */

    @GET('getAllList')
    getAllList(
        @Payload
        _req: {bookingStatus?:string,searchKey?:string,serviceCompanyId?:string,freightMethodType?:number,tradeType?:number,shipmentType?:number,isEnglish?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<CSPPagedResultDto<BookingDto>> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/Create
     * 创建Booking
     */

    @POST('create')
    create(
        @Payload
        _req:CSPBookingDto

    ): Observable<CSPBookingDto> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/Update
     * 编辑Booking(普通编辑+既改状态又含普通编辑)
     */

    @PUT('update')
    update(
        @Payload
        _req:CSPBookingDto

    ): Observable<CSPBookingDto> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/IsExists
     * 校验 Booking 名称 和关联的PO是否存在其他Booking中
     */

    @POST('isExists')
    isExists(
        @Payload
        _req:CSPBookingCheckIsExistsInputDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/UpdateForIcp
     * 此方法目前仅提供给Icp变更Cargo、客服及订舱员
     */

    @POST('updateForIcp')
    updateForIcp(
        @Payload
        _req:CSPUpdateBookingForIcpInput

    ): Observable<CSPBookingDto> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/GetBookingOrderItemsForIcp
     * 根据 BookingId 返回需要发货的PO信息
     */

    @GET('getBookingOrderItemsForIcp')
    getBookingOrderItemsForIcp(
        @Payload
        _req: {bookingIds?:string} 

    ): Observable<CSPListResultDto<PurchaseOrderItemForIcpDto>> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/GetAllListForIcp
     * 此方法目前仅提供给Icp 获取全部列表显示
     */

    @GET('getAllListForIcp')
    getAllListForIcp(
        @Payload
        _req: {bookingStatus?:string,searchKey?:string,serviceCompanyId?:string,freightMethodType?:number,tradeType?:number,shipmentType?:number,isEnglish?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<CSPPagedResultDto<BookingForIcpDto>> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/ClearanceInviocesUpload
     * 清关发票数据上传解析
     */

    @POST('clearanceInviocesUpload')
    clearanceInviocesUpload(
        @Payload
        _req: {} 

    ): Observable<CSPClearanceInviocesUploadOutput> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/ClearanceInviocesDownload
     * 清关发票下载数据生成
     */

    @POST('clearanceInviocesDownload')
    clearanceInviocesDownload(
        @Payload
        _req:CSPCoEntityDto<any>

    ): Observable<CSPClearanceInviocesDownloadOutput> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/GetRecentlyUsed
     * 最近使用
     */

    @GET('getRecentlyUsed')
    getRecentlyUsed(
        @Payload
        _req: {tradeType?:number,freightMethodType?:number} 

    ): Observable<CSPBookingRecentlyUsedOutput> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/GetBookingsStatistics
     * 获取Booking统计信息
     */

    @GET('getBookingsStatistics')
    getBookingsStatistics(
        @Payload
        _req: {} 

    ): Observable<CSPBookingStatisticsOutput> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/ChangeBookingStatus
     * 修改 Booking 状态
     */

    @POST('changeBookingStatus')
    changeBookingStatus(
        @Payload
        _req:CSPChangeBookingStatusInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/Cancel
     * CSP 客户申请取消 Booking，之后 ICP 或 CRM 调用 ChangeBookingStatus()或SalesConfirmCancelForCRM 设置状态为 BookingCancelled
     */

    @POST('cancel')
    cancel(
        @Payload
        _req:CSPCancelBookingInput

    ): Observable<CSPBookingDto> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/CancelShippingOrder
     * 取消 Shipping Order
     */

    @POST('cancelShippingOrder')
    cancelShippingOrder(
        @Payload
        _req:CSPCancelBookingInput

    ): Observable<CSPBookingDto> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/GetRelatedBusiness
     * Booking业务对话获取相关的业务id（app端）
     */

    @GET('getRelatedBusiness')
    getRelatedBusiness(
        @Payload
        _req: {id?:string} 

    ): Observable<CSPGetRelatedBusinessOutput> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/GetChannelList
     * 获取FBA渠道列表
     */

    @GET('getChannelList')
    getChannelList(
        @Payload
        _req: {freightMethodType?:number} 

    ): Observable<CSPListResultDto<GetChannelListOutput>> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/GetPagedListForFcm
     * 获取Fcm预订舱数据
     */

    @POST('getPagedListForFcm')
    getPagedListForFcm(
        @Payload
        _req:CSPGetBookingListInputForFcm

    ): Observable<CSPPagedResultDto<BookingForFcmDto>> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/SetBookingAccepted
     * 设置 Bookings 为已受理状态
     */

    @POST('setBookingAccepted')
    setBookingAccepted(
        @Payload
        _req:CSPSetBookingAcceptedInput

    ): Observable<CSPSetBookingAcceptedOutput> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/GetClearanceInvoicesForFcm
     * FCM 根据 BookingId 获取 清关列表
     */

    @GET('getClearanceInvoicesForFcm')
    getClearanceInvoicesForFcm(
        @Payload
        _req: {id?:string} 

    ): Observable<CSPGetClearanceInvoicesForFcmOutput> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/CreateOrUpdateForFcm
     * 更新预订舱信息
     */

    @POST('createOrUpdateForFcm')
    createOrUpdateForFcm(
        @Payload
        _req:CSPCreateOrUpdateForFcmInput

    ): Observable<CSPCreateOrUpdateForFcmOutput> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/CreateOrUpdateClearanceInvoicesForFcm
     * 处理清关发票、包装清单
     */

    @POST('createOrUpdateClearanceInvoicesForFcm')
    createOrUpdateClearanceInvoicesForFcm(
        @Payload
        _req:CSPCreateOrUpdateClearanceInvoicesForFcmInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/DeleteBookingForFcm
     * 删除由 FCM 创建的 Booking(s)
     */

    @POST('deleteBookingForFcm')
    deleteBookingForFcm(
        @Payload
        _req:CSPDeleteBookingForFcmInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /CSP/Booking/GetBookingListForFcm
     * 根据 BookingId 集合获取 Booking 明细
     */

    @POST('getBookingListForFcm')
    getBookingListForFcm(
        @Payload
        _req:CSPGetBookingListForFcmInput

    ): Observable<CSPListResultDto<BookingListItemDtoForFcm>> {
        return null as any
    }



  }
