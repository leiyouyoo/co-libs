import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, POST, BaseHeaders, Payload } from '@co/common';
import { PagedResultDto } from '@co/core';
import { CustomerDto, CustomerSearchScope } from './public_api';

/**
 * 客户服务
 */
@BaseUrl('http://192.168.1.5:8002/CRM/Customer')
@BaseUrl('/CRM/Customer')
@Injectable({ providedIn: 'root' })
@BaseHeaders({ Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZDg1MzI1MGYxYWY0ZjE4ODBmZTBjOTRkZWNjNTRjIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1OTQxODc0OTIsImV4cCI6MTU5NDE5MTA5MiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMS41OjgwMDEvIiwiYXVkIjpbImh0dHA6Ly8xOTIuMTY4LjEuNTo4MDAxL3Jlc291cmNlcyIsImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiXSwiY2xpZW50X2lkIjoiY2l0eU9jZWFuIiwic3ViIjoiMTE5OCIsImF1dGhfdGltZSI6MTU5NDE4NzQ5MiwiaWRwIjoibG9jYWwiLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50SWQiOiIxIiwicm9sZSI6IjQsMiIsInJvbGVfbmFtZXMiOiJTdGFmZixTYWxlcyIsInRlbmFuY3lfbmFtZSI6IkNpdHkgT2NlYW4iLCJuYW1lIjoiREFWSUQiLCJzdXJfbmFtZSI6IiIsInBsYXRmb3JtIjoiIiwicGFyZW50X3VzZXJpZCI6IiIsImNyZWF0b3JfdXNlcklkIjoiIiwiYXV0aG9yaXphdGlvbl90eXBlIjoiSW50ZXJuYWwiLCJjdXN0b21lcl9pZCI6IjUxZDkwN2UyLWE5YzItNGVhMi05NzU5LWJiNmVhZmMzOThiZSIsInNjb3BlIjpbImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.FABhBPy-X99Zqj5fyXMDlVqx3kO9sWN6V7CQz-SB0RHJdn6K2ohvwATZO2yUm7f2GuNso7SRgeieTn-CsfkIE2whk-UnIhpJzkZrAork0kzZ8B6gS6JTQHQirKVMOeCeowI24J_fnzbKOBgw_0WHYnz64QkPUx1CZK_u-uxUmSOMqzA-JyzUBwMAV7rls_FdSIGbYc-u0XjvRrAJIJyGtb0GcIKsI-u1G7c1siybfIpYBCa6biv0Rg7eNM646WJ2ETkulLl_8uzwE8ulKIR5yto84LkXPXLNppe_sFIqtfv4RGKaGTy-_Jww11wZqVKI6_v3IY8USdro6mLNnF1Lhg' })
export class CustomerService extends BaseApi {
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
