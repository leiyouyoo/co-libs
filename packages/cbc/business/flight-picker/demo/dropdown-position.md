---
title:
  zh-CN: 下拉框位置控制样例
  en-US: Dropdown Position Usage
order: 5
---

## zh-CN

基于coDropdownStyle设置下拉框位置样例.


```ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <co-flight-picker coSize="default" [coDropdownStyle]="{width:'500px',left:'-60%'}"  coDropdownMode="table" [coDropdownColumns]="dropdownColumns"  [(ngModel)]="selectedValue" [coMode]="mode" [coMaxMultipleCount]="maxMultipleCount" style="width:300px">
    </co-flight-picker>
    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class FlightPickerDropdownPositionComponent {
  mode = 'multiple';
  maxMultipleCount = 2;
  selectedValue: string[] = [];
  dropdownColumns: any[] = [{
    name: 'no',
    label: '名称',
    width: 400
  }
  ]
}

```
