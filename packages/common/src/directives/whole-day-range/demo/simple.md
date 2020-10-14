---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
     <nz-range-picker wholeDayRange nzSize="small" nzFormat="yyyy-MM-dd" class="width-100" [(ngModel)]="date" (ngModelChange)="onChange($event)"></nz-range-picker>
  `,
})
export class DemoComponent {
  date;
  constructor() {}

  onChange(e) {
    console.log(e)
  }
}
```
