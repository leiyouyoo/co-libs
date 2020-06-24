import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, DELETE, GET, Payload, POST, PUT } from '@co/common';
import { EntityDto, ListResultDto, NameValueDto, PagedResultDto } from '@co/core';

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
