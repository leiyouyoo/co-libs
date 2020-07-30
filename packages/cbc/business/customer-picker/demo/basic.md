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
    <co-customer-picker [(ngModel)]="selectedValue">
    </co-customer-picker>
    <p>{{selectedValue}}</p>
  </div>
  `
})
export class CustomerPickerBasicComponent {
  selectedValue = '25f6f24a-22ea-4b85-b916-1345a122d295';
}

```
