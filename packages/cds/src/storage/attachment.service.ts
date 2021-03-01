import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { StorageChangeAttachmentTypeInput,StorageGetAllAttachmentListInput,StorageListResultDto1,StorageAttachmentListDto,StorageCoEntityDto,StorageAttachmentDto,StorageAttachmentEditDto,StorageAttachmentTypePermissionDto,StorageBatchCreateAttachmentInput } from './storage.types';

@BaseUrl('/Storage/Attachment')
@Injectable({ providedIn: 'root' })
export class StorageAttachmentService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Storage/Attachment/ChangeType
     * 修改文件类型
     */

    @POST('ChangeType')
    changeType(
        @Payload
        _req:StorageChangeAttachmentTypeInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Storage/Attachment/GetAllList
     * 根据业务id集合获取附件列表.(弃用，跟业务耦合的，得根据具体业务提供获取业务附件的接口)
     */

    @POST('GetAllList')
    getAllList(
        @Payload
        _req:StorageGetAllAttachmentListInput

    ): Observable<StorageListResultDto1<StorageAttachmentListDto>> {
        return null as any
    }


    /**
     * @param url /Storage/Attachment/Delete
     * 删除附件
     */

    @POST('Delete')
    delete(
        @Payload
        _req:StorageCoEntityDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Storage/Attachment/BatchDelete
     * 批量删除附件
     */

    @POST('BatchDelete')
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

    @GET('Get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<StorageAttachmentDto> {
        return null as any
    }


    /**
     * @param url /Storage/Attachment/GetByFileId
     * 根据文件 Id 获取附件信息
     */

    @GET('GetByFileId')
    getByFileId(
        @Payload
        _req: {id?:string} 

    ): Observable<StorageAttachmentDto> {
        return null as any
    }


    /**
     * @param url /Storage/Attachment/GetListByFileIds
     * 根据文件 Id 获取附件信息
     */

    @POST('GetListByFileIds')
    getListByFileIds(
        @Payload
        _req: {} 

    ): Observable<StorageListResultDto1<StorageAttachmentListDto>> {
        return null as any
    }


    /**
     * @param url /Storage/Attachment/UpdateAttachment
     * 编辑
     */

    @PUT('UpdateAttachment')
    updateAttachment(
        @Payload
        _req:StorageAttachmentEditDto

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Storage/Attachment/GetDefaultPermission
     * 获取所有附件类型权限
     */

    @GET('GetDefaultPermission')
    getDefaultPermission(
        @Payload
        _req: {} 

    ): Observable<StorageListResultDto1<StorageAttachmentTypePermissionDto>> {
        return null as any
    }


    /**
     * @param url /Storage/Attachment/BatchCreate
     * 批量创建附件
     */

    @POST('BatchCreate')
    batchCreate(
        @Payload
        _req:StorageBatchCreateAttachmentInput

    ): Observable<StorageListResultDto1<StorageAttachmentDto>> {
        return null as any
    }



  }
