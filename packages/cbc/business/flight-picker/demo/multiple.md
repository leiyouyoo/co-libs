---
title:
  zh-CN: 多选样例
  en-US: Multiple Usage
order: 2
---

## zh-CN

基于coModel设置multiple 多选样例.


```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <co-flight-picker  [(ngModel)]="selectedValue" [coMode]="mode" [coMaxMultipleCount]="maxMultipleCount" style="width:300px">
    </co-flight-picker>
    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class FlightPickerMultipleComponent {
  mode = 'multiple';
  maxMultipleCount = 2;
  selectedValue: string[] = ['72e72331-dbc5-452b-8dc3-fecddc11290e', '872f95c5-0604-4fba-8b8a-db9eac27a228'];
}

```
