---
title:
  zh-CN: 客户选择器方法使用样例
  en-US: Methods Usage
order: 6
---

## zh-CN

客户选择器方法(focus,blur,clear)使用样例.


```ts
import { Component, ViewChild } from '@angular/core';
import { CustomerPickerComponent } from '@co/cbc';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <div>
      <button nz-button nzType="default" (click)='onFocus($event)'>设置焦点</button>
      <button nz-button nzType="default" (click)='onBlur($event)'>失去焦点</button>
      <button nz-button nzType="default" (click)='onClear($event)'>清除所有值</button>
    </div>
    <co-charging-code-picker  [(ngModel)]="selectedValue">
    </co-charging-code-picker>
  </div>
  `,
})
export class CustomerPickerMethodsComponent {
  @ViewChild(CustomerPickerComponent, { static: true }) coCustomerPickerComponent!: CustomerPickerComponent;

  selectedValue: number = 2;

  onFocus() {
    this.coCustomerPickerComponent.focus();
  }

  onBlur() {
    this.coCustomerPickerComponent.blur();
  }

  onClear() {
    this.coCustomerPickerComponent.clear();
  }
}

```