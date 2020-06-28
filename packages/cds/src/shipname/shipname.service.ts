import { Injectable } from '@angular/core';
import { BaseApi, BaseUrl, GET, Payload } from '@co/common';
import { PagedResultDto } from '@co/core';
import { Observable } from 'rxjs';
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
  ): Observable<PagedResultDto<VesselDto>> {
    return null as any;
  }
}
