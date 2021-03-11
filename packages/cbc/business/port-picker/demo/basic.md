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
    selectedValue:any;
    mode = 'multiple';
    maxMultipleCount = 1;
}

```
