import { Injectable } from '@angular/core';
import { _HttpClient } from '@co/common';
@Injectable({
  providedIn: 'root',
})
export class ImShipmentService {
  constructor(public httpService: _HttpClient) {}
  // 获取询价详情
  getCspShipmentList(id: string) {
    const url = '/FCM/EsQuery/GetCspShipmentList';
    const params = {
      dynamicQuery: {
        id,
      }
    };
    return this.httpService.post(url, params);
  }
}
