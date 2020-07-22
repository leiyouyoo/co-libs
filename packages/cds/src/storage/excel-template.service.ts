import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import {  } from './storage.types';

@BaseUrl('/storage/ExcelTemplate')
@Injectable({ providedIn: 'root' })
export class ExcelTemplateService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Storage/ExcelTemplate/Get
     * 根据模板名称获取excel模板
     */

    @GET('get')
    get(
        @Payload
        _req: {name?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Storage/ExcelTemplate/GetTemplate
     * 
     */

    @GET('getTemplate')
    getTemplate(
        @Payload
        _req: {name?:string} 

    ): Observable<any> {
        return null as any
    }



  }
