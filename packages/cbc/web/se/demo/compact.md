---
order: 3
title:
  zh-CN: 紧凑型
  en-US: Compact Layout
---

## zh-CN

强制忽略 `error`、`extra` 展示。

## en-US

Force ignored `error`, `extra` display.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <form nz-form #f="ngForm" co-se-container labelWidth="150" gutter="32" size="compact">
    <co-se label="App Key" error="请填写" optional="(选填)" optionalHelp="通过控制台-查看KEY获取" extra="额外提示信息">
      <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required>
    </co-se>
    <co-se label="App Secret" error="请填写，最多32位">
      <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32">
    </co-se>
    <co-se>
      <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
    </co-se>
  </form>`,
})
export class DemoComponent {
  i: any = {};
}
```
