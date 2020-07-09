---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

基础用法。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <co-commodity-picker [(ngModel)]="selectedValue">
    </co-commodity-picker>
    <p>{{selectedValue}}</p>
  </div>
  `
})
export class CustomerPickerBasicComponent {
  selectedValue: number = 111;
}

```
