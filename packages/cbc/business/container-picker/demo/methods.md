---
title:
  zh-CN: 箱选择器方法使用样例
  en-US: Methods Usage
order: 6
---

## zh-CN

箱选择器方法(focus,blur,clear)使用样例.


```ts
import { Component, ViewChild } from '@angular/core';
import { ContainerPickerComponent } from '@co/cbc';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <div>
      <button nz-button nzType="default" (click)='onFocus()'>设置焦点</button>
      <button nz-button nzType="default" (click)='onBlur()'>失去焦点</button>
      <button nz-button nzType="default" (click)='onClear()'>清除所有值</button>
    </div>
    <co-container-picker  [(ngModel)]="selectedValue">
    </co-container-picker>
  </div>
  `,
})
export class ContainerPickerMethodsComponent {
  @ViewChild(ContainerPickerComponent, { static: true }) coContainerPickerComponent!: ContainerPickerComponent;

  selectedValue = ['b1dfd995-5d98-42fe-a81c-55ec4db2c49a'];

  onFocus() {
    this.coContainerPickerComponent.focus();
  }

  onBlur() {
    this.coContainerPickerComponent.blur();
  }

  onClear() {
    this.coContainerPickerComponent.clear();
  }
}

```
