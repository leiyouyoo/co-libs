import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { FileDto } from './storage.types';

@BaseUrl('/storage/Excel')
@Injectable({ providedIn: 'root' })
export class ExcelService extends BaseApi {
  /**
   * @param url /Storage/Excel/ExportExcel
   * 导出excel
   */

  @POST('exportExcel')
  exportExcel(
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
  ): Observable<FileDto> {
    return null as any;
  }

  /**
   * @param url /Storage/Excel/ImportExcel
   * 导入excel
   */

  @POST('importExcel')
  importExcel(
    @Payload
    _req: {
      file: any;
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
   * @param url /Storage/Excel/DownloadExcel
   * 下载excel
   */

  @GET('downloadExcel')
  downloadExcel(
    @Payload
    _req: {
      fileName: string;
      fileType?: string;
      fileToken: string;
      isSuccess?: boolean;
      message?: string;
      result?: object;
    },
  ): Observable<any> {
    return null as any;
  }
}
