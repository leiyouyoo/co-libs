import { Injectable, Injector } from '@angular/core';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { Observable } from 'rxjs';
import { ListResultDto, RoleListDto } from './sso.types';

@BaseUrl('/sso/Role')
@Injectable({ providedIn: 'root' })
export class SSORoleService extends BaseApi {
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
    _req: {
      isValid?: boolean;
      searchText?: string;
      permission?: string;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/Role/GetAllIncludeChildrenAsync
   *
   */

  @GET('GetAllIncludeChildrenAsync')
  getAllIncludeChildrenAsync(
    @Payload
    _req: {},
  ): Observable<ListResultDto<RoleListDto>> {
    return null as any;
  }

  /**
   * @param url /SSO/Role/GetParentRoles
   * 获取父级（顶级）角色
   */

  @GET('getParentRoles')
  getParentRoles(
    @Payload
    _req: {
      parentId?: number;
      type?: number;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/Role/GetParentOrChildrens
   * 获取父级或子级角色
   */

  @GET('getParentOrChildrens')
  getParentOrChildrens(
    @Payload
    _req: {
      parentId?: number;
      type?: number;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/Role/GetById
   *
   */

  @GET('getById')
  getById(
    @Payload
    _req: {
      id?: number;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/Role/Get
   *
   */

  @GET('get')
  get(
    @Payload
    _req: {
      id?: number;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/Role/Delete
   *
   */

  @DELETE('delete')
  delete(
    @Payload
    _req: {
      id?: number;
    },
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/Role/Update
   *
   */

  @PUT('update')
  update(
    @Payload
    _req: any,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/Role/Create
   *
   */

  @POST('create')
  create(
    @Payload
    _req: any,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/Role/CheckedRepeat
   * 校验重复(角色验证英文名称,本地名称)
   */

  @POST('checkedRepeat')
  checkedRepeat(
    @Payload
    _req: any,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/Role/Recover
   * 恢复角色
   */

  @POST('recover')
  recover(
    @Payload
    _req: any,
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/Role/Cancel
   * 作废角色
   */

  @POST('cancel')
  cancel(
    @Payload
    _req: any,
  ): Observable<any> {
    return null as any;
  }
}
