import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { StorageUploadResultDto,StorageGetFileInfoDto,StoragePagedResultDto,StorageChunkUploadResultDto, } from './storage.types';

@BaseUrl('/storage/File')
@Injectable({ providedIn: 'root' })
export class StorageFileService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Storage/File/Upload
     * 上传文件
     */

    @FORM('upload')
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

    @GET('getFileInfo')
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

    @GET('getFileInfos')
    getFileInfos(
        @Payload
        _req: {ids?:any[]} 

    ): Observable<StoragePagedResultDto<GetFileInfoDto>> {
        return null as any
    }


    /**
     * @param url /Storage/File/ChunkUpload
     * 分片上传
     */

    @FORM('chunkUpload')
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

    @GET('getDownLoadFile')
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

    @GET('getPdf')
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

    @DELETE('delete')
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

    @POST('bulkDelete')
    bulkDelete(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }



  }
