import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import {  } from './storage.types';

@BaseUrl('/storage/ICPExcel')
@Injectable({ providedIn: 'root' })
export class ICPExcelService extends BaseApi {

   
    /**
     * @param url /Storage/ICPExcel/OrderImport
     * 提供给ICP导入在线解析，返回数据列表
     */

    @POST('orderImport')
    orderImport(
        @Payload
        _req: {file?:file} 

    ): Observable<any> {
        return null as any
    }



  }
