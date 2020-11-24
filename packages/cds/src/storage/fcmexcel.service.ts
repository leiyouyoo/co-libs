import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { StoragePreShipmentExportInput,StorageFileDto,StorageGetShipmentListInput,StorageGetDeliveryInfoListInput,StorageShippingOrderDataRowDto,StorageImportDataRowDto,StorageExportShippingOrdersInput, } from './storage.types';

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

    ): Observable<StorageImportDataRowDto<StorageShippingOrderDataRowDto>> {
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



  }
