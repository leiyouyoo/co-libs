---
title:
  zh-CN: 客户选择器事件使用样例
  en-US: Events Usage
order: 7
---

## zh-CN

客户选择器事件(coFocus,coBlur,coOpenChange)使用样例.


```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div>
      <co-customer-picker
        [(ngModel)]="selectedValue"
        (coFocus)="onFocus($event)"
        (coBlur)="onBlur($event)"
        (coOpenChange)="onOpenChange($event)"
      >
      </co-customer-picker>
      <p>{{ msg }}</p>
    </div>
  `,
})
export class CustomerPickerEventsComponent {
  selectedValue = '25f6f24a-22ea-4b85-b916-1345a122d295';
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
