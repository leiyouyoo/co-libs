import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { FileDto,ImportResultDto,ProductExportInput,OrderExportInput, } from './storage.types';

@BaseUrl('/storage/CSPExcel')
@Injectable({ providedIn: 'root' })
export class CSPExcelService extends BaseApi {

   
    /**
     * @param url /Storage/CSPExcel/AnalysisExcel
     * CSP清关发票解析
     */

    @POST('analysisExcel')
    analysisExcel(
        @Payload
        _req: {file:file,headers:any[],apiParameterName?:string,isBackgroundJob?:boolean,apiTypes?:number,url:string} 

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /Storage/CSPExcel/CusClearanceInvoiceExportExcelAsync
     * CSP清关发票导出excel
     */

    @POST('cusClearanceInvoiceExportExcelAsync')
    cusClearanceInvoiceExportExcelAsync(
        @Payload
        _req: {sheetName?:string,templateName?:string,headers?:any[],apiTypes?:number,url:string,parametersJsonStr?:string,isBackgroundJob?:boolean} 

    ): Observable<FileDto> {
        return null as any
    }

 
    /**
     * @param url /Storage/CSPExcel/ProductImport
     * 导入产品
     */

    @POST('productImport')
    productImport(
        @Payload
        _req: {file?:file} 

    ): Observable<ImportResultDto> {
        return null as any
    }

 
    /**
     * @param url /Storage/CSPExcel/ProductExport
     * 产品导出
     */

    @POST('productExport')
    productExport(
        @Payload
        _req:ProductExportInput

    ): Observable<FileDto> {
        return null as any
    }

 
    /**
     * @param url /Storage/CSPExcel/OrderImport
     * 采购订单导入
     */

    @POST('orderImport')
    orderImport(
        @Payload
        _req: {file?:file} 

    ): Observable<ImportResultDto> {
        return null as any
    }

 
    /**
     * @param url /Storage/CSPExcel/OrderExport
     * 采购订单导出
     */

    @POST('orderExport')
    orderExport(
        @Payload
        _req:OrderExportInput

    ): Observable<FileDto> {
        return null as any
    }



  }
