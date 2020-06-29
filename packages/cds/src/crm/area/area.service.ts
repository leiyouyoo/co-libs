import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PagedResultDto } from '@co/core';
import { BaseApi, BaseUrl, GET, Payload } from '@co/common';

import { AreaDto } from './area.types';

@BaseUrl('/crm/Area')
@Injectable({ providedIn: 'root' })
export class AreaService extends BaseApi {
  @GET('GetAll')
  getAllBySearch(
    @Payload
      _req: {
      name?: string,
      isValid?: string,
    },
  ): Observable<PagedResultDto<AreaDto>> {
    return null as any;
  }
}
