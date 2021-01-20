import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformGetNotificationsOutput,PlatformEntityDto1,PlatformGetNotificationSettingsOutput,PlatformUpdateNotificationSettingsInput,PlatformSendMessageModel } from './platform.types';

@BaseUrl('/Platform/Notification')
@Injectable({ providedIn: 'root' })
export class PlatformNotificationService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Notification/GetUserNotifications
     * 暂无备注
     */

    @GET('GetUserNotifications')
    getUserNotifications(
        @Payload
        _req: {dataTypeNameFilter?:string,state?:number,startDate?:string,endDate?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformGetNotificationsOutput> {
        return null as any
    }


    /**
     * @param url /Platform/Notification/SetAllNotificationsAsRead
     * 暂无备注
     */

    @POST('SetAllNotificationsAsRead')
    setAllNotificationsAsRead(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Notification/SetNotificationAsRead
     * 暂无备注
     */

    @POST('SetNotificationAsRead')
    setNotificationAsRead(
        @Payload
        _req:PlatformEntityDto1<any>

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Notification/GetNotificationSettings
     * 暂无备注
     */

    @GET('GetNotificationSettings')
    getNotificationSettings(
        @Payload
        _req: {tenantId?:number,userId?:number} 

    ): Observable<PlatformGetNotificationSettingsOutput> {
        return null as any
    }


    /**
     * @param url /Platform/Notification/UpdateNotificationSettings
     * 暂无备注
     */

    @POST('UpdateNotificationSettings')
    updateNotificationSettings(
        @Payload
        _req:PlatformUpdateNotificationSettingsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Notification/DeleteNotification
     * 暂无备注
     */

    @DELETE('DeleteNotification')
    deleteNotification(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Notification/DeleteAllUserNotifications
     * 暂无备注
     */

    @DELETE('DeleteAllUserNotifications')
    deleteAllUserNotifications(
        @Payload
        _req: {state?:number,startDate?:string,endDate?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Notification/SendMessage
     * 暂无备注
     */

    @POST('SendMessage')
    sendMessage(
        @Payload
        _req:PlatformSendMessageModel

    ): Observable<any> {
        return null as any
    }



  }
