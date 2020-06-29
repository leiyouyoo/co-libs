import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PagedResultDto } from '@co/core';
import { BaseApi, BaseUrl, POST, Payload } from '@co/common';

import { PortDto } from './port.types';

@BaseUrl('/crm/Place')
@Injectable({ providedIn: 'root' })
export class PortService extends BaseApi {
  @POST('GetByRegionIds')
  getAllBySearch(
    @Payload
      _req: {
      placeId?: string;
      name?: string;
      regionIds?: any[];
      isOcean?: boolean;
      isAir?: boolean;
      isAirOrOcean?:  boolean;
      isOther?:  boolean;
      isCity?:  boolean;
      isValid?:  boolean;
      isPaged?:  boolean;
      sorting?: string;
      maxResultCount?: number;
      skipCount?:  number;
    },
  ): Observable<PagedResultDto<PortDto>> {
    return null as any;
  }
}
