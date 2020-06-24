import { Injectable } from '@angular/core';
import { BaseApi, BaseUrl, Payload, GET } from '@co/common';
import { Observable } from 'rxjs';
import { PagedResult } from '@co/core';
import { VoyageDto } from './voyage.type';

//航次服务
@BaseUrl('/PUB/Voyage')
@Injectable({ providedIn: 'root' })
export class VoyageService extends BaseApi {
  @GET('GetAll')
  GetAll(
    @Payload
    _req: {
      No?: string;
      VesselId?: string;
      IsValid?: boolean;
      maxResultCount?: number;
      skipCount?: number;
    },
  ): Observable<PagedResult<VoyageDto>> {
    return null as any;
  }
}
