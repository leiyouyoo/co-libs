import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { StorageFileDto,StorageBatchDownloadClearanceInvoiceDto,StorageImportResultDto,StorageProductExportInput,StorageOrderExportInput,StorageBillExportInput,StorageImportResultDto1,StorageExportPackingListInput } from './storage.types';

@BaseUrl('/Storage/CSPExcel')
@Injectable({ providedIn: 'root' })
export class StorageCSPExcelService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Storage/CSPExcel/AnalysisExcel
     * 暂无备注
     */

    @FORM('AnalysisExcel')
    analysisExcel(
        @Payload
        _req: {file:File,headers:any[],apiParameterName?:string,isBackgroundJob?:boolean,apiTypes?:number,url:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Storage/CSPExcel/CusClearanceInvoiceExportExcelAsync
     * 暂无备注
     */

    @FORM('CusClearanceInvoiceExportExcelAsync')
    cusClearanceInvoiceExportExcelAsync(
        @Payload
        _req: {sheetName?:string,templateName?:string,headers?:any[],apiTypes?:number,url:string,parametersJsonStr?:string,isBackgroundJob?:boolean} 

    ): Observable<StorageFileDto> {
        return null as any
    }


    /**
     * @param url /Storage/CSPExcel/BatchClearanceInvoiceExportExcelAsync
     * 批量导出PackageList
Id 要调整成bookingId
     */

    @POST('BatchClearanceInvoiceExportExcelAsync')
    batchClearanceInvoiceExportExcelAsync(
        @Payload
        _req:StorageBatchDownloadClearanceInvoiceDto

    ): Observable<StorageFileDto> {
        return null as any
    }


    /**
     * @param url /Storage/CSPExcel/ProductImport
     * 暂无备注
     */

    @FORM('ProductImport')
    productImport(
        @Payload
        _req: {file?:File} 

    ): Observable<StorageImportResultDto> {
        return null as any
    }


    /**
     * @param url /Storage/CSPExcel/ProductExport
     * 产品导出
     */

    @POST('ProductExport')
    productExport(
        @Payload
        _req:StorageProductExportInput

    ): Observable<StorageFileDto> {
        return null as any
    }


    /**
     * @param url /Storage/CSPExcel/OrderImport
     * 暂无备注
     */

    @FORM('OrderImport')
    orderImport(
        @Payload
        _req: {file?:File} 

    ): Observable<StorageImportResultDto> {
        return null as any
    }


    /**
     * @param url /Storage/CSPExcel/OrderExport
     * 采购订单导出
     */

    @POST('OrderExport')
    orderExport(
        @Payload
        _req:StorageOrderExportInput

    ): Observable<StorageFileDto> {
        return null as any
    }


    /**
     * @param url /Storage/CSPExcel/BillExport
     * 账单导出
     */

    @POST('BillExport')
    billExport(
        @Payload
        _req:StorageBillExportInput

    ): Observable<StorageFileDto> {
        return null as any
    }


    /**
     * @param url /Storage/CSPExcel/ImportPackingList
     * 暂无备注
     */

    @FORM('ImportPackingList')
    importPackingList(
        @Payload
        _req: {businessId?:string,isSave?:boolean,file?:File} 

    ): Observable<StorageImportResultDto1<any>> {
        return null as any
    }


    /**
     * @param url /Storage/CSPExcel/ExportPackingList
     * 导出装箱单
     */

    @POST('ExportPackingList')
    exportPackingList(
        @Payload
        _req:StorageExportPackingListInput

    ): Observable<StorageFileDto> {
        return null as any
    }



  }
