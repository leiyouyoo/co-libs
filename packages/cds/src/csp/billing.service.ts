import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseHeaders, BaseUrl, Payload, POST } from '@co/common';

@BaseUrl('http://192.168.1.5:8000/CSP/Billing')
@BaseUrl('CSP/Billing')
@Injectable({ providedIn: 'root' })
//@BaseHeaders({ Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZDg1MzI1MGYxYWY0ZjE4ODBmZTBjOTRkZWNjNTRjIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1OTQzNDUwMjMsImV4cCI6MTU5NDM0ODYyMywiaXNzIjoiaHR0cDovLzE5Mi4xNjguMS41OjgwMDEvIiwiYXVkIjpbImh0dHA6Ly8xOTIuMTY4LjEuNTo4MDAxL3Jlc291cmNlcyIsImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiXSwiY2xpZW50X2lkIjoiY2l0eU9jZWFuIiwic3ViIjoiMjY3NSIsImF1dGhfdGltZSI6MTU5NDI1OTU1OCwiaWRwIjoibG9jYWwiLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50SWQiOiIxIiwicm9sZSI6IjUiLCJyb2xlX25hbWVzIjoiU2hpcHBlciIsInRlbmFuY3lfbmFtZSI6IkNpdHkgT2NlYW4iLCJuYW1lIjoibWFpblRlc3QiLCJzdXJfbmFtZSI6IiIsInBsYXRmb3JtIjoiIiwicGFyZW50X3VzZXJpZCI6IiIsImNyZWF0b3JfdXNlcklkIjoiIiwiYXV0aG9yaXphdGlvbl90eXBlIjoiRXh0ZXJuYWwiLCJjdXN0b21lcl9pZCI6IjM1YzI2YjQ1LWY0MDgtNGVjMS1iM2EwLWE4MDExYTE1NDE1OCIsInNjb3BlIjpbImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.OqMXl7ZnAwUAQLToQf3pF0JzG3EIkHiD3RXn7E-Cck7p_iEr1Qeca7QhPWZNy_5BRYeAWSl0hPSOg-oP1VEmXzn6NuhFwp7K2-U5L1DEwqDF6aNdtAhTP9yYxfTjQL4dz88f3v_SPWTJNkntHLnMrRT0bMkSDnYrC0Gq0IWgYynbaAAHVw4m496AUI-eBTPthjaFb6CVdijP10CHv4x29_szMkRWctwqMOICMGlVf7jPZkW5TgcJCQ4PnsUGtc2T7tAlLZIa0Hoh3TQJHjAsgeZrzkEP_6Do-2YOYxffIKpJmoxO4SMaCC4oQW2MShYfcb0yArQ2-CFChipzSdFpYg' })
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
