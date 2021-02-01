import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { v1#/definitions/ListResultDto[RoleListDto],v1#/definitions/RoleEditDto,v1#/definitions/GetRoleForEditOutput,v1#/definitions/CreateOrUpdateRoleInput,v1#/definitions/CheckedRepeatForRoleInput,v1#/definitions/EntityDto[Int32], } from './sso.types';

@BaseUrl('/SSO/Role')
@Injectable({ providedIn: 'root' })
export class v1RoleService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  
    /**
     * @param url /SSO/Role/GetAll
     * 
     */

    @GET('getAll')
    getAll(
        @Payload
        _req: {isValid?:boolean,id?:number,searchText?:string,permission?:string,isInside?:boolean} 

    ): Observable<v1#/definitions/ListResultDto[RoleListDto]> {
        return null as any
    }


    /**
     * @param url /SSO/Role/GetAllIncludeChildrenAsync
     * 获取所有角色（分层级）
     */

    @GET('getAllIncludeChildrenAsync')
    getAllIncludeChildrenAsync(
        @Payload
        _req: {} 

    ): Observable<v1#/definitions/ListResultDto[RoleListDto]> {
        return null as any
    }


    /**
     * @param url /SSO/Role/GetParentRoles
     * 获取父级（顶级）角色
     */

    @GET('getParentRoles')
    getParentRoles(
        @Payload
        _req: {parentId?:number,type?:number} 

    ): Observable<v1#/definitions/ListResultDto[RoleListDto]> {
        return null as any
    }


    /**
     * @param url /SSO/Role/GetParentOrChildrens
     * 获取父级或子级角色
     */

    @GET('getParentOrChildrens')
    getParentOrChildrens(
        @Payload
        _req: {parentId?:number,type?:number} 

    ): Observable<v1#/definitions/ListResultDto[RoleListDto]> {
        return null as any
    }


    /**
     * @param url /SSO/Role/GetById
     * 
     */

    @GET('getById')
    getById(
        @Payload
        _req: {id?:number} 

    ): Observable<v1#/definitions/RoleEditDto> {
        return null as any
    }


    /**
     * @param url /SSO/Role/Get
     * 
     */

    @GET('get')
    get(
        @Payload
        _req: {id?:number} 

    ): Observable<v1#/definitions/GetRoleForEditOutput> {
        return null as any
    }


    /**
     * @param url /SSO/Role/Delete
     * 
     */

    @DELETE('delete')
    delete(
        @Payload
        _req: {id?:number} 

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/Role/Update
     * 
     */

    @PUT('update')
    update(
        @Payload
        _req:v1#/definitions/CreateOrUpdateRoleInput

    ): Observable<v1#/definitions/RoleEditDto> {
        return null as any
    }


    /**
     * @param url /SSO/Role/Create
     * 
     */

    @POST('create')
    create(
        @Payload
        _req:v1#/definitions/CreateOrUpdateRoleInput

    ): Observable<v1#/definitions/RoleEditDto> {
        return null as any
    }


    /**
     * @param url /SSO/Role/CheckedRepeat
     * 同一父级下校验重复(角色验证英文名称,本地名称)
     */

    @POST('checkedRepeat')
    checkedRepeat(
        @Payload
        _req:v1#/definitions/CheckedRepeatForRoleInput

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/Role/Recover
     * 恢复角色
     */

    @POST('recover')
    recover(
        @Payload
        _req:v1#/definitions/EntityDto[Int32]

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/Role/CheckedIsExistsBindUser
     * 校验是否存在绑定关系
     */

    @POST('checkedIsExistsBindUser')
    checkedIsExistsBindUser(
        @Payload
        _req:v1#/definitions/EntityDto[Int32]

    ): Observable<any> {
        return null as any
    }


    /**
     * @param url /SSO/Role/Cancel
     * 作废角色
     */

    @POST('cancel')
    cancel(
        @Payload
        _req:v1#/definitions/EntityDto[Int32]

    ): Observable<any> {
        return null as any
    }



  }
