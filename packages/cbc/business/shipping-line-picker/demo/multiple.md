---
title:
  zh-CN: 多选样例
  en-US: Multiple Usage
order: 2
---

## zh-CN

基于coMode设置multiple 多选样例.


```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <co-shipping-line-picker  [(ngModel)]="selectedValue" [coMode]="mode" [coMaxMultipleCount]="maxMultipleCount" style="width:300px">
    </co-shipping-line-picker>
    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class ShippingLinePickerMultipleComponent {
  mode = 'multiple';
  maxMultipleCount = 2;
  selectedValue = ['9f18bbd4-aabd-4e89-9fe4-6cc9b9807b8e', '8addaa17-68fe-4cd4-9e88-beb4a6782c56'];
}

```
