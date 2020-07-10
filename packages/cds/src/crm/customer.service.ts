import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, POST, BaseHeaders, Payload } from '@co/common';
import { PagedResultDto } from '@co/core';
import { CustomerDto, CustomerSearchScope } from './public_api';

/**
 * 客户服务
 */
// @BaseUrl('http://192.168.1.5:8002/CRM/Customer')
@BaseUrl('/CRM/Customer')
@Injectable({ providedIn: 'root' })
// @BaseHeaders({ Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZDg1MzI1MGYxYWY0ZjE4ODBmZTBjOTRkZWNjNTRjIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1OTQzNDcxMDQsImV4cCI6MTU5NDM1MDcwNCwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMS41OjgwMDEvIiwiYXVkIjpbImh0dHA6Ly8xOTIuMTY4LjEuNTo4MDAxL3Jlc291cmNlcyIsImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiXSwiY2xpZW50X2lkIjoiY2l0eU9jZWFuIiwic3ViIjoiMjY3NyIsImF1dGhfdGltZSI6MTU5NDMwMDgyMSwiaWRwIjoibG9jYWwiLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50SWQiOiIxIiwicm9sZSI6IjEwIiwicm9sZV9uYW1lcyI6IkJpbGxpbmciLCJ0ZW5hbmN5X25hbWUiOiJDaXR5IE9jZWFuIiwibmFtZSI6IuWxseWnhue9lyIsInN1cl9uYW1lIjoiUlIiLCJwbGF0Zm9ybSI6IiIsInBhcmVudF91c2VyaWQiOiIiLCJjcmVhdG9yX3VzZXJJZCI6IiIsImF1dGhvcml6YXRpb25fdHlwZSI6IkV4dGVybmFsIiwiY3VzdG9tZXJfaWQiOiIzNWMyNmI0NS1mNDA4LTRlYzEtYjNhMC1hODAxMWExNTQxNTgiLCJzY29wZSI6WyJpZHM0LWFwaSIsIlBsYXRmb3JtQXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.KMre2stB92-l_Y_t-lY8k7ZSzEOAp6iwydYV2z6U_ampLwg7bqXyxNYMcCv2Nh_FFqZSJSQlNzAh4w43BMWCSM5BQW7VcUicjVTShS1atg7Hu2dnfU4frW0inJCsN6jMTlZSEToit4rivET2Zq8yJdgnbs3dfwsg5ODrkterrM9hRmaKrZ30EknEC04ITbTpOKYiy59nPkCrA79z6_-M7cYwWiFEmZ9Cn0wJR-AO2NcL6b6jjfoB3fQ6OsnYGkDDkaqUj2_HZVbwvii0vI3r80TMMRM6wgJ9rdPzlGLJvbFpmCpFumBAaaVdPqDRMOUBJUkL8gh1wH7z28rLiZK8iw' })
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
      scope?: CustomerSearchScope,
      maxResultCount?: number;
      skipCount?: number;
    },
  ): Observable<PagedResultDto<CustomerDto>> {
    return null as any;
  }
}
