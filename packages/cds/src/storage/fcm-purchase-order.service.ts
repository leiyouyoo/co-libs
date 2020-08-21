import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { StoragePurchaseOrderImportExcelInput, } from './storage.types';

@BaseUrl('/storage/FcmPurchaseOrder')
@Injectable({ providedIn: 'root' })
export class StorageFcmPurchaseOrderService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Storage/FcmPurchaseOrder/GetTemplateDownload
     * 获取导出模板
     */

    @GET('getTemplateDownload')
    getTemplateDownload(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Storage/FcmPurchaseOrder/ParsePurchaseOrderExcel
     * 解析excel内容
     */

    @FORM('parsePurchaseOrderExcel')
    parsePurchaseOrderExcel(
        @Payload
        _req:StoragePurchaseOrderImportExcelInput

    ): Observable<any> {
        return null as any
    }



  }
