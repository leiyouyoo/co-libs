---
title:
  zh-CN: 下拉表格样例
  en-US: Dropdown Table Usage
order: 4
---

## zh-CN

基于coDropdownMode及coDropdownColumns设置下拉表格样例.


```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <co-container-picker coDropdownMode="table" [coDropdownStyle]="{width:'400px'}" [coDropdownColumns]="dropdownColumns"  [coMode]="mode" [coMaxMultipleCount]="maxMultipleCount"  [(ngModel)]="selectedValue" style="width:300px">
    </co-container-picker>
    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class ContainerPickerDropdownTableComponent {
  mode = 'multiple';
  maxMultipleCount = 2;
  selectedValue = ['b1dfd995-5d98-42fe-a81c-55ec4db2c49a', '1902d3c9-fbe7-4b0f-b362-05ba1c7675f2'];
  dropdownColumns: any[] = [{
    name: 'name',
    label: '名称',
    width: 100
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
  }];
}


```
