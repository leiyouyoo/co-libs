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
      <co-voyage-picker
        [(ngModel)]="selectedValue"
        (coFocus)="onFocus($event)"
        (coBlur)="onBlur($event)"
        (coOpenChange)="onOpenChange($event)"
      >
      </co-voyage-picker>
      <p>{{ msg }}</p>
    </div>
  `,
})
export class VoyagePickerEventsComponent {
  selectedValue: string = 'abbebcea-11af-41c0-aeb0-61f1c9ad0e4f';
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
