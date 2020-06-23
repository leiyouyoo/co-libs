import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PagedResult } from '@co/core';
import { BaseUrl, BaseApi, GET, Payload } from '@co/common';

import { CustomerDto, CustomerType } from './customer.types';

/**
 * 客户服务
 */
@BaseUrl('/crm/customer')
@Injectable({ providedIn: 'root' })
export class CustomerService extends BaseApi {
  @GET('GetAllBySearch')
  getAllBySearch(
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
