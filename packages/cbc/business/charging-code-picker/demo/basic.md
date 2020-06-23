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
    <co-charging-code-picker [(ngModel)]="selectedValue">
    </co-charging-code-picker>
    <p>{{selectedValue}}</p>
  </div>
  `
})
export class ChargingCodePickerBasicComponent {
  selectedValue: number = 2;
}

```
