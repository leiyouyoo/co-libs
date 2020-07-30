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
    <co-shipname-picker [(ngModel)]="selectedValue">
    </co-shipname-picker>
    <p>{{selectedValue}}</p>
  </div>
  `
})
export class ShipnamePickerBasicComponent {
  selectedValue;
}

```
