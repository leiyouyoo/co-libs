import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, GET, Payload } from '@co/common';
import { PagedResultDto } from '@co/core';

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
  ): Observable<PagedResultDto<ContainerDto>> {
    return null as any;
  }
}
