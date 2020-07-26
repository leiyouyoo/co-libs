import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PreShipmentExportInput,FileDto,GetShipmentListInput,GetDeliveryInfoListInput, } from './storage.types';

@BaseUrl('/storage/FCMExcel')
@Injectable({ providedIn: 'root' })
export class FCMExcelService extends BaseApi {
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
        _req:PreShipmentExportInput

    ): Observable<FileDto> {
        return null as any
    }


    /**
     * @param url /Storage/FCMExcel/ShipmentListExport
     *
     */

    @POST('shipmentListExport')
    shipmentListExport(
        @Payload
        _req:GetShipmentListInput

    ): Observable<FileDto> {
        return null as any
    }

  /**
   * @param url /Storage/FCMExcel/deliveryInfoListExport
   *
   */

  @POST('deliveryInfoListExport')
  deliveryInfoListExport(
    @Payload
      _req:GetDeliveryInfoListInput

  ): Observable<FileDto> {
    return null as any
  }

  }
