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
    <co-commodity-picker  [(ngModel)]="selectedValue" [coMode]="mode" [coMaxMultipleCount]="maxMultipleCount" style="width:300px">
    </co-commodity-picker>
    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class CustomerPickerMultipleComponent {
  mode = 'multiple';
  maxMultipleCount = 2;
  selectedValue = ['d86b5fdd-edcb-e111-8d6d-0026551ca87b','e53954d9-dacf-e111-8d6d-0026551ca87b'];
}

```
