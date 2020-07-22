import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import {  } from './storage.types';

@BaseUrl('/storage/ICPExcel')
@Injectable({ providedIn: 'root' })
export class ICPExcelService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Storage/ICPExcel/OrderImport
     * 提供给ICP导入在线解析，返回数据列表
     */

    @FORM('orderImport')
    orderImport(
        @Payload
        _req: {file?:File} 

    ): Observable<any> {
        return null as any
    }



  }
