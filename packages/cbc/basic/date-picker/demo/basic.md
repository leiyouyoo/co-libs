---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

## zh-CN

使用 `ngModel`、`ngModelEnd` 来表示开始与结束值。


```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  result: {{i | json}}<br>
  <co-range-picker [(ngModel)]="i.start" [(ngModelEnd)]="i.end"></co-range-picker>
  `,
})
export class DatePickerBasicComponent {
  i: any = {};
}
```
