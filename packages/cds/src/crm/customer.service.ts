import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { PagedResultDto } from '@co/core';
// tslint:disable-next-line: ordered-imports
import { BaseUrl, BaseApi, GET, Payload } from '@co/common';

import { CustomerDto, CustomerType } from './customer.types';

/**
 * 客户服务
 */
@BaseUrl('/crm/customer')
@Injectable({ providedIn: 'root' })
export class CustomerService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

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
