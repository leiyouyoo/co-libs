---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

基础用法。

```ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: ` 
    <div>
    <co-report-viewer [coParam]="param"></co-report-viewer>
    </div>
  `
})

export class ReportViewerBasicComponent {
  param:any ={
    type : 'order' ,
    width:'600',
    getReportUrl : 'http://192.168.1.5:8002/FCM/WarehouseReceipt/GetWarehouseRecipt?Id=',
    ids : [
      "282022b8dc3a40b6a041fce228b82b66",
      "0325fbd3438848588a50778f3e41f9cb"
    ] ,
  }
}