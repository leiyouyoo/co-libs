import { Injectable } from '@angular/core';
import { BaseApi, BaseUrl, Payload, GET } from '@co/common';
import { Observable } from 'rxjs';
import { PagedResult } from '@co/core';
import { CustomerType, CustomerDto } from '../crm/public_api';

// 船名服务
@BaseUrl('/shipname/shipname')
@Injectable({
  providedIn: 'root',
})
export class ShipnameService extends BaseApi {
  @GET('GetCustomerByType')
  GetCustomerByType(
    @Payload
    _req: {
      ids?: string[];
      searchText?: string;
      isDeleted?: boolean;
      type?: CustomerType;
      maxResultCount?: number;
      skipCount?: number;
    },
  ): Observable<PagedResult<CustomerDto>> {
    return null as any;
  }
}
