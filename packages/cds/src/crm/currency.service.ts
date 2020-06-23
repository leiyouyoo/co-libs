import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PagedResult } from '@co/core';
import { BaseUrl, BaseApi, GET, Payload } from '@co/common';

import { CurrencyDto } from './currency.type';

/**
 * 客户服务
 */
@BaseUrl('/crm/Currency')
@Injectable({ providedIn: 'root' })
export class CurrencyService extends BaseApi {
  @GET('GetAll')
  getAllBySearch(
    @Payload
    _req: {
      Code?: string;
      Name?: string;
      RegionId?: string;
      IsValid?: boolean;
      Sorting?: string;
      MaxResultCount?: number;
      SkipCount?: number;
    },
  ): Observable<PagedResult<CurrencyDto>> {
    return null as any;
  }
}
