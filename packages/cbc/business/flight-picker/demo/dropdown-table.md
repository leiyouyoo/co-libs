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
    <co-flight-picker coDropdownMode="table" [coDropdownStyle]="{width:'400px'}" [coDropdownColumns]="dropdownColumns"  [coMode]="mode" [coMaxMultipleCount]="maxMultipleCount"  [(ngModel)]="selectedValue" style="width:300px">
    </co-flight-picker>
    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class FlightPickerDropdownTableComponent {
  mode = 'multiple';
  maxMultipleCount = 2;
  selectedValue: string[] =  ['abbebcea-11af-41c0-aeb0-61f1c9ad0e4f','872f95c5-0604-4fba-8b8a-db9eac27a228'];
  dropdownColumns: any[] = [{
    name: 'name',
    label: '名称',
    width: 100
  }]
}


```
