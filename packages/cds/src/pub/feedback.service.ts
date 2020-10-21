import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBFeedbackInput,PUBFeedbackDto,PUBListResultDto, } from './pub.types';

@BaseUrl('/pub/Feedback')
@Injectable({ providedIn: 'root' })
export class PUBFeedbackService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/Feedback/CreateOrUpdate
     * 创建新的反馈
     */

    @POST('createOrUpdate')
    createOrUpdate(
        @Payload
        _req:PUBFeedbackInput

    ): Observable<PUBFeedbackDto> {
        return null as any
    }


    /**
     * @param url /PUB/Feedback/Get
     * 获取详情
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PUBFeedbackDto> {
        return null as any
    }


    /**
     * @param url /PUB/Feedback/GetFeedbackStatistics
     * 反馈统计
     */

    @GET('getFeedbackStatistics')
    getFeedbackStatistics(
        @Payload
        _req: {title?:string,feedbackTypeId?:number,feedbackSource?:string,userId?:number,startDate?:string,endDate?:string,isHandle?:boolean,ids?:any[],keyName?:string,searchText?:string,includeDeleted?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/Feedback/GetFeedTypeList
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
     * @param url /PUB/Feedback/GetList
     * 查询列表数据 分页
     */

    @GET('getList')
    getList(
        @Payload
        _req: {title?:string,feedbackTypeId?:number,feedbackSource?:string,userId?:number,startDate?:string,endDate?:string,isHandle?:boolean,ids?:any[],keyName?:string,searchText?:string,includeDeleted?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PUBListResultDto<PUBFeedbackDto>> {
        return null as any
    }


    /**
     * @param url /PUB/Feedback/HandleFeedback
     * 处理反馈
     */

    @POST('handleFeedback')
    handleFeedback(
        @Payload
        _req:PUBFeedbackInput

    ): Observable<any> {
        return null as any
    }



  }
