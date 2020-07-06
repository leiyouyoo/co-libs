import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, GET, Payload } from '@co/common';
import { PagedResultDto } from '@co/core';
import { CustomerDto, CustomerType } from './public_api';

/**
 * 客户服务
 */
@BaseUrl('/CRM/Customer')
@Injectable({ providedIn: 'root' })
export class CustomerService extends BaseApi {
  @GET('GetAllForUiPicker')
  getAllBySearch(
    @Payload
    _req: {
      ids?: string[];
      searchText?: string;
      includeDeleted?: boolean;
      sorting?: string;
      maxResultCount?: number;
      skipCount?: number;
    },
  ): Observable<PagedResultDto<CustomerDto>> {
    return null as any;
  }
}
