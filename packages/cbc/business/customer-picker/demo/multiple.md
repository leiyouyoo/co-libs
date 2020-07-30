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
    <co-customer-picker  [(ngModel)]="selectedValue" [coMode]="mode" [coMaxMultipleCount]="maxMultipleCount" style="width:300px">
    </co-customer-picker>
    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class CustomerPickerMultipleComponent {
  mode = 'multiple';
  maxMultipleCount = 2;
  selectedValue = ['25f6f24a-22ea-4b85-b916-1345a122d295', '5ea4a683-b0fa-47f8-9757-3c04c1f1474d'];
}

```
