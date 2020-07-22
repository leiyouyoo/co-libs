import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ExportSideMarksReportInput,ExportSideMarksReportOutput,SideMarksData, } from './fcm.types';

@BaseUrl('/fcm/SideMarksReport')
@Injectable({ providedIn: 'root' })
export class SideMarksReportService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /FCM/SideMarksReport/ExportReport
     * 导出侧唛信息
     */

    @POST('exportReport')
    exportReport(
        @Payload
        _req:ExportSideMarksReportInput

    ): Observable<ExportSideMarksReportOutput> {
        return null as any
    }


    /**
     * @param url /FCM/SideMarksReport/GetReport
     * 
     */

    @GET('getReport')
    getReport(
        @Payload
        _req: {fileId?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /FCM/SideMarksReport/GetSideMarksQrCodeData
     * 获取侧唛二维码信息
     */

    @GET('getSideMarksQrCodeData')
    getSideMarksQrCodeData(
        @Payload
        _req: {id?:string,fbaNo?:string} 

    ): Observable<SideMarksData> {
        return null as any
    }



  }
