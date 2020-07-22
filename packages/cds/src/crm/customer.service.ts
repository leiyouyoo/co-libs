import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { PagedResultDto } from '@co/core';
// tslint:disable-next-line: ordered-imports
import { BaseUrl, BaseApi, POST, Payload, GET } from '@co/common';

import { CustomerDto, CustomerType, SearchCustomerOutput } from './customer.types';

/**
 * 客户服务
 */
@BaseUrl('/crm/customer')
@Injectable({ providedIn: 'root' })
export class CustomerService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }

  @POST('GetAllForUiPicker')
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

  /**
   * url /CRM/Customer/GetForwardingCompanies
   * 分页搜索同行客户
   */
  @GET('getForwardingCompanies')
  getForwardingCompanies(
    @Payload
      _req: {searchText?:string,includeDefault?:boolean,sorting?:string,maxResultCount?:number,skipCount?:number}

  ): Observable<PagedResultDto<SearchCustomerOutput>> {
    return null as any
  }
}
