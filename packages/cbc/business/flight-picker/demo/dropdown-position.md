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
  selectedValue: string[] = ['abbebcea-11af-41c0-aeb0-61f1c9ad0e4f','872f95c5-0604-4fba-8b8a-db9eac27a228'];
  dropdownColumns: any[] = [{
    name: 'name',
    label: '名称',
    width: 400
  },
  {
    name: 'tel',
    label: '电话',
    width: 80
  },
  {
    name: 'fax',
    label: '传真',
    width: 80
  }
  ]
}

```
