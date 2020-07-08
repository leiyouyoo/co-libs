import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, POST, BaseHeaders, Payload } from '@co/common';
import { PagedResultDto } from '@co/core';
import { CustomerDto, CustomerType } from './public_api';

/**
 * 客户服务
 */
@BaseUrl('http://192.168.1.5:8002/CRM/Customer')
@BaseUrl('CRM/Customer')
@Injectable({ providedIn: 'root' })
@BaseHeaders({ Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZDg1MzI1MGYxYWY0ZjE4ODBmZTBjOTRkZWNjNTRjIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1OTQxNzQ5OTgsImV4cCI6MTU5NDE3ODU5OCwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMS41OjgwMDEvIiwiYXVkIjpbImh0dHA6Ly8xOTIuMTY4LjEuNTo4MDAxL3Jlc291cmNlcyIsImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiXSwiY2xpZW50X2lkIjoiY2l0eU9jZWFuIiwic3ViIjoiMTE5OCIsImF1dGhfdGltZSI6MTU5NDE3NDk5OCwiaWRwIjoibG9jYWwiLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50SWQiOiIxIiwicm9sZSI6IjQsMiIsInJvbGVfbmFtZXMiOiJTdGFmZixTYWxlcyIsInRlbmFuY3lfbmFtZSI6IkNpdHkgT2NlYW4iLCJuYW1lIjoiREFWSUQiLCJzdXJfbmFtZSI6IiIsInBsYXRmb3JtIjoiIiwicGFyZW50X3VzZXJpZCI6IiIsImNyZWF0b3JfdXNlcklkIjoiIiwiYXV0aG9yaXphdGlvbl90eXBlIjoiSW50ZXJuYWwiLCJjdXN0b21lcl9pZCI6IjUxZDkwN2UyLWE5YzItNGVhMi05NzU5LWJiNmVhZmMzOThiZSIsInNjb3BlIjpbImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.eL-yIz129GjhbIziPiKQrof-r4uPn8slGiy0KwwFHm7CL5VXFUebdf-cjXA7SAdLdi7WiTYtgRcaN-EExMPJEk6LMUgCm7a3a0qXhXA3f3QFu7EBUvn7bcuVx5MSdQYByvIvrvSU1s544pgJLL9PhMfhySP6Ls9aV9obScS8pGwPQS1-3Gc92by4cvyEEjuCbNFC2ynHgYhfZQ8QXHKJXdaIlrc3IC1rMvh1OMD_JnL274ds7kgch2ojhClaGy-L1ByM4DWjA03FSCxN-zY9tLXq-cbQboYKspUrdhCo7AuEe8A05L6XXVlVIXdNl16veJiTQ_3jP3Y9ocGGgZMkMA' })
export class CustomerService extends BaseApi {
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
}
