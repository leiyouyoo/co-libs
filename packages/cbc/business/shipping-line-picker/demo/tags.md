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
      <co-shipping-line-picker [coSize]="size" coMode="tags" [coValueMember]="valueMember" [(ngModel)]="selectedValue"> </co-shipping-line-picker>
      <p>{{ selectedValue }}</p>
    </div>
  `,
})
export class ShippingLinePickerTagsComponent {
  size = 'default';
  valueMember = "name";
  selectedValue: string;
}


```
