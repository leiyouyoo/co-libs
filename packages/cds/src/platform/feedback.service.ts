import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformFeedbackInput,PlatformFeedbackDto,PlatformListResultDto, } from './platform.types';

@BaseUrl('/platform/Feedback')
@Injectable({ providedIn: 'root' })
export class PlatformFeedbackService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Feedback/CreateOrUpdate
     * 
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
     * 
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformFeedbackDto> {
        return null as any
    }


    /**
     * @param url /Platform/Feedback/GetFeedbackStatistics
     * 
     */

    @GET('getFeedbackStatistics')
    getFeedbackStatistics(
        @Payload
        _req: {title?:string,feedbackTypeId?:number,feedbackSource?:string,userId?:number,startDate?:string,endDate?:string,isHandle?:boolean,ids?:any[],keyName?:string,searchText?:string,includeDeleted?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Feedback/GetFeedTypeList
     * 
     */

    @GET('getFeedTypeList')
    getFeedTypeList(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Feedback/GetList
     * 
     */

    @GET('getList')
    getList(
        @Payload
        _req: {title?:string,feedbackTypeId?:number,feedbackSource?:string,userId?:number,startDate?:string,endDate?:string,isHandle?:boolean,ids?:any[],keyName?:string,searchText?:string,includeDeleted?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformListResultDto<PlatformFeedbackDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Feedback/HandleFeedback
     * 
     */

    @POST('handleFeedback')
    handleFeedback(
        @Payload
        _req:PlatformFeedbackInput

    ): Observable<any> {
        return null as any
    }



  }
