---
title:
  zh-CN: 片区选择器方法使用样例
  en-US: Methods Usage
order: 6
---

## zh-CN

片区选择器方法(focus,blur,clear)使用样例.


```ts
import { Component, ViewChild } from '@angular/core';
import { AreaPickerComponent } from '@co/cbc';

@Component({
  selector: 'app-demo',
  template: `
    <div>
      <div>
        <button nz-button nzType="default" (click)="onFocus($event)">设置焦点</button>
        <button nz-button nzType="default" (click)="onBlur($event)">失去焦点</button>
        <button nz-button nzType="default" (click)="onClear($event)">清除所有值</button>
      </div>
      <co-area-picker [(ngModel)]="selectedValue"> </co-area-picker>
    </div>
  `,
})
export class CustomerPickerMethodsComponent {
  @ViewChild(AreaPickerComponent, { static: true }) coAreaPickerComponent!: AreaPickerComponent;

  selectedValue: number = 2;

  onFocus(_e: any) {
    this.coAreaPickerComponent.focus();
  }

  onBlur(_e: any) {
    this.coAreaPickerComponent.blur();
  }

  onClear(_e: any) {
    this.coAreaPickerComponent.clear();
  }
}


```
