---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

## zh-CN



```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  result: {{datetimeRange | hourRange}}<br>
  <datetime-range-picker [(outTimeStr)]="i.start"></datetime-range-picker>
  `,
})
export class DatetimeRangePickerBasicComponent {
  datetimeRange = '2020-07-03 15:00-16:00'
}
```
