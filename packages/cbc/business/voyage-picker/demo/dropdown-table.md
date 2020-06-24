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
    <co-voyage-picker coDropdownMode="table" [coDropdownStyle]="{width:'400px'}" [coDropdownColumns]="dropdownColumns"  [coMode]="mode" [coMaxMultipleCount]="maxMultipleCount"  [(ngModel)]="selectedValue" style="width:300px">
    </co-voyage-picker>
    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class VoyagePickerDropdownTableComponent {
  mode = 'multiple';
  maxMultipleCount = 2;
  selectedValue: string[] =  ['abbebcea-11af-41c0-aeb0-61f1c9ad0e4f','5d083649-ff50-4d27-8b21-1afc9b1d21f9','872f95c5-0604-4fba-8b8a-db9eac27a228'];
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
