import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformFeedbackInput,PlatformFeedbackDto,PlatformQueryFeedbackInput,PlatformListResultDto1 } from './platform.types';

@BaseUrl('/Platform/Feedback')
@Injectable({ providedIn: 'root' })
export class PlatformFeedbackService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Feedback/CreateOrUpdate
     * 暂无备注
     */

    @POST('CreateOrUpdate')
    createOrUpdate(
        @Payload
        _req:PlatformFeedbackInput

    ): Observable<PlatformFeedbackDto> {
        return null as any
    }


    /**
     * @param url /Platform/Feedback/Get
     * 暂无备注
     */

    @GET('Get')
    get(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformFeedbackDto> {
        return null as any
    }


    /**
     * @param url /Platform/Feedback/QueryFeedbackStatisticsOnSoucre
     * 暂无备注
     */

    @POST('QueryFeedbackStatisticsOnSoucre')
    queryFeedbackStatisticsOnSoucre(
        @Payload
        _req:PlatformQueryFeedbackInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Feedback/QueryFeedbackStatistics
     * 暂无备注
     */

    @POST('QueryFeedbackStatistics')
    queryFeedbackStatistics(
        @Payload
        _req:PlatformQueryFeedbackInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Feedback/GetFeedTypeList
     * 暂无备注
     */

    @GET('GetFeedTypeList')
    getFeedTypeList(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Feedback/QueryList
     * 暂无备注
     */

    @POST('QueryList')
    queryList(
        @Payload
        _req:PlatformQueryFeedbackInput

    ): Observable<PlatformListResultDto1<PlatformFeedbackDto>> {
        return null as any
    }


    /**
     * @param url /Platform/Feedback/HandleFeedback
     * 暂无备注
     */

    @POST('HandleFeedback')
    handleFeedback(
        @Payload
        _req:PlatformFeedbackInput

    ): Observable<any> {
        return null as any
    }



  }
