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
      "d01b4eb57cbb4a83b3cd4983ff40fd08",
      "f10d7d9e221e4d62a420174535f5fa1b"
    ] ,
  }
}