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
    <co-place-picker [(ngModel)]="selectedValue">
    </co-place-picker>
    <p>{{selectedValue}}</p>
  </div>
  `
})
export class PlacePickerBasicComponent {
  selectedValue: string = '2dcfe90e-c3d0-49f7-a1bb-ffea868beb19';
}

```
