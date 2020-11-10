import { Injectable } from '@angular/core';
import { _HttpClient } from '@co/common';
@Injectable({
  providedIn: 'root',
})
export class ImQuotesService {
  constructor(public httpService: _HttpClient) {}
  // 获取询价详情
  getQuoteDetail(Id: string) {
    const url = '/CRM/QuoteEnquiry/GetForCSP';
    const params = {
      Id,
    };
    return this.httpService.get(url, params);
  }
}
