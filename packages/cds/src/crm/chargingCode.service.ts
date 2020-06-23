import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PagedResult } from '@co/core';
import { BaseUrl, BaseApi, GET, Payload } from '@co/common';

import { ChargingCodeDto } from './chargingCode.type';

/**
 * 客户服务
 */
@BaseUrl('/crm/chargingCode')
@Injectable({ providedIn: 'root' })
export class ChargingCodeService extends BaseApi {
  @GET('GetAll')
  getAllBySearch(
    @Payload
      _req: {},
  ): Observable<PagedResult<ChargingCodeDto>> {
    return null as any;
  }
}
