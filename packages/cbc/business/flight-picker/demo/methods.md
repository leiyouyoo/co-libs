---
title:
  zh-CN: 航班选择器方法使用样例
  en-US: Methods Usage
order: 6
---

## zh-CN

航班选择器方法(focus,blur,clear)使用样例.


```ts
import { Component, ViewChild } from '@angular/core';
import { FlightPickerComponent } from '@co/cbc';

@Component({
  selector: 'app-demo',
  template: `
    <div>
      <div>
        <button nz-button nzType="default" (click)="onFocus($event)">设置焦点</button>
        <button nz-button nzType="default" (click)="onBlur($event)">失去焦点</button>
        <button nz-button nzType="default" (click)="onClear($event)">清除所有值</button>
      </div>
      <co-flight-picker  [(ngModel)]="selectedValue"> </co-flight-picker >
    </div>
  `,
})
export class FlightPickerMethodsComponent {
  @ViewChild(FlightPickerComponent, { static: true }) coFlightPickerComponent!: FlightPickerComponent;

  selectedValue: string = 'abbebcea-11af-41c0-aeb0-61f1c9ad0e4f';

  onFocus(_e: any) {
    this.coFlightPickerComponent.focus();
  }

  onBlur(_e: any) {
    this.coFlightPickerComponent.blur();
  }

  onClear(_e: any) {
    this.coFlightPickerComponent.clear();
  }
}


```
