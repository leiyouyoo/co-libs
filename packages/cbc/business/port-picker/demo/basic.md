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
    <co-port-picker 
      style="width:200px" 
      [portReq] = "portReq"
      [(ngModel)]="selectedValue" 
      [coMode]="mode" 
      [coMaxMultipleCount]="maxMultipleCount"
    >
    </co-port-picker>
    <p>{{selectedValue}}</p>
  </div>
  `
})
export class PortPickerBasicComponent {
    mode = 'multiple';
    maxMultipleCount = 1;
    //入参
    portReq = {
     isOcean: true,
     regionIds :[11],
     isPaged:  false ,
     maxResultCount: 1 ,
    };
}

```
