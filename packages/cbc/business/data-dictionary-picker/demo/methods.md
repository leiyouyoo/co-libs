---
title:
  zh-CN: 数据字典选择器方法使用样例
  en-US: Methods Usage
order: 6
---

## zh-CN

数据字典选择器方法(focus,blur,clear)使用样例.


```ts
import { Component, ViewChild } from '@angular/core';
import { DataDictionaryPickerComponent } from '@co/cbc';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <div>
      <button nz-button nzType="default" (click)='onFocus()'>设置焦点</button>
      <button nz-button nzType="default" (click)='onBlur()'>失去焦点</button>
      <button nz-button nzType="default" (click)='onClear()'>清除所有值</button>
    </div>
    <co-data-dictionary-picker  [(ngModel)]="selectedValue">
    </co-data-dictionary-picker>
  </div>
  `,
})
export class DataDictionaryPickerMethodsComponent {
  @ViewChild(DataDictionaryPickerComponent, { static: true }) coDataDictionaryPickerComponent!: DataDictionaryPickerComponent;

  selectedValue: number = 2;

  onFocus() {
    this.coDataDictionaryPickerComponent.focus();
  }

  onBlur() {
    this.coDataDictionaryPickerComponent.blur();
  }

  onClear() {
    this.coDataDictionaryPickerComponent.clear();
  }
}

```
