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
  <div style="margin-top:8px;float:right;">
    <co-container-picker coSize="default" [coDropdownStyle]="{width:'500px',left:'-60%'}"  coDropdownMode="table" [coDropdownColumns]="dropdownColumns"  [(ngModel)]="selectedValue" [coMode]="mode" [coMaxMultipleCount]="maxMultipleCount" style="width:300px">
    </co-container-picker>
    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class ContainerPickerDropdownPositionComponent {
  mode = 'multiple';
  maxMultipleCount = 2;
  selectedValue = ['b1dfd995-5d98-42fe-a81c-55ec4db2c49a', '1902d3c9-fbe7-4b0f-b362-05ba1c7675f2'];
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
