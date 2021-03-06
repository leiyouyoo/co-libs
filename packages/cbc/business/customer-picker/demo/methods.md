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
        <button nz-button nzType="default" (click)="onFocus($event)">设置焦点</button>
        <button nz-button nzType="default" (click)="onBlur($event)">失去焦点</button>
        <button nz-button nzType="default" (click)="onClear($event)">清除所有值</button>
      </div>
      <co-customer-picker [(ngModel)]="selectedValue"> </co-customer-picker>
    </div>
  `,
})
export class CustomerPickerMethodsComponent {
  @ViewChild(CustomerPickerComponent, { static: true }) coCustomerPickerComponent!: CustomerPickerComponent;

  selectedValue = '25f6f24a-22ea-4b85-b916-1345a122d295';

  onFocus(_e: any) {
    this.coCustomerPickerComponent.focus();
  }

  onBlur(_e: any) {
    this.coCustomerPickerComponent.blur();
  }

  onClear(_e: any) {
    this.coCustomerPickerComponent.clear();
  }
}


```
