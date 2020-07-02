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
    <co-flight-picker [(ngModel)]="selectedValue">
    </co-flight-picker>
    <p>{{selectedValue}}</p>
  </div>
  `
})
export class FlightPickerBasicComponent {
  selectedValue: string = 'abbebcea-11af-41c0-aeb0-61f1c9ad0e4f';
}

```
