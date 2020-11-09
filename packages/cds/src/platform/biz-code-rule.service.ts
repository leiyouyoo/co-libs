import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { PlatformUserInfo,PlatformPagedResultDto,PlatformBizCodeRuleTemplateDto,PlatformCreateOrUpdateTemplateInput, } from './platform.types';

@BaseUrl('/platform/BizCodeRule')
@Injectable({ providedIn: 'root' })
export class PlatformBizCodeRuleService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /Platform/BizCodeRule/TestImpersonationAuthorize
     * 测试模拟匿名账户
     */

    @POST('testImpersonationAuthorize')
    testImpersonationAuthorize(
        @Payload
        _req: {} 

    ): Observable<PlatformPagedResultDto<PlatformUserInfo>> {
        return null as any
    }


    /**
     * @param url /Platform/BizCodeRule/GetTemplate
     * 
     */

    @GET('getTemplate')
    getTemplate(
        @Payload
        _req: {id?:string} 

    ): Observable<PlatformBizCodeRuleTemplateDto> {
        return null as any
    }


    /**
     * @param url /Platform/BizCodeRule/DeleteTemplate
     * 
     */

    @DELETE('deleteTemplate')
    deleteTemplate(
        @Payload
        _req: {id?:string} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /Platform/BizCodeRule/CreateTemplate
     * 
     */

    @POST('createTemplate')
    createTemplate(
        @Payload
        _req:PlatformCreateOrUpdateTemplateInput

    ): Observable<PlatformBizCodeRuleTemplateDto> {
        return null as any
    }


    /**
     * @param url /Platform/BizCodeRule/UpdateTemplate
     * 
     */

    @PUT('updateTemplate')
    updateTemplate(
        @Payload
        _req:PlatformCreateOrUpdateTemplateInput

    ): Observable<PlatformBizCodeRuleTemplateDto> {
        return null as any
    }


    /**
     * @param url /Platform/BizCodeRule/GetAllTemplateList
     * 
     */

    @GET('getAllTemplateList')
    getAllTemplateList(
        @Payload
        _req: {groupId?:string,sorting?:string,maxResultCount?:number,skipCount?:number} 

    ): Observable<PlatformPagedResultDto<PlatformBizCodeRuleTemplateDto>> {
        return null as any
    }



  }
