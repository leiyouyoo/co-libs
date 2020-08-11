import { Injectable, Injector } from '@angular/core';
import { BaseApi, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { Observable } from 'rxjs';
import { SsoEntityDto, SsoListResultDto } from './sso.types';

@BaseUrl('/sso/Caching')
@Injectable({ providedIn: 'root' })
export class SSOCachingService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * @param url /SSO/Caching/GetAllCaches
   *
   */

  @GET('getAllCaches')
  getAllCaches(
    @Payload
    _req: {},
  ): Observable<SsoListResultDto[]> {
    return null as any;
  }

  /**
   * @param url /SSO/Caching/ClearCache
   *
   */

  @POST('clearCache')
  clearCache(
    @Payload
    _req: SsoEntityDto[],
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/Caching/ClearAllCaches
   *
   */

  @POST('clearAllCaches')
  clearAllCaches(
    @Payload
    _req: {},
  ): Observable<any> {
    return null as any;
  }
}
