import { Injectable } from '@angular/core';
import { BaseApi, BaseUrl, Payload, GET } from '@co/common';
import { Observable } from 'rxjs';
import { PagedResult } from '@co/core';
import { VesselDto } from '.';

// 船名服务
@BaseUrl('/shipname/shipname')
@Injectable({
  providedIn: 'root',
})
export class ShipnameService extends BaseApi {
  @GET('GetAllVessel')
  GetAllVessel(
    @Payload
    _req: {
      Code?: string;
      Name?: string;
      CarrierId?: string;
      IsValid?: boolean;
      maxResultCount?: number;
      skipCount?: number;
    },
  ): Observable<PagedResult<VesselDto>> {
    return null as any;
  }
}
