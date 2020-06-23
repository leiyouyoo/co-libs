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
import { CountyPickerComponent } from '@co/cbc';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <div>
      <button nz-button nzType="default" (click)='onFocus($event)'>设置焦点</button>
      <button nz-button nzType="default" (click)='onBlur($event)'>失去焦点</button>
      <button nz-button nzType="default" (click)='onClear($event)'>清除所有值</button>
    </div>
    <co-county-picker  [(ngModel)]="selectedValue">
    </co-county-picker>
  </div>
  `,
})
export class CountyPickerMethodsComponent {
  @ViewChild(CountyPickerComponent, { static: true }) coCountyPickerComponent!: CountyPickerComponent;

  selectedValue: number = 2;

  onFocus() {
    this.coCountyPickerComponent.focus();
  }

  onBlur() {
    this.coCountyPickerComponent.blur();
  }

  onClear() {
    this.coCountyPickerComponent.clear();
  }
}

```
