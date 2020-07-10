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
    'a176915d-0376-4d41-10fa-08d80ddc7b46',
    'ea05f443-43e4-47d9-bc3e-4ddd8ea61f21',
    '5a641ab9-3540-4de9-97b8-1862fc1ead5a',
    '77295317-014c-4ead-a922-4ae310a6bbc7',
    ] ,
  }
}