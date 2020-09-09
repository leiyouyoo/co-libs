import { Injectable, Injector } from '@angular/core';
import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { Observable } from 'rxjs';
import { SsoCreateAsyncTenantDto, SsoCreateTenantDto, SsoPagedResultDto, SsoTenantDto } from './sso.types';

@BaseUrl('/sso/Tenant')
@Injectable({ providedIn: 'root' })
export class v1TenantService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * @param url /SSO/Tenant/QueryTenantListById
   * 根据Id获取租户列表
   */

  @POST('queryTenantListById')
  queryTenantListById(
    @Payload
    _req: {},
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/Tenant/Create
   *
   */

  @POST('create')
  create(
    @Payload
    _req: SsoCreateTenantDto,
  ): Observable<SsoTenantDto> {
    return null as any;
  }

  /**
   * @param url /SSO/Tenant/Delete
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
   * @param url /SSO/Tenant/Get
   *
   */

  @GET('get')
  get(
    @Payload
    _req: {
      id?: number;
    },
  ): Observable<SsoTenantDto> {
    return null as any;
  }

  /**
   * @param url /SSO/Tenant/GetAll
   *
   */

  @GET('getAll')
  getAll(
    @Payload
    _req: {
      keyword?: string;
      isActive?: boolean;
      skipCount?: number;
      maxResultCount?: number;
    },
  ): Observable<SsoPagedResultDto[]> {
    return null as any;
  }

  /**
   * @param url /SSO/Tenant/Update
   *
   */

  @PUT('update')
  update(
    @Payload
    _req: SsoTenantDto,
  ): Observable<SsoTenantDto> {
    return null as any;
  }

  @POST('recover')
  recover(
    @Payload
      _req: { id: number },
  ): Observable<any> {
    return null as any;
  }

  @POST('cancel')
  cancel(
    @Payload
      _req: { id: number },
  ): Observable<any> {
    return null as any;
  }

  @POST('createAsync')
  createAsync(
    @Payload
      _req: SsoCreateAsyncTenantDto,
  ): Observable<Required<SsoCreateAsyncTenantDto>> {
    return null as any;
  }

  @PUT('updateAsync')
  updateAsync(
    @Payload
      _req: SsoCreateAsyncTenantDto,
  ): Observable<Required<SsoCreateAsyncTenantDto>> {
    return null as any;
  }

  @GET('getAsync')
  getAsync(
    @Payload
      _req: { id: number },
  ): Observable<Required<SsoCreateAsyncTenantDto>> {
    return null as any;
  }

  @GET('getAllAsync')
  getAllAsync(
    @Payload
      _req: { searchText: string, IsActive: boolean },
  ): Observable<{ items: Required<SsoCreateAsyncTenantDto>[] }> {
    return null as any;
  }

}
