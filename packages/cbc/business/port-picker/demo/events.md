---
title:
  zh-CN: 港口选择器事件使用样例
  en-US: Events Usage
order: 7
---

## zh-CN

地区选择器事件(coFocus,coBlur,coOpenChange)使用样例.


```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div>
      <co-port-picker
        [(ngModel)]="selectedValue"
        (coFocus)="onFocus($event)"
        (coBlur)="onBlur($event)"
        (coOpenChange)="onOpenChange($event)"
      >
      </co-port-picker>
      <p>{{ msg }}</p>
    </div>
  `,
})
export class PortPickerEventsComponent {
  selectedValue: number = 2;
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
