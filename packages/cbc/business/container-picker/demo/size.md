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

    <co-container-picker [coSize]="size"  [(ngModel)]="selectedValue">
    </co-container-picker>

    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class ContainerPickerSizeComponent {
  size = 'default';
  selectedValue = ['b1dfd995-5d98-42fe-a81c-55ec4db2c49a'];
}


```
