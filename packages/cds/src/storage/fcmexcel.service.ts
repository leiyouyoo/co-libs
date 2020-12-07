import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { StoragePreShipmentExportInput,StorageFileDto,StorageGetShipmentListInput,StorageGetDeliveryInfoListInput,StorageObject,StorageImportDataRowDto,StorageExportShippingOrdersInput,StorageImportResultDto,StorageExportPackingListInput,StorageExportContainersInput,StorageImportContainersWithExcelInput, } from './storage.types';

@BaseUrl('/storage/FCMExcel')
@Injectable({ providedIn: 'root' })
export class StorageFCMExcelService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Storage/FCMExcel/PreShipmentExport
     * 
     */

    @POST('preShipmentExport')
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

    @POST('shipmentListExport')
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

    @POST('deliveryInfoListExport')
    deliveryInfoListExport(
        @Payload
        _req:StorageGetDeliveryInfoListInput

    ): Observable<StorageFileDto> {
        return null as any
    }


    /**
     * @param url /Storage/FCMExcel/ImportShippingOrders
     * 导入SO
     */

    @FORM('importShippingOrders')
    importShippingOrders(
        @Payload
        _req: {file?:File} 

    ): Observable<StorageImportDataRowDto<StorageObject>> {
        return null as any
    }


    /**
     * @param url /Storage/FCMExcel/ExportShippingOrders
     * 导出SO
     */

    @POST('exportShippingOrders')
    exportShippingOrders(
        @Payload
        _req:StorageExportShippingOrdersInput

    ): Observable<StorageFileDto> {
        return null as any
    }


    /**
     * @param url /Storage/FCMExcel/ImportPackingList
     * 导入装箱单
     */

    @FORM('importPackingList')
    importPackingList(
        @Payload
        _req: {businessId?:string,businessType?:number,tradeType?:number,isSave?:boolean,file?:File} 

    ): Observable<StorageImportResultDto<StorageObject>> {
        return null as any
    }


    /**
     * @param url /Storage/FCMExcel/ExportPackingList
     * 导出装箱单
     */

    @POST('exportPackingList')
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

    @POST('exportContainers')
    exportContainers(
        @Payload
        _req:StorageExportContainersInput

    ): Observable<StorageFileDto> {
        return null as any
    }


    /**
     * @param url /Storage/FCMExcel/ImportContainers
     * 导入集装箱
     */

    @POST('importContainers')
    importContainers(
        @Payload
        _req:StorageImportContainersWithExcelInput

    ): Observable<StorageImportDataRowDto<StorageObject>> {
        return null as any
    }



  }
