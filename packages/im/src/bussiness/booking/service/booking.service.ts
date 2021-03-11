import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { _HttpClient } from '@co/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookingChannels, RecentlyUsed } from '..';
import { FreightMethodType } from '../../shipment/models/FreightMethodType';
import { BookingEntity } from '../class/booking-entity';
import { BookingQueryEntity } from '../class/bookingQuery.entity';
import { BookingTemplateEntity } from '../class/bookingTemplste';

@Injectable({
  providedIn: 'root',
})
export class ImBookingLibraryService {
  constructor(public httpService: _HttpClient) {}

  //#region  booking模板
  // 获取模板数据
  GetAllTemplate(filterObj: { Sorting?: string; MaxResultCount?: number; SkipCount?: number }) {
    const url = 'CSP/BookingTemplate/GetAll';
    return this.httpService.get(url, filterObj);
  }

  // 创建
  createTemplate(templateObj: BookingTemplateEntity) {
    const url = 'CSP/BookingTemplate/Create';
    return this.httpService.post(url, templateObj);
  }
  updateTemplate(templateObj: BookingTemplateEntity) {
    const url = 'CSP/BookingTemplate/Update';
    return this.httpService.put(url, templateObj);
  }

  // 删除模板
  deleteTemplate(Id: number) {
    const url = 'CSP/BookingTemplate/Delete';
    const params = {
      Id,
    };
    return this.httpService.delete(url, params);
  }
  Check(name: string) {
    const url = '/CSP/BookingTemplate/Check';
    const params = {
      name,
    };
    return this.httpService.post(url, params);
  }
  //#endregion

  //#region   booking
  // 获取booking数据
  getAllBooking(bookingObj: BookingQueryEntity): Observable<any> {
    const url = 'CSP/Booking/GetAllList';
    return this.httpService.get(url, bookingObj);
  }

  // 创建booking
  createBooking(bookingObj: BookingEntity) {
    const url = 'CSP/Booking/Create';
    return this.httpService.post(url, bookingObj);
  }
  // 编辑booking
  updateBooking(bookingObj: BookingEntity) {
    const url = 'CSP/Booking/Update';
    return this.httpService.put(url, bookingObj);
  }

  // 预定详情
  getBookingDetail(Id: string) {
    const url = 'CSP/Booking/Get';
    const params = {
      id: Id,
    };
    return this.httpService.get(url, params);
  }
   // 预定详情
  getBookingForCRM(Id: string) {
    const url = 'csp/Booking/getForCRM';
    const params = {
      id: Id,
    };
    return this.httpService.get(url, params);
  }

  // 取消预订
  cancelBooking(bookingObj: BookingEntity) {
    const url = 'CSP/Booking/Cancel';
    return this.httpService.post(url, bookingObj);
  }

  // 从booking模板或者quote创建booking
  GetBookingInfoByTemplate(Id?: string) {
    const params = {
      Id,
    };
    const url = '/CSP/BookingTemplate/GetDetailById';
    return this.httpService.get(url, params);
  }

  // create booking 从orders
  UseOrderForBooking(orderIds: any[]): Observable<any> {
    const params = {
      orderIds,
      toBooking: true,
    };
    return this.httpService.post('/CSP/PurchaseOrder/Booking', params);
  }
  bookingSearch(searchKeyword: string) {
    const params = {
      searchKeyword,
    };
    return this.httpService.post('/CSP/PurchaseOrder/BookingSearch', params);
  }

  bookingCheck(purchaseOrderIds: Array<number>, name: string) {
    const params = {
      purchaseOrderIds: [...purchaseOrderIds],
      name,
    };
    return this.httpService.post('/CSP/Booking/Check', params);
  }
  cspBookingCheck(purchaseOrderIds: Array<number>, name: string, shipperCustomerId, consigneeCustomerId?) {
    const params = {
      purchaseOrderIds,
      name,
      shipperCustomerId,
      consigneeCustomerId,
    };
    return this.httpService.post('/CSP/Booking/IsExists', params);
  }
  // 获取FBA地址
  GetAmazonAll(SearchText: any): Observable<any> {
    const params = {
      SearchText,
    };
    return this.httpService.get('CSP/Customer/GetAmazonAll', params);
  }

  // 获取FBM地址
  GetCityoceanAll(SearchText: any): Observable<any> {
    const params = {
      SearchText,
    };
    return this.httpService.get('CSP/Customer/GetCityoceanAll', params);
  }
  //#endregion

  // 获取SKU列表
  getSkuList(skuInput: { SearchText?: string; MaxResultCount?: number; SkipCount?: number }) {
    return this.httpService.get('CSP/Product/GetSkuList', skuInput);
  }

  // 解析EXCEL
  AnalysisExcel(params: any) {
    // todo  server_url删掉
    return this.httpService.post('/Storage/CSPExcel/AnalysisExcel', params);
    // return this.httpService.http.post('http://192.168.1.206:8002/Storage/CSPExcel/AnalysisExcel', params);
  }

  // 导出EXCEL
  ExportExcel(params: any) {
    // todo  server_url删掉
    const headerFormParams: any = {
      'Abp.TenantId': '8',
    };
    const formHeaders = new HttpHeaders(headerFormParams);
    return this.httpService.post('/Storage/CSPExcel/CusClearanceInvoiceExportExcelAsync', params, {
      headers: formHeaders,
    });
  }

  // 获取最近使用的
  GetRecentlyUsed(tradeType: 0 | 1 | 2 | 3, freightMethodType: FreightMethodType): Observable<RecentlyUsed> {
    return this.httpService.get('CSP/Booking/GetRecentlyUsed', { tradeType, freightMethodType }) as any;
  }
  // 获取贸易类型
  getTradeTypes() {
    return this.httpService.get('PUB/DataDictionary/GetTradeTypes');
  }

  // 根据贸易类型获取贸易条款
  GetIncotermsByTradeType(tradeType: number) {
    return (this.httpService.get('PUB/DataDictionary/GetIncotermsByTradeType', { tradeType }) as Observable<
      { key: string; value: string }[]
    >).pipe(
      map(list => {
        const index = list.findIndex(p => p.key === 'FOB');
        if (index !== -1) {
          list[0] = list.splice(index, 1, list[0])[0];
        }
        return list;
      }),
    );
  }

  // FBA channel list
  getChannelList(freightMethodType: FreightMethodType): Observable<BookingChannels[]> {
    const url = `/CSP/Booking/GetChannelList`;
    return this.httpService.get(url, { freightMethodType }).pipe(map((o: any) => o.items)) as any;
  }

  // CRM-BOOKING 口岸数据获取
  // 获取贸易类型
  getByPlaceOrLocation() {
    return this.httpService.get('Platform/CompanyConfigure/GetByPlaceOrLocation');
  }
  // 获取收发货人(CRM 创booking)
  getMyCustomerAndPartners() {
    return this.httpService.get('CRM/Customer/GetMyCustomerAndPartners');
  }

  getIMBookingDetail(id: string) {
    return this.httpService.get('/FCM/BookingOrder/GetIMBookingDetail', { id });
  }
}
