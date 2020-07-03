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
    <co-palce-picker coDropdownMode="table" [coDropdownStyle]="{width:'400px'}" [coDropdownColumns]="dropdownColumns"  [coMode]="mode" [coMaxMultipleCount]="maxMultipleCount"  [(ngModel)]="selectedValue" style="width:300px">
    </co-palce-picker>
    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class PlacePickerDropdownTableComponent {
  mode = 'multiple';
  maxMultipleCount = 2;
  selectedValue: string[] = ['2dcfe90e-c3d0-49f7-a1bb-ffea868beb19'];
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
