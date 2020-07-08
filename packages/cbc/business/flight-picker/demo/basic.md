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
  selectedValue: string = '72e72331-dbc5-452b-8dc3-fecddc11290e';
}

```
