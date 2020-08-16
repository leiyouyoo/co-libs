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
    height:'800',
    style:'height:100vh',
    getReportUrl : 'http://192.168.1.5:8002/FCM/WarehouseReceipt/GetWarehouseRecipt?Id=',
    ids : [
      "acb02823-fc44-46ed-b776-08d832954101",
    ] ,
  }
}