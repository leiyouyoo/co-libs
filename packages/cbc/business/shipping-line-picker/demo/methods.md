---
title:
  zh-CN: 航线选择器方法使用样例
  en-US: Methods Usage
order: 6
---

## zh-CN

航线选择器方法(focus,blur,clear)使用样例.


```ts
import { Component, ViewChild } from '@angular/core';
import { ShippingLinePickerComponent } from '@co/cbc';

@Component({
  selector: 'app-demo',
  template: `
    <div>
      <div>
        <button nz-button nzType="default" (click)="onFocus($event)">设置焦点</button>
        <button nz-button nzType="default" (click)="onBlur($event)">失去焦点</button>
        <button nz-button nzType="default" (click)="onClear($event)">清除所有值</button>
      </div>
      <co-shipping-line-picker [(ngModel)]="selectedValue"> </co-shipping-line-picker>
    </div>
  `,
})
export class ShippingLinePickerMethodsComponent {
  @ViewChild(ShippingLinePickerComponent, { static: true }) coShippingLinePickerComponent!: ShippingLinePickerComponent;

  selectedValue = '9f18bbd4-aabd-4e89-9fe4-6cc9b9807b8e';

  onFocus(_e: any) {
    this.coShippingLinePickerComponent.focus();
  }

  onBlur(_e: any) {
    this.coShippingLinePickerComponent.blur();
  }

  onClear(_e: any) {
    this.coShippingLinePickerComponent.clear();
  }
}


```
