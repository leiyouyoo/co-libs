import { Injectable, Injector } from '@angular/core';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { Observable } from 'rxjs';
import {
  StorageBatchDownloadClearanceInvoiceDto,
  StorageBillExportInput,
  StorageExportPackingListInput,
  StorageFileDto,
  StorageImportResultDto,
  StorageObject,
  StorageOrderExportInput,
  StorageProductExportInput,
} from './storage.types';

@BaseUrl('/storage/CSPExcel')
@Injectable({ providedIn: 'root' })
export class StorageCSPExcelService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * @param url /Storage/CSPExcel/AnalysisExcel
   * CSP清关发票解析
   */

  @FORM('analysisExcel')
  analysisExcel(
    @Payload
    _req: {
      file: File;
      headers: any[];
      apiParameterName?: string;
      isBackgroundJob?: boolean;
      apiTypes?: number;
      url: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /Storage/CSPExcel/CusClearanceInvoiceExportExcelAsync
   * CSP清关发票导出excel
   */

  @FORM('cusClearanceInvoiceExportExcelAsync')
  cusClearanceInvoiceExportExcelAsync(
    @Payload
    _req: {
      sheetName?: string;
      templateName?: string;
      headers?: any[];
      apiTypes?: number;
      url: string;
      parametersJsonStr?: string;
      isBackgroundJob?: boolean;
    },
  ): Observable<StorageFileDto> {
    return null as any;
  }

  /**
     * @param url /Storage/CSPExcel/BatchClearanceInvoiceExportExcelAsync
     * 批量导出PackageList
Id 要调整成bookingId
     */

  @POST('batchClearanceInvoiceExportExcelAsync')
  batchClearanceInvoiceExportExcelAsync(
    @Payload
    _req: StorageBatchDownloadClearanceInvoiceDto,
  ): Observable<StorageFileDto> {
    return null as any;
  }

  /**
   * @param url /Storage/CSPExcel/ProductImport
   * 导入产品
   */

  @FORM('productImport')
  productImport(
    @Payload
    _req: {
      file?: File;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /Storage/CSPExcel/ProductExport
   * 产品导出
   */

  @POST('productExport')
  productExport(
    @Payload
    _req: StorageProductExportInput,
  ): Observable<StorageFileDto> {
    return null as any;
  }

  /**
   * @param url /Storage/CSPExcel/OrderImport
   * 采购订单导入
   */

  @FORM('orderImport')
  orderImport(
    @Payload
    _req: {
      file?: File;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /Storage/CSPExcel/OrderExport
   * 采购订单导出
   */

  @POST('orderExport')
  orderExport(
    @Payload
    _req: StorageOrderExportInput,
  ): Observable<StorageFileDto> {
    return null as any;
  }

  /**
   * @param url /Storage/CSPExcel/BillExport
   * 账单导出
   */

  @POST('billExport')
  billExport(
    @Payload
    _req: StorageBillExportInput,
  ): Observable<StorageFileDto> {
    return null as any;
  }

  /**
   * @param url /Storage/CSPExcel/ImportPackingList
   * 导入装箱单
   */

  @FORM('importPackingList')
  importPackingList(
    @Payload
    _req: {
      bookingId?: string;
      isSave?: boolean;
      file?: File;
    },
  ): Observable<StorageImportResultDto<StorageObject>> {
    return null as any;
  }

  /**
   * @param url /Storage/CSPExcel/ExportPackingList
   * 导出装箱单
   */

  @POST('exportPackingList')
  exportPackingList(
    @Payload
    _req: StorageExportPackingListInput,
  ): Observable<StorageFileDto> {
    return null as any;
  }
}
