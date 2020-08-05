import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformGetNotificationsOutput,PlatformEntityDto,PlatformGetNotificationSettingsOutput,PlatformUpdateNotificationSettingsInput,PlatformSendMessageModel, } from './platform.types';

@BaseUrl('/platform/Notification')
@Injectable({ providedIn: 'root' })
export class PlatformNotificationService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/Notification/GetUserNotifications
     * 
     */

    @GET('getUserNotifications')
    getUserNotifications(
        @Payload
        _req: {dataTypeNameFilter?:string,state?:number,startDate?:string,endDate?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformGetNotificationsOutput> {
        return null as any
    }


    /**
     * @param url /Platform/Notification/SetAllNotificationsAsRead
     * 
     */

    @POST('setAllNotificationsAsRead')
    setAllNotificationsAsRead(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Notification/SetNotificationAsRead
     * 
     */

    @POST('setNotificationAsRead')
    setNotificationAsRead(
        @Payload
        _req:PlatformEntityDto<any>

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Notification/GetNotificationSettings
     * 
     */

    @GET('getNotificationSettings')
    getNotificationSettings(
        @Payload
        _req: {tenantId?:number,userId?:number} 

    ): Observable<PlatformGetNotificationSettingsOutput> {
        return null as any
    }


    /**
     * @param url /Platform/Notification/UpdateNotificationSettings
     * 
     */

    @POST('updateNotificationSettings')
    updateNotificationSettings(
        @Payload
        _req:PlatformUpdateNotificationSettingsInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Notification/DeleteNotification
     * 
     */

    @DELETE('deleteNotification')
    deleteNotification(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Notification/DeleteAllUserNotifications
     * 
     */

    @DELETE('deleteAllUserNotifications')
    deleteAllUserNotifications(
        @Payload
        _req: {state?:number,startDate?:string,endDate?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/Notification/SendMessage
     * 
     */

    @POST('sendMessage')
    sendMessage(
        @Payload
        _req:PlatformSendMessageModel

    ): Observable<any> {
        return null as any
    }



  }
