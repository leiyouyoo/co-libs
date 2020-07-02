---
title:
  zh-CN: 表单label
order: 5
---

## zh-CN

为输入控件增加label。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <co-search-area-layout coWidth="280">
        <co-search-area-item>
          <nz-form-label nzRequired><span style="color: red">单号</span></nz-form-label>
          <input type="text" nz-input placeholder="请输入"/>
        </co-search-area-item>
    </co-search-area-layout>
  `,
})
export class DemoComponent {
}
```
