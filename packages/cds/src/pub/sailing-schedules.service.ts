import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PUBSailingSchedulesInput,PUBSailingSchedulesDto,PUBPagedResultDto,PUBGetByVoyageDto,PUBSailingSchedulesDetailDto, } from './pub.types';

@BaseUrl('/pub/SailingSchedules')
@Injectable({ providedIn: 'root' })
export class PUBSailingSchedulesService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /PUB/SailingSchedules/SynchroVesselVoyageToICP3
     * 同步船，航次到ICP3
     */

    @POST('synchroVesselVoyageToICP3')
    synchroVesselVoyageToICP3(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/SailingSchedules/QueryShippingETA
     * 查询船期ETA
     */

    @POST('queryShippingETA')
    queryShippingETA(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/SailingSchedules/DownLoadInttraSailingScheduleDetail
     * 从inttra Api下载船期数据
     */

    @POST('downLoadInttraSailingScheduleDetail')
    downLoadInttraSailingScheduleDetail(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/SailingSchedules/SaveSchedulesXmlToDataBase
     * 将Xml从Ftp服务获取下来再保存数据库
     */

    @POST('saveSchedulesXmlToDataBase')
    saveSchedulesXmlToDataBase(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/SailingSchedules/DeleteSchedule
     * 删除超过15天的文件
     */

    @DELETE('deleteSchedule')
    deleteSchedule(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/SailingSchedules/DeleteOldSchedule
     * 删除旧的船期数据
     */

    @DELETE('deleteOldSchedule')
    deleteOldSchedule(
        @Payload
        _req: {} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /PUB/SailingSchedules/QuerySailingSchedules
     * 查询船期数据
     */

    @POST('querySailingSchedules')
    querySailingSchedules(
        @Payload
        _req:PUBSailingSchedulesInput

    ): Observable<PUBPagedResultDto<PUBSailingSchedulesDto>> {
        return null as any
    }


    /**
     * @param url /PUB/SailingSchedules/GetByVoyage
     * 根据船名航次获取ETD
     */

    @GET('getByVoyage')
    getByVoyage(
        @Payload
        _req: {vesselName?:string,voyageNo?:string,carrierId?:string,polId?:string,podId?:string} 

    ): Observable<PUBGetByVoyageDto> {
        return null as any
    }


    /**
     * @param url /PUB/SailingSchedules/QuerySailingSchedulesDetail
     * 查询船期数据
     */

    @POST('querySailingSchedulesDetail')
    querySailingSchedulesDetail(
        @Payload
        _req:PUBSailingSchedulesInput

    ): Observable<PUBPagedResultDto<PUBSailingSchedulesDetailDto>> {
        return null as any
    }



  }
