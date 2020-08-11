import { Injectable, Injector } from '@angular/core';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { Observable } from 'rxjs';
import { SsoCreateOrUpdateRoleInput, SsoGetRoleForEditOutput, SsoListResultDto, SsoRoleEditDto } from './sso.types';

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
      permission?: string;
    },
  ): Observable<SsoListResultDto[]> {
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
  ): Observable<SsoListResultDto[]> {
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
  ): Observable<SsoListResultDto[]> {
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
  ): Observable<SsoRoleEditDto> {
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
  ): Observable<SsoGetRoleForEditOutput> {
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
    _req: SsoCreateOrUpdateRoleInput,
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
    _req: SsoCreateOrUpdateRoleInput,
  ): Observable<any> {
    return null as any;
  }
}
