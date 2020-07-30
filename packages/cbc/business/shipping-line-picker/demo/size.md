---
title:
  zh-CN: 尺寸样例
  en-US: Size Usage
order: 1
---

## zh-CN

基于coSize设置尺寸样例.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <nz-radio-group [(ngModel)]="size">
      <label nz-radio-button nzValue="large"><span>大尺寸</span></label>
      <label nz-radio-button nzValue="default"><span>默认</span></label>
      <label nz-radio-button nzValue="small"><span>小尺寸</span></label>
    </nz-radio-group>

    <br /><br />

    <co-shipping-line-picker [coSize]="size"  [(ngModel)]="selectedValue">
    </co-shipping-line-picker>

    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class ShippingLinePickerSizeComponent {
  size = 'default';
  selectedValue = '9f18bbd4-aabd-4e89-9fe4-6cc9b9807b8e';
}


```
