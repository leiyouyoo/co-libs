import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApi, BaseHeaders, BaseUrl, DELETE, FORM, GET, Payload, POST, PUT } from '@co/common';
import { ListResultDto, PagedResultDto } from '@co/core';

import { GenerateWarehouseReciptInput,GenerateWarehouseReciptOutput, } from './fcm.types';

@BaseUrl('http://192.168.1.5:8000/fcm/WarehouseReceipt')
@Injectable({ providedIn: 'root' })
@BaseHeaders({ Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkZDg1MzI1MGYxYWY0ZjE4ODBmZTBjOTRkZWNjNTRjIiwidHlwIjoiSldUIn0.eyJuYmYiOjE1OTQzNTIxNDUsImV4cCI6MTU5NDM1NTc0NSwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMS41OjgwMDEvIiwiYXVkIjpbImh0dHA6Ly8xOTIuMTY4LjEuNTo4MDAxL3Jlc291cmNlcyIsImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiXSwiY2xpZW50X2lkIjoiY2l0eU9jZWFuIiwic3ViIjoiMjY3NSIsImF1dGhfdGltZSI6MTU5NDI1OTU1OCwiaWRwIjoibG9jYWwiLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50SWQiOiIxIiwicm9sZSI6IjUiLCJyb2xlX25hbWVzIjoiU2hpcHBlciIsInRlbmFuY3lfbmFtZSI6IkNpdHkgT2NlYW4iLCJuYW1lIjoibWFpblRlc3QiLCJzdXJfbmFtZSI6IiIsInBsYXRmb3JtIjoiIiwicGFyZW50X3VzZXJpZCI6IiIsImNyZWF0b3JfdXNlcklkIjoiIiwiYXV0aG9yaXphdGlvbl90eXBlIjoiRXh0ZXJuYWwiLCJjdXN0b21lcl9pZCI6IjM1YzI2YjQ1LWY0MDgtNGVjMS1iM2EwLWE4MDExYTE1NDE1OCIsInNjb3BlIjpbImlkczQtYXBpIiwiUGxhdGZvcm1BcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl19.NQccEdfVV_qmaujgLhhYRRSkIvzZsWvZSxOwH2s4rcjHRSvHDCImvdJyQlHj4FvJjrp_vfHxUB8KhjKjOsA-g_IFr8w8hvYgHv-XG8fH6PJ5csFj1swj0gGWWzRvVKHm_2SvjmeChlNDI5j4n1Ju6xip1_WEwYNAvegx_6cAki5mzAj2NnWlb7zhkJyd3P-0kxAmX5qlyo1sfpT9WyqcIDQk21BLWQ2sjnNL6FQseNYtwz5gTdfLzP7ntYgOlYwmV4_yPi-9UJGF71DVSgUkU8Jgc83TzOP5aKwktS2wADPp8CeRJq7DZ9GKwDDlEj8Gzg5bclQcJozWaFq8-wGhiA' })
export class WarehouseReceiptService extends BaseApi {
  constructor(injector: Injector) {
    super(injector);
  }


    /**
     * @param url /FCM/WarehouseReceipt/GenerateWarehouseRecipt
     *
     */

    @POST('generateWarehouseRecipt')
    generateWarehouseRecipt(
        @Payload
        _req:GenerateWarehouseReciptInput

    ): Observable<GenerateWarehouseReciptOutput> {
        return null as any
    }


    /**
     * @param url /FCM/WarehouseReceipt/GetWarehouseRecipt
     *
     */

    @GET('getWarehouseRecipt')
    getWarehouseRecipt(
        @Payload
        _req: {id?:string}

    ): Observable<any> {
        return null as any
    }



  }
