import { Injectable } from '@angular/core';
import { BaseApi, BaseUrl, Payload, GET } from '@co/common';
import { Observable } from 'rxjs';
import { FlightDto } from './flight.type';
import { PagedResultDto } from '@co/core';

//航次服务
@BaseUrl('/PUB/Flight')
@Injectable({ providedIn: 'root' })
export class FlightService extends BaseApi {
  @GET('GetAll')
  GetAll(
    @Payload
    _req: {
      No?: string;
      AirlineId?: string;
      IsValid?: boolean;
      maxResultCount?: number;
      skipCount?: number;
    },
  ): Observable<PagedResultDto<FlightDto>> {
    return null as any;
  }
}
