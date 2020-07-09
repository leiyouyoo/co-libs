---
title:
  zh-CN: Tags样例
  en-US: Tags Usage
order: 1
---

## zh-CN

基于Tags样例.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div>
      <co-customer-picker [coSize]="size" coMode="tags" [coValueMember]="valueMember" [coAutoClearSearchValue]="autoClearSearchValue" [(ngModel)]="selectedValue"> </co-customer-picker>
      <p>{{ selectedValue }}</p>
    </div>
  `,
})
export class CustomerPickerTagsComponent {
  size = 'default';
  valueMember = "name";
  selectedValue: string;
}


```
