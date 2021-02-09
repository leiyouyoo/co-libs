import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { StorageUploadResultDto,StorageGetFileInfoDto,StorageGetFileInfosInput,StorageListResultDto1,StorageChunkUploadResultDto } from './storage.types';

@BaseUrl('/Storage/File')
@Injectable({ providedIn: 'root' })
export class StorageFileService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Storage/File/Upload
     * 暂无备注
     */

    @FORM('Upload')
    upload(
        @Payload
        _req: {file?:File,fileName?:string} 

    ): Observable<StorageUploadResultDto> {
        return null as any
    }


    /**
     * @param url /Storage/File/GetFileInfo
     * 获取文件详情
     */

    @GET('GetFileInfo')
    getFileInfo(
        @Payload
        _req: {id?:string} 

    ): Observable<StorageGetFileInfoDto> {
        return null as any
    }


    /**
     * @param url /Storage/File/GetFileInfos
     * 批量获取文件详情
     */

    @POST('GetFileInfos')
    getFileInfos(
        @Payload
        _req:StorageGetFileInfosInput

    ): Observable<StorageListResultDto1<StorageGetFileInfoDto>> {
        return null as any
    }


    /**
     * @param url /Storage/File/ChunkUpload
     * 暂无备注
     */

    @FORM('ChunkUpload')
    chunkUpload(
        @Payload
        _req: {lastModified?:string,totalChunk?:number,chunkIndex?:number,file?:File,fileName?:string} 

    ): Observable<StorageChunkUploadResultDto> {
        return null as any
    }


    /**
     * @param url /Storage/File/GetDownLoadFile
     * 下载文件/获取图片
     */

    @GET('GetDownLoadFile')
    getDownLoadFile(
        @Payload
        _req: {fileId:string,handler:string,modifier?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Storage/File/GetPdf
     * 获取Pdf文件
     */

    @GET('GetPdf')
    getPdf(
        @Payload
        _req: {fileId:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Storage/File/Delete
     * 删除物理文件
     */

    @DELETE('Delete')
    delete(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Storage/File/BulkDelete
     * 批量删除
     */

    @POST('BulkDelete')
    bulkDelete(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }



  }
