---
title:
  zh-CN: 品名选择器事件使用样例
  en-US: Events Usage
order: 7
---

## zh-CN

品名选择器事件(coFocus,coBlur,coOpenChange)使用样例.


```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <co-commodity-picker  [(ngModel)]="selectedValue" (coFocus)="onFocus()" (coBlur)="onBlur()"  (coOpenChange)="onOpenChange()">
    </co-commodity-picker>
    <p>{{msg}}</p>
  </div>
  `,
})
export class CustomerPickerEventsComponent {
  selectedValue = 'd86b5fdd-edcb-e111-8d6d-0026551ca87b';
  msg: string;

  onFocus() {
    this.msg = "触发Focus事件";
  }

  onBlur() {
    this.msg = "触发Blur事件";

  }
  onOpenChange() {
    this.msg = "触发OpenChange事件";
  }
}

```
