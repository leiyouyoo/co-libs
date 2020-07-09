import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseHeaders, BaseUrl, Payload, POST } from '@co/common';

@BaseUrl('http://192.168.1.5:8000/CSP/Billing')
@BaseUrl('CSP/Billing')
@Injectable({ providedIn: 'root' })
// @BaseHeaders({ Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZDg1MzI1MGYxYWY0ZjE4ODBmZTBjOTRkZWNjNTRjIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1OTQxMTAxNTEsImV4cCI6MTU5NDExMzc1MSwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMS41OjgwMDEvIiwiYXVkIjpbImh0dHA6Ly8xOTIuMTY4LjEuNTo4MDAxL3Jlc291cmNlcyIsImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiXSwiY2xpZW50X2lkIjoiY2l0eU9jZWFuIiwic3ViIjoiMjY3NyIsImF1dGhfdGltZSI6MTU5NDExMDE1MSwiaWRwIjoibG9jYWwiLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50SWQiOiIxIiwicm9sZSI6IjEwIiwicm9sZV9uYW1lcyI6IkJpbGxpbmciLCJ0ZW5hbmN5X25hbWUiOiJDaXR5IE9jZWFuIiwibmFtZSI6IuWxseWnhue9lyIsInN1cl9uYW1lIjoiUlIiLCJwbGF0Zm9ybSI6IiIsInBhcmVudF91c2VyaWQiOiIiLCJjcmVhdG9yX3VzZXJJZCI6IiIsImF1dGhvcml6YXRpb25fdHlwZSI6IkV4dGVybmFsIiwiY3VzdG9tZXJfaWQiOiIzNWMyNmI0NS1mNDA4LTRlYzEtYjNhMC1hODAxMWExNTQxNTgiLCJzY29wZSI6WyJpZHM0LWFwaSIsIlBsYXRmb3JtQXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.SY-3vJ52V8aIZz60lDT7omdKsGJajPZHLZJtLrbR9YFAla3xR1kQ80KkbtJOumkiEZtrHo9SZCRxZSbdxT4_3Z19AwTkc0MIesBW0O4AHCM9F4vOB9knXvH_Ik8wpuEjEZkZS9h4ilQ7l09cIt-O6SVKck8dHYX9LV1KppfhS-Gt6Ou1i7VfrIBgN5wHzKNmMqO-mCS0p7arKXs0B7zh2UZtCYNnAhJQd8BCQxMoH2HJPdsqZjunygcWHZxfgVrRtxK6vHlh6q4Ee2sqHkmJUW-zpsqOWAQ517rJo7J3WYBuf7lxC-skIwxjAxF0u3Vq4GG2fiOr54UxvHnfnsjrmw\n' })
export class BillingService extends BaseApi {
  @POST('ExportBill')
  ExportBill(
    @Payload
      _req: {
      id: string;
    },
  ): Observable<any> {
    return null as any;
  }
}
