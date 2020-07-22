import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ICPUploadFileInput,UploadResultDto,ICPBatchDownloadInput,ICPBatchDownloadResult,ListResultDto, } from './storage.types';

@BaseUrl('/storage/ICPFile')
@Injectable({ providedIn: 'root' })
export class ICPFileService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Storage/ICPFile/Upload
     * 文件上传
     */

    @POST('upload')
    upload(
        @Payload
        _req:ICPUploadFileInput

    ): Observable<UploadResultDto> {
        return null as any
    }


    /**
     * @param url /Storage/ICPFile/BatchDownload
     * 批量下载
     */

    @POST('batchDownload')
    batchDownload(
        @Payload
        _req:ICPBatchDownloadInput

    ): Observable<ListResultDto<ICPBatchDownloadResult>> {
        return null as any
    }



  }
