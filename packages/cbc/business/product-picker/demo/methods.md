---
title:
  zh-CN: 品名选择器方法使用样例
  en-US: Methods Usage
order: 6
---

## zh-CN

品名选择器方法(focus,blur,clear)使用样例.


```ts
import { Component, ViewChild } from '@angular/core';
import { ProductPickerComponent } from '@co/cbc';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <div>
      <button nz-button nzType="default" (click)='onFocus($event)'>设置焦点</button>
      <button nz-button nzType="default" (click)='onBlur($event)'>失去焦点</button>
      <button nz-button nzType="default" (click)='onClear($event)'>清除所有值</button>
    </div>
    <co-product-picker  [(ngModel)]="selectedValue">
    </co-product-picker>
  </div>
  `,
})
export class CustomerPickerMethodsComponent {
  @ViewChild(ProductPickerComponent, { static: true }) coProductPickerComponent!: ProductPickerComponent;

  selectedValue: number = 222;

  onFocus() {
    this.coProductPickerComponent.focus();
  }

  onBlur() {
    this.coProductPickerComponent.blur();
  }

  onClear() {
    this.coProductPickerComponent.clear();
  }
}

```
