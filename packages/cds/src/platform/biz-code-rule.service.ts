import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformPagedResultDto1,PlatformUserInfo,PlatformBizCodeRuleTemplateDto,PlatformCreateOrUpdateTemplateInput } from './platform.types';

@BaseUrl('/Platform/BizCodeRule')
@Injectable({ providedIn: 'root' })
export class PlatformBizCodeRuleService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/BizCodeRule/TestImpersonationAuthorize
     * 暂无备注
     */

    @POST('TestImpersonationAuthorize')
    testImpersonationAuthorize(
        @Payload
        _req: {} 

    ): Observable<PlatformPagedResultDto1<PlatformUserInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/BizCodeRule/GetTemplate
     * 暂无备注
     */

    @GET('GetTemplate')
    getTemplate(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformBizCodeRuleTemplateDto> {
        return null as any
    }


    /**
     * @param url /Platform/BizCodeRule/DeleteTemplate
     * 暂无备注
     */

    @DELETE('DeleteTemplate')
    deleteTemplate(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/BizCodeRule/CreateTemplate
     * 暂无备注
     */

    @POST('CreateTemplate')
    createTemplate(
        @Payload
        _req:PlatformCreateOrUpdateTemplateInput

    ): Observable<PlatformBizCodeRuleTemplateDto> {
        return null as any
    }


    /**
     * @param url /Platform/BizCodeRule/UpdateTemplate
     * 暂无备注
     */

    @PUT('UpdateTemplate')
    updateTemplate(
        @Payload
        _req:PlatformCreateOrUpdateTemplateInput

    ): Observable<PlatformBizCodeRuleTemplateDto> {
        return null as any
    }


    /**
     * @param url /Platform/BizCodeRule/GetAllTemplateList
     * 暂无备注
     */

    @GET('GetAllTemplateList')
    getAllTemplateList(
        @Payload
        _req: {groupId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto1<PlatformBizCodeRuleTemplateDto>> {
        return null as any
    }



  }
