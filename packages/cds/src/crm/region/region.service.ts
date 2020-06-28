import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PagedResult } from '@co/core';
import { BaseApi, BaseUrl, POST, Payload } from '@co/common';

import { RegionDto } from './region.types';

@BaseUrl('/crm/Region')
@Injectable({ providedIn: 'root' })
export class RegionService extends BaseApi {
  @POST('GetByAreaIds')
  getAllBySearch(
    @Payload
      _req: {
      ids?: any[],
      isDeleted?: boolean,
      maxResultCount?: number,
      skipCount?: number,
      areaIds?: any[],
      recursive?: string,
    },
  ): Observable<PagedResult<RegionDto>> {
    return null as any;
  }
}
