import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseHeaders, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { ExportSideMarksReportInput,ExportSideMarksReportOutput,SideMarksData, } from './fcm.types';

@BaseUrl('http://192.168.1.5:8000/fcm/SideMarksReport')
@Injectable({ providedIn: 'root' })
@BaseHeaders({ Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZDg1MzI1MGYxYWY0ZjE4ODBmZTBjOTRkZWNjNTRjIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1OTQzNjA1NzgsImV4cCI6MTU5NDM2NDE3OCwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMS41OjgwMDEvIiwiYXVkIjpbImh0dHA6Ly8xOTIuMTY4LjEuNTo4MDAxL3Jlc291cmNlcyIsImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiXSwiY2xpZW50X2lkIjoiY2l0eU9jZWFuIiwic3ViIjoiOTc5IiwiYXV0aF90aW1lIjoxNTk0MzYwNTc4LCJpZHAiOiJsb2NhbCIsImh0dHA6Ly93d3cuYXNwbmV0Ym9pbGVycGxhdGUuY29tL2lkZW50aXR5L2NsYWltcy90ZW5hbnRJZCI6IjEiLCJyb2xlIjoiNCwyIiwicm9sZV9uYW1lcyI6IlN0YWZmLFNhbGVzIiwidGVuYW5jeV9uYW1lIjoiQ2l0eSBPY2VhbiIsIm5hbWUiOiJmcmVkZHlmdSIsInN1cl9uYW1lIjoiIiwicGxhdGZvcm0iOiIiLCJwYXJlbnRfdXNlcmlkIjoiIiwiY3JlYXRvcl91c2VySWQiOiIiLCJhdXRob3JpemF0aW9uX3R5cGUiOiJJbnRlcm5hbCIsImN1c3RvbWVyX2lkIjoiNjBhOTQ0NzktNDM3My00OTA3LTg5MzUtNjI4MGE3OWI3M2ZkIiwic2NvcGUiOlsiaWRzNC1hcGkiLCJQbGF0Zm9ybUFwaSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.BDXUHDCx5T-JtisG0Mf-Lj1-3AZ3l5pGgwqHGwXpLltbNcbfJvYlEStbgTLGFpLBax6Z5AyYTDH2sqdMm2qjMYMffqMVbmnk0D35xBsrk2K4my4JmEZwHo0Uwc9Wj9MESNkz34dpx8GHgI3AVi2Wqb33qnkTg-UauaSFsHnxT_nCS6cin9lQZUXEfNPRIvJKIQ39cpeoGKSX6vAV56vO2pOOF1E57LPF88nnk2tHJZPbrkQ4rgOVUzH9oGIKCekCifj7w8ucaWeaX6FoSzH6MltcTJHVTpu1HWZqLnXFgU7j3MrpwgxBUnCI5PT2pawlQB5W9EMmLH6m7W98YWsOWA' })

export class SideMarksReportService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }


    /**
     * @param url /FCM/SideMarksReport/ExportReport
     *
     */

    @POST('exportReport')
    exportReport(
        @Payload
        _req:ExportSideMarksReportInput

    ): Observable<ExportSideMarksReportOutput> {
        return null as any
    }


    /**
     * @param url /FCM/SideMarksReport/PreCheck
     *
     */

    @POST('preCheck')
    preCheck(
        @Payload
        _req: {}

    ): Observable<any> {
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
     *
     */

    @GET('getSideMarksQrCodeData')
    getSideMarksQrCodeData(
        @Payload
        _req: {id?:string,fbaNo?:string}

    ): Observable<SideMarksData> {
        return null as any
    }



  }
