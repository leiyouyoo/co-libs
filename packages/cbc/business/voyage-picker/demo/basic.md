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
    <co-voyage-picker [(ngModel)]="selectedValue">
    </co-voyage-picker>
    <p>{{selectedValue}}</p>
  </div>
  `
})
export class VoyagePickerBasicComponent {
  selectedValue: string = 'abbebcea-11af-41c0-aeb0-61f1c9ad0e4f';
}

```
