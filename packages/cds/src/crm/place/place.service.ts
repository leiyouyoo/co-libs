import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { EntityDto, ListResultDto, NameValueDto, PagedResultDto } from '@co/core';
import { PlaceDto } from './place.types';

@BaseUrl('/PUB/Place')
@Injectable({ providedIn: 'root' })
export class PlaceService extends BaseApi {
  // 获取区域（RegionIds）下的地址
  @GET('GetByRegionIds')
  GetByRegionIds(
    @Payload
    _req: {
      Name?: string;
      RegionIds?: Array<string>;
      IsOcean?: boolean;
      IsAir?: boolean;
      IsOther?: boolean;
      IsValid?: boolean;
      Sorting?: string;
      IsCity?: boolean;
      isPaged?: boolean;
      MaxResultCount?: number;
      SkipCount?: number;
    },
  ): Observable<PagedResultDto<PlaceDto>> {
    return null as any;
  }
  // 获取全部地址
  @GET('GetAll')
  GetAll(
    @Payload
    _req: {
      Name?: string;
      RegionId?: string;
      IsOcean?: boolean;
      IsAir?: boolean;
      IsOther?: boolean;
      IsValid?: boolean;
      Sorting?: string;
      IsCity?: boolean;
      MaxResultCount?: number;
      SkipCount?: number;
    },
  ): Observable<PagedResultDto<PlaceDto>> {
    return null as any;
  }
}
