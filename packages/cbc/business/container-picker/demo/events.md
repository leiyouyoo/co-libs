---
title:
  zh-CN: 箱选择器事件使用样例
  en-US: Events Usage
order: 7
---

## zh-CN

箱选择器事件(coFocus,coBlur,coOpenChange)使用样例.


```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <co-container-picker  [(ngModel)]="selectedValue" (coFocus)="onFocus()" (coBlur)="onBlur()"  (coOpenChange)="onOpenChange()">
    </co-container-picker>
    <p>{{msg}}</p>
  </div>
  `,
})
export class ContainerPickerEventsComponent {
  selectedValue = ['b1dfd995-5d98-42fe-a81c-55ec4db2c49a'];
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
