import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import {  } from './storage.types';

@BaseUrl('/storage/RateExcel')
@Injectable({ providedIn: 'root' })
export class StorageRateExcelService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Storage/RateExcel/ImportExcelToRate
     * baseport arbitrary 导入
     */

    @FORM('importExcelToRate')
    importExcelToRate(
        @Payload
        _req: {oceanId?:string,file:File,type?:number} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Storage/RateExcel/ImportExcelToTruck
     * 拖车导入
     */

    @FORM('importExcelToTruck')
    importExcelToTruck(
        @Payload
        _req: {oceanId?:string,file:File,type?:number} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Storage/RateExcel/GetTemplateDownloadBasePort
     * 基本港模板下载
     */

    @GET('getTemplateDownloadBasePort')
    getTemplateDownloadBasePort(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Storage/RateExcel/GetTemplateDownloadArbitrary
     * 驳船模板下载
     */

    @GET('getTemplateDownloadArbitrary')
    getTemplateDownloadArbitrary(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Storage/RateExcel/GetTemplateDownloadTruck
     * 拖车模板下载
     */

    @GET('getTemplateDownloadTruck')
    getTemplateDownloadTruck(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }



  }
