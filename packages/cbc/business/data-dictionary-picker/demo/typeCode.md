---
title:
  zh-CN: 数据类型
  en-US: Basic Usage
order: 8
---

## zh-CN

传入typeCode参数。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <co-data-dictionary-picker [(ngModel)]="selectedValue" [typeCode]="'100'">
    </co-data-dictionary-picker>
  </div>
  `
})
export class DataDictionaryPickerTypeCodeComponent {
selectedValue
}

```
