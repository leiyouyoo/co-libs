import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { ChunkUploadResultDto, GetFileInfoDto, UploadResultDto } from './storage.types';

@BaseUrl('/storage/File')
@Injectable({ providedIn: 'root' })
export class FileService extends BaseApi {
  /**
   * @param url /Storage/File/Upload
   * 上传文件
   */

  @POST('upload')
  upload(
    @Payload
    _req: {
      file?: any;
      fileName?: string;
    },
  ): Observable<UploadResultDto> {
    return null as any;
  }

  /**
   * @param url /Storage/File/GetFileInfo
   * 获取文件详情
   */

  @GET('getFileInfo')
  getFileInfo(
    @Payload
    _req: {
      id?: string;
    },
  ): Observable<GetFileInfoDto> {
    return null as any;
  }

  /**
   * @param url /Storage/File/GetFileInfos
   *
   */

  @GET('getFileInfos')
  getFileInfos(
    @Payload
    _req: {
      ids?: any[];
    },
  ): Observable<PagedResultDto<GetFileInfoDto>> {
    return null as any;
  }

  /**
   * @param url /Storage/File/ChunkUpload
   * 分片上传
   */

  @POST('chunkUpload')
  chunkUpload(
    @Payload
    _req: {
      lastModified?: string;
      totalChunk?: number;
      chunkIndex?: number;
      file?: any;
      fileName?: string;
    },
  ): Observable<ChunkUploadResultDto> {
    return null as any;
  }

  /**
   * @param url /Storage/File/GetDownLoadFile
   * 下载文件/获取图片
   */

  @GET('getDownLoadFile')
  getDownLoadFile(
    @Payload
    _req: {
      fileId: string;
      handler: string;
      modifier?: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /Storage/File/GetPdf
   * 获取Pdf文件
   */

  @GET('getPdf')
  getPdf(
    @Payload
    _req: {
      fileId: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /Storage/File/Delete
   *
   */

  @DELETE('delete')
  delete(
    @Payload
    _req: {
      id?: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /Storage/File/BulkDelete
   *
   */

  @POST('bulkDelete')
  bulkDelete(
    @Payload
    _req: {},
  ): Observable<any> {
    return null as any;
  }
}
