---
order: 0
title:
  zh-CN: 快捷键
  en-US: Shortcut
---

## zh-CN

使用 `shortcuts` 自定义快捷面板（支持全局配置）。


```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  result: {{i | json}}<br>
  <co-range-picker [(ngModel)]="i.start" [(ngModelEnd)]="i.end" [shortcut]="true"></co-range-picker>
  `,
})
export class CoDatePickerShortcutComponent {
  i: any = {};
}
```
