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
    <co-county-picker  [(ngModel)]="selectedValue" [coMode]="mode" [coMaxMultipleCount]="maxMultipleCount" style="width:300px">
    </co-county-picker>
    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class CountyPickerMultipleComponent {
  mode = 'multiple';
  maxMultipleCount = 2;
  selectedValue: number[] = [2, 10, 23, 78, 90, 100];
}

```
