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
import { CommodityPickerComponent } from '@co/cbc';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <div>
      <button nz-button nzType="default" (click)='onFocus()'>设置焦点</button>
      <button nz-button nzType="default" (click)='onBlur()'>失去焦点</button>
      <button nz-button nzType="default" (click)='onClear()'>清除所有值</button>
    </div>
    <co-commodity-picker  [(ngModel)]="selectedValue">
    </co-commodity-picker>
  </div>
  `,
})
export class CustomerPickerMethodsComponent {
  @ViewChild(CommodityPickerComponent, { static: true }) coCommodityPickerComponent!: CommodityPickerComponent;

  selectedValue = 'd86b5fdd-edcb-e111-8d6d-0026551ca87b';

  onFocus() {
    this.coCommodityPickerComponent.focus();
  }

  onBlur() {
    this.coCommodityPickerComponent.blur();
  }

  onClear() {
    this.coCommodityPickerComponent.clear();
  }
}

```
