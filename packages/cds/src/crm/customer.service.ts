import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseUrl, POST, BaseHeaders, Payload } from '@co/common';
import { PagedResultDto } from '@co/core';
import { CustomerDto, CustomerType } from './public_api';

/**
 * 客户服务
 */
// @BaseUrl('http://192.168.1.5:8002/CRM/Customer')
@BaseUrl('CRM/Customer')
@Injectable({ providedIn: 'root' })
// @BaseHeaders({ Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZDg1MzI1MGYxYWY0ZjE4ODBmZTBjOTRkZWNjNTRjIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1OTQwMzk0MzQsImV4cCI6MTU5NDA0MzAzNCwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMS41OjgwMDEvIiwiYXVkIjpbImh0dHA6Ly8xOTIuMTY4LjEuNTo4MDAxL3Jlc291cmNlcyIsImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiXSwiY2xpZW50X2lkIjoiY2l0eU9jZWFuIiwic3ViIjoiMTU4NSIsImF1dGhfdGltZSI6MTU5NDAzOTQzNCwiaWRwIjoibG9jYWwiLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50SWQiOiIxIiwicm9sZSI6IjQsMyIsInJvbGVfbmFtZXMiOiJTdGFmZixDb21tZXJjaWFsQXR0YWNoIiwidGVuYW5jeV9uYW1lIjoiQ2l0eSBPY2VhbiIsIm5hbWUiOiJTYXJhZnUiLCJzdXJfbmFtZSI6IiIsInBsYXRmb3JtIjoiIiwicGFyZW50X3VzZXJpZCI6IiIsImNyZWF0b3JfdXNlcklkIjoiIiwiYXV0aG9yaXphdGlvbl90eXBlIjoiSW50ZXJuYWwiLCJjdXN0b21lcl9pZCI6ImIyZTMwNTEyLTg5OGMtZTcxMS04MGMxLTE0MTg3NzQ0MjE0MSIsInNjb3BlIjpbImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.MTXK5YAHFSOJlPcnGjfzRNy_TooW6vMbXKchxaYUVvlHWB5pZnKIW_t4NsqXvT0cnTo5IxgADIIrYXo4PKyW5WCrNgiAXrLSd6o92QyGsQUA8LUywrRLj8pRNJEs0GZ3dH__cKHSEhdXEiPM7T6uXPcOy8uQPRcscqIXBZSyfjagGq2-eb2vzW_gwAtPB-3l4O98c3_wKzXTcy-waUUOVWOL0YM_8GVZrRHYouBoW82ouY6gk7MSdH-2yheaSx76CifQwAYROH70F0jF1W_WsvU1gHQvo95Ss3xtA2xQgVNlAmDoG9SXhAL0rHtxukVhDpf8l0Bd8kwkO9OvRa26WQ' })
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
