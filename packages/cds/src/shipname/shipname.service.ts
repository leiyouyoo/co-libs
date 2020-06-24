import { Injectable } from '@angular/core';
import { BaseApi, BaseUrl, GET, Payload } from '@co/common';
import { PagedResultDto } from '@co/core';
import { Observable } from 'rxjs';
import { CustomerDto, CustomerType } from '../crm/public_api';

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
  ): Observable<PagedResultDto<CustomerDto>> {
    return null as any;
  }
}
