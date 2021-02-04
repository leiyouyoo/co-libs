import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { StorageEsPageQueryInput,StorageFileDto,StoragePreShipmentExportInput,StorageGetShipmentListInput,StorageGetDeliveryInfoListInput,StorageImportDataRowDto1,StorageExportShippingOrdersInput,StorageImportResultDto1,StorageExportPackingListInput,StorageExportContainersInput } from './storage.types';

@BaseUrl('/Storage/FCMExcel')
@Injectable({ providedIn: 'root' })
export class StorageFCMExcelService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Storage/FCMExcel/BookingOrderExport
     * 电商委托单导出
     */

    @POST('BookingOrderExport')
    bookingOrderExport(
        @Payload
        _req:StorageEsPageQueryInput

    ): Observable<StorageFileDto> {
        return null as any
    }


    /**
     * @param url /Storage/FCMExcel/PreShipmentExport
     * 暂无备注
     */

    @POST('PreShipmentExport')
    preShipmentExport(
        @Payload
        _req:StoragePreShipmentExportInput

    ): Observable<StorageFileDto> {
        return null as any
    }


    /**
     * @param url /Storage/FCMExcel/ShipmentListExport
     * 已受理列表导出
     */

    @POST('ShipmentListExport')
    shipmentListExport(
        @Payload
        _req:StorageGetShipmentListInput

    ): Observable<StorageFileDto> {
        return null as any
    }


    /**
     * @param url /Storage/FCMExcel/DeliveryInfoListExport
     * 配送列表导出
     */

    @POST('DeliveryInfoListExport')
    deliveryInfoListExport(
        @Payload
        _req:StorageGetDeliveryInfoListInput

    ): Observable<StorageFileDto> {
        return null as any
    }


    /**
     * @param url /Storage/FCMExcel/ImportShippingOrders
     * 暂无备注
     */

    @FORM('ImportShippingOrders')
    importShippingOrders(
        @Payload
        _req: {file?:File} 

    ): Observable<StorageImportDataRowDto1<any>> {
        return null as any
    }


    /**
     * @param url /Storage/FCMExcel/ExportShippingOrders
     * 导出SO
     */

    @POST('ExportShippingOrders')
    exportShippingOrders(
        @Payload
        _req:StorageExportShippingOrdersInput

    ): Observable<StorageFileDto> {
        return null as any
    }


    /**
     * @param url /Storage/FCMExcel/ImportPackingList
     * 暂无备注
     */

    @FORM('ImportPackingList')
    importPackingList(
        @Payload
        _req: {businessId?:string,businessType?:number,tradeType?:number,isSave?:boolean,file?:File} 

    ): Observable<StorageImportResultDto1<any>> {
        return null as any
    }


    /**
     * @param url /Storage/FCMExcel/ExportPackingList
     * 导出装箱单
     */

    @POST('ExportPackingList')
    exportPackingList(
        @Payload
        _req:StorageExportPackingListInput

    ): Observable<StorageFileDto> {
        return null as any
    }


    /**
     * @param url /Storage/FCMExcel/ExportContainers
     * 导出集装箱
     */

    @POST('ExportContainers')
    exportContainers(
        @Payload
        _req:StorageExportContainersInput

    ): Observable<StorageFileDto> {
        return null as any
    }


    /**
     * @param url /Storage/FCMExcel/ImportContainers
     * 暂无备注
     */

    @FORM('ImportContainers')
    importContainers(
        @Payload
        _req: {shipmentId?:string,file?:File} 

    ): Observable<StorageImportDataRowDto1<any>> {
        return null as any
    }



  }
