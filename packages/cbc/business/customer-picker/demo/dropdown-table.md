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
    <co-customer-picker coDropdownMode="table" [coDropdownStyle]="{width:'400px'}" [coDropdownColumns]="dropdownColumns"  [coMode]="mode" [coMaxMultipleCount]="maxMultipleCount"  [(ngModel)]="selectedValue" style="width:300px">
    </co-customer-picker>
    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class CustomerPickerDropdownTableComponent {
  mode = 'multiple';
  maxMultipleCount = 2;
  selectedValue = ['25f6f24a-22ea-4b85-b916-1345a122d295', '5ea4a683-b0fa-47f8-9757-3c04c1f1474d'];
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
