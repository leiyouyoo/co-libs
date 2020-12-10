import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { ChangeAttachmentTypeInput,GetAllAttachmentListInput,AttachmentListDto,CoEntityDto,AttachmentDto,BatchCreateAttachmentInput, } from './storage.types';

@BaseUrl('/storage/Attachment')
@Injectable({ providedIn: 'root' })
export class AttachmentService extends BaseApi {

   
    /**
     * @param url /Storage/Attachment/ChangeType
     * 修改文件类型
     */

    @POST('changeType')
    changeType(
        @Payload
        _req:ChangeAttachmentTypeInput

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /Storage/Attachment/GetAllList
     * 根据业务id集合获取附件列表.
     */

    @POST('getAllList')
    getAllList(
        @Payload
        _req:GetAllAttachmentListInput

    ): Observable<ListResultDto<AttachmentListDto>> {
        return null as any
    }

 
    /**
     * @param url /Storage/Attachment/Delete
     * 删除附件
     */

    @POST('delete')
    delete(
        @Payload
        _req:CoEntityDto

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /Storage/Attachment/BatchDelete
     * 批量删除附件
     */

    @POST('batchDelete')
    batchDelete(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }

 
    /**
     * @param url /Storage/Attachment/Get
     * 获取附件信息
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<AttachmentDto> {
        return null as any
    }

 
    /**
     * @param url /Storage/Attachment/GetByFileId
     * 根据文件 Id 获取附件信息
     */

    @GET('getByFileId')
    getByFileId(
        @Payload
        _req: {id?:string} 

    ): Observable<AttachmentDto> {
        return null as any
    }

 
    /**
     * @param url /Storage/Attachment/GetListByFileIds
     * 根据文件 Id 获取附件信息
     */

    @POST('getListByFileIds')
    getListByFileIds(
        @Payload
        _req: {} 

    ): Observable<ListResultDto<AttachmentListDto>> {
        return null as any
    }

 
    /**
     * @param url /Storage/Attachment/BatchCreate
     * 批量创建附件
     */

    @POST('batchCreate')
    batchCreate(
        @Payload
        _req:BatchCreateAttachmentInput

    ): Observable<ListResultDto<AttachmentDto>> {
        return null as any
    }



  }
