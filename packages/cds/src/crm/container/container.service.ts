import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PagedResult } from '@co/core';
import { BaseApi, BaseUrl, GET, Payload } from '@co/common';

import { ContainerDto } from './container.types';

@BaseUrl('/PUB/Container')
@Injectable({ providedIn: 'root' })
export class ContainerService extends BaseApi {
  @GET('GetAll')
  getAll(
    @Payload
      _req: {
      ids?: string[];
      searchText?: string;
      IsValid?: boolean;
      type?: ContainerDto;
      maxResultCount?: number;
      skipCount?: number;
    },
  ): Observable<PagedResult<ContainerDto>> {
    return null as any;
  }
}
