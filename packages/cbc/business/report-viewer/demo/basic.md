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
    ids : [
    'AC4B4B98-3C3D-44DE-245A-08D824081FFE',
    ] ,
  }
}