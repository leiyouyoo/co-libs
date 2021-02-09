import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { StorageICPUploadFileInput,StorageUploadResultDto,StorageICPBatchDownloadInput,StorageListResultDto1,StorageICPBatchDownloadResult } from './storage.types';

@BaseUrl('/Storage/ICPFile')
@Injectable({ providedIn: 'root' })
export class StorageICPFileService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Storage/ICPFile/Upload
     * 文件上传
     */

    @POST('Upload')
    upload(
        @Payload
        _req:StorageICPUploadFileInput

    ): Observable<StorageUploadResultDto> {
        return null as any
    }


    /**
     * @param url /Storage/ICPFile/BatchDownload
     * 批量下载
     */

    @POST('BatchDownload')
    batchDownload(
        @Payload
        _req:StorageICPBatchDownloadInput

    ): Observable<StorageListResultDto1<StorageICPBatchDownloadResult>> {
        return null as any
    }



  }
