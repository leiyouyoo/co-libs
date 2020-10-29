import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformFeedbackInput,PlatformFeedbackDto,PlatformQueryFeedbackInput,PlatformListResultDto, } from './platform.types';

@BaseUrl('/platform/Feedback')
@Injectable({ providedIn: 'root' })
export class PlatformFeedbackService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Feedback/CreateOrUpdate
     * 创建新的反馈
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformFeedbackInput

    ): Observable<PlatformFeedbackDto> {
        return null as any
    }


    /**
     * @param url /Platform/Feedback/Get
     * 获取详情
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformFeedbackDto> {
        return null as any
    }


    /**
     * @param url /Platform/Feedback/QueryFeedbackStatistics
     * 反馈统计
     */

    @POST('queryFeedbackStatistics')
    queryFeedbackStatistics(
        @Payload
        _req:PlatformQueryFeedbackInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Feedback/GetFeedTypeList
     * 获取反馈类型列表
     */

    @GET('getFeedTypeList')
    getFeedTypeList(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Feedback/QueryList
     * 查询列表数据 分页
     */

    @POST('queryList')
    queryList(
        @Payload
        _req:PlatformQueryFeedbackInput

    ): Observable<PlatformListResultDto<PlatformFeedbackDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Feedback/HandleFeedback
     * 处理反馈
     */

    @POST('handleFeedback')
    handleFeedback(
        @Payload
        _req:PlatformFeedbackInput

    ): Observable<any> {
        return null as any
    }



  }
