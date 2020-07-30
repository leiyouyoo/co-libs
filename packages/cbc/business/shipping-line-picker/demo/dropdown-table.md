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
    <co-shipping-line-picker coDropdownMode="table" [coDropdownStyle]="{width:'400px'}" [coDropdownColumns]="dropdownColumns"  [coMode]="mode" [coMaxMultipleCount]="maxMultipleCount"  [(ngModel)]="selectedValue" style="width:300px">
    </co-shipping-line-picker>
    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class ShippingLinePickerDropdownTableComponent {
  mode = 'multiple';
  maxMultipleCount = 2;
  selectedValue = ['9f18bbd4-aabd-4e89-9fe4-6cc9b9807b8e', '8addaa17-68fe-4cd4-9e88-beb4a6782c56'];
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
