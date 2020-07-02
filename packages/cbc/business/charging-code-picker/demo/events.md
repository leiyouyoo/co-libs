---
title:
  zh-CN: 费用代码选择器事件使用样例
  en-US: Events Usage
order: 7
---

## zh-CN

费用代码选择器事件(coFocus,coBlur,coOpenChange)使用样例.


```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <co-charging-code-picker  [(ngModel)]="selectedValue" (coFocus)="onFocus()" (coBlur)="onBlur()"  (coOpenChange)="onOpenChange()">
    </co-charging-code-picker>
    <p>{{msg}}</p>
  </div>
  `,
})
export class ChargingCodePickerEventsComponent {
  selectedValue: number = 2;
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
