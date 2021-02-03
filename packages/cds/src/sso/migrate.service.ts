import { Injectable, Injector } from '@angular/core';
import { BaseApi, BaseUrl, GET, Payload, POST, PUT } from '@co/common';
import { Observable } from 'rxjs';
import {} from './sso.types';

@BaseUrl('/sso/Migrate')
@Injectable({ providedIn: 'root' })
export class SSOMigrateService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * @param url /SSO/Migrate/SyncUser
   * 同步用户数据
   */

  @POST('syncUser')
  syncUser(
    @Payload
    _req: {},
  ): Observable<any> {
    return null as any;
  }

  /**
   * @param url /SSO/Migrate/DecryptUser
   *
   */

  @POST('decryptUser')
  decryptUser(
    @Payload
    _req: {
      userName?: string;
    },
  ): Observable<any> {
    return null as any;
  }
}
