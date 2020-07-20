import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import {
  GetAllListForCRMInput,
  GetAllListForCRMOutput,
  UpdateRoutesForCRMInput,
  SureServiceCompanyInput,
  CoEntityDto,
  BookingDto,
  SearchModel,
  GetCustomerBindUserForCRMOutput,
  CRMBookingBindQuoteInput,
  BookingCheckIsExistsInputDto,
  UpdateBookingForIcpInput,
  PurchaseOrderItemForIcpDto,
  BookingForIcpDto,
  ClearanceInviocesUploadOutput,
  ClearanceInviocesDownloadOutput,
  BookingRecentlyUsedOutput,
  BookingStatisticsOutput,
  ChangeBookingStatusInput,
  CancelBookingInput,
  GetRelatedBusinessOutput,
  GetChannelListOutput,
  GetBookingListInputForFcm,
  BookingForFcmDto,
  SetBookingAcceptedInput,
  SetBookingAcceptedOutput,
  GetClearanceInvoicesForFcmOutput,
  CreateOrUpdateForFcmInput,
  CreateOrUpdateForFcmOutput,
  CreateOrUpdateClearanceInvoicesForFcmInput,
  DeleteBookingForFcmInput,
  GetBookingListForFcmInput,
  BookingListItemDtoForFcm,
} from './csp.types';

@BaseUrl('/CSP/Booking')
@Injectable({ providedIn: 'root' })
export class BookingService extends BaseApi {
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
    _req: GetAllListForCRMInput,
  ): Observable<PagedResultDto<GetAllListForCRMOutput>> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/UpdateRoutesForCRM
   * 为CRM提供更新路线
   */

  @PUT('updateRoutesForCRM')
  updateRoutesForCRM(
    @Payload
    _req: UpdateRoutesForCRMInput,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/SureServiceCompany
   * CRM确定出货口岸
   */

  @POST('sureServiceCompany')
  sureServiceCompany(
    @Payload
    _req: SureServiceCompanyInput,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/SalesConfirmCancelForCRM
   * 业务员确认取消
   */

  @POST('salesConfirmCancelForCRM')
  salesConfirmCancelForCRM(
    @Payload
    _req: CoEntityDto[],
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/GetForCRM
   * CRM根据Id获取详情（收获方与发货方、创建者可见）
   */

  @GET('getForCRM')
  getForCRM(
    @Payload
    _req: {
      id?: string;
    },
  ): Observable<BookingDto> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/GetFilterDataSource
   * CRM条件过滤数据源
   */

  @GET('getFilterDataSource')
  getFilterDataSource(
    @Payload
    _req: {
      isRequiredBookingNo?: boolean;
      isRequiredBookingName?: boolean;
      isRequiredCustomer?: boolean;
      isRequiredContact?: boolean;
    },
  ): Observable<ListResultDto<SearchModel>> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/GetCustomerBindUserForCRM
   * CRM订舱绑定报价入口获取报价接受客户与用户联动关系(BookingId)
   */

  @GET('getCustomerBindUserForCRM')
  getCustomerBindUserForCRM(
    @Payload
    _req: {
      id?: string;
    },
  ): Observable<GetCustomerBindUserForCRMOutput> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/CRMBookingBindQuote
   * CRM订舱绑定报价
   */

  @POST('cRMBookingBindQuote')
  cRMBookingBindQuote(
    @Payload
    _req: CRMBookingBindQuoteInput,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/UpdateForCRM
   * 编辑Booking(普通编辑+既改状态又含普通编辑)
   */

  @PUT('updateForCRM')
  updateForCRM(
    @Payload
    _req: BookingDto,
  ): Observable<BookingDto> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/GetListByIds
   * 根据多个bookingId获取对应详情
   */

  @POST('getListByIds')
  getListByIds(
    @Payload
    _req: {},
  ): Observable<ListResultDto<BookingDto>> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/Get
   * 根据Id获取详情（收获方与发货方、创建者可见）
   */

  @GET('get')
  get(
    @Payload
    _req: {
      id?: string;
    },
  ): Observable<BookingDto> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/GetAllList
   * 获取全部列表显示(只返回显示数据)
   */

  @GET('getAllList')
  getAllList(
    @Payload
    _req: {
      bookingStatus?: string;
      searchKey?: string;
      serviceCompanyId?: string;
      freightMethodType?: number;
      tradeType?: number;
      shipmentType?: number;
      isEnglish?: boolean;
      sorting?: string;
      maxResultCount?: number;
      skipCount?: number;
    },
  ): Observable<PagedResultDto<BookingDto>> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/Create
   * 创建Booking
   */

  @POST('create')
  create(
    @Payload
    _req: BookingDto,
  ): Observable<BookingDto> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/Update
   * 编辑Booking(普通编辑+既改状态又含普通编辑)
   */

  @PUT('update')
  update(
    @Payload
    _req: BookingDto,
  ): Observable<BookingDto> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/IsExists
   * 校验 Booking 名称 和关联的PO是否存在其他Booking中
   */

  @POST('isExists')
  isExists(
    @Payload
    _req: BookingCheckIsExistsInputDto,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/UpdateForIcp
   * 此方法目前仅提供给Icp变更Cargo、客服及订舱员
   */

  @POST('updateForIcp')
  updateForIcp(
    @Payload
    _req: UpdateBookingForIcpInput,
  ): Observable<BookingDto> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/GetBookingOrderItemsForIcp
   * 根据 BookingId 返回需要发货的PO信息
   */

  @GET('getBookingOrderItemsForIcp')
  getBookingOrderItemsForIcp(
    @Payload
    _req: {
      bookingIds?: string;
    },
  ): Observable<ListResultDto<PurchaseOrderItemForIcpDto>> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/GetAllListForIcp
   * 此方法目前仅提供给Icp 获取全部列表显示
   */

  @GET('getAllListForIcp')
  getAllListForIcp(
    @Payload
    _req: {
      bookingStatus?: string;
      searchKey?: string;
      serviceCompanyId?: string;
      freightMethodType?: number;
      tradeType?: number;
      shipmentType?: number;
      isEnglish?: boolean;
      sorting?: string;
      maxResultCount?: number;
      skipCount?: number;
    },
  ): Observable<PagedResultDto<BookingForIcpDto>> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/ClearanceInviocesUpload
   * 清关发票数据上传解析
   */

  @POST('clearanceInviocesUpload')
  clearanceInviocesUpload(
    @Payload
    _req: {},
  ): Observable<ClearanceInviocesUploadOutput> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/ClearanceInviocesDownload
   * 清关发票下载数据生成
   */

  @POST('clearanceInviocesDownload')
  clearanceInviocesDownload(
    @Payload
    _req: CoEntityDto[],
  ): Observable<ClearanceInviocesDownloadOutput> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/GetRecentlyUsed
   * 最近使用
   */

  @GET('getRecentlyUsed')
  getRecentlyUsed(
    @Payload
    _req: {
      tradeType?: number;
      freightMethodType?: number;
    },
  ): Observable<BookingRecentlyUsedOutput> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/GetBookingsStatistics
   * 获取Booking统计信息
   */

  @GET('getBookingsStatistics')
  getBookingsStatistics(
    @Payload
    _req: {},
  ): Observable<BookingStatisticsOutput> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/ChangeBookingStatus
   * 修改 Booking 状态
   */

  @POST('changeBookingStatus')
  changeBookingStatus(
    @Payload
    _req: ChangeBookingStatusInput,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/Cancel
   * CSP 客户申请取消 Booking，之后 ICP 或 CRM 调用 ChangeBookingStatus()或SalesConfirmCancelForCRM 设置状态为 BookingCancelled
   */

  @POST('cancel')
  cancel(
    @Payload
    _req: CancelBookingInput,
  ): Observable<BookingDto> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/CancelShippingOrder
   * 取消 Shipping Order
   */

  @POST('cancelShippingOrder')
  cancelShippingOrder(
    @Payload
    _req: CancelBookingInput,
  ): Observable<BookingDto> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/GetRelatedBusiness
   * Booking业务对话获取相关的业务id（app端）
   */

  @GET('getRelatedBusiness')
  getRelatedBusiness(
    @Payload
    _req: {
      id?: string;
    },
  ): Observable<GetRelatedBusinessOutput> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/GetChannelList
   * 获取FBA渠道列表
   */

  @GET('getChannelList')
  getChannelList(
    @Payload
    _req: {
      freightMethodType?: number;
    },
  ): Observable<ListResultDto<GetChannelListOutput>> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/GetPagedListForFcm
   * 获取Fcm预订舱数据
   */

  @POST('getPagedListForFcm')
  getPagedListForFcm(
    @Payload
    _req: GetBookingListInputForFcm,
  ): Observable<PagedResultDto<BookingForFcmDto>> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/SetBookingAccepted
   * 设置 Bookings 为已受理状态
   */

  @POST('setBookingAccepted')
  setBookingAccepted(
    @Payload
    _req: SetBookingAcceptedInput,
  ): Observable<SetBookingAcceptedOutput> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/GetClearanceInvoicesForFcm
   * FCM 根据 BookingId 获取 清关列表
   */

  @GET('getClearanceInvoicesForFcm')
  getClearanceInvoicesForFcm(
    @Payload
    _req: {
      id?: string;
    },
  ): Observable<GetClearanceInvoicesForFcmOutput> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/CreateOrUpdateForFcm
   * 更新预订舱信息
   */

  @POST('createOrUpdateForFcm')
  createOrUpdateForFcm(
    @Payload
    _req: CreateOrUpdateForFcmInput,
  ): Observable<CreateOrUpdateForFcmOutput> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/CreateOrUpdateClearanceInvoicesForFcm
   * 处理清关发票、包装清单
   */

  @POST('createOrUpdateClearanceInvoicesForFcm')
  createOrUpdateClearanceInvoicesForFcm(
    @Payload
    _req: CreateOrUpdateClearanceInvoicesForFcmInput,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/DeleteBookingForFcm
   * 删除由 FCM 创建的 Booking(s)
   */

  @POST('deleteBookingForFcm')
  deleteBookingForFcm(
    @Payload
    _req: DeleteBookingForFcmInput,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /CSP/Booking/GetBookingListForFcm
   * 根据 BookingId 集合获取 Booking 明细
   */

  @POST('getBookingListForFcm')
  getBookingListForFcm(
    @Payload
    _req: GetBookingListForFcmInput,
  ): Observable<ListResultDto<BookingListItemDtoForFcm>> {
    return null as any;
  }
}