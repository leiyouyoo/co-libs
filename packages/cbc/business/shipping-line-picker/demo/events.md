---
title:
  zh-CN: 航线选择器事件使用样例
  en-US: Events Usage
order: 7
---

## zh-CN

航线选择器事件(coFocus,coBlur,coOpenChange)使用样例.


```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div>
      <co-shipping-line-picker
        [(ngModel)]="selectedValue"
        (coFocus)="onFocus($event)"
        (coBlur)="onBlur($event)"
        (coOpenChange)="onOpenChange($event)"
      >
      </co-shipping-line-picker>
      <p>{{ msg }}</p>
    </div>
  `,
})
export class ShippingLinePickerEventsComponent {
  selectedValue = '9f18bbd4-aabd-4e89-9fe4-6cc9b9807b8e';
  msg: string;

  onFocus(_e: any) {
    this.msg = '触发Focus事件';
  }

  onBlur(_e: any) {
    this.msg = '触发Blur事件';
  }
  onOpenChange(_e: any) {
    this.msg = '触发OpenChange事件';
  }
}


```
