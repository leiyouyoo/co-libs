---
order: 7
title:
  zh-CN: 分隔线
  en-US: Separation line
---

## zh-CN

构建一个左右结构的标准表单行。

## en-US

Build a standard form row.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <form nz-form #f="ngForm" co-se-container="1" size="compact" gutter="32">
    <co-se label="所属类目" line>头像</co-se>
    <co-se label="图片">
      <nz-input-group nzSearch [nzAddOnAfter]="suffixButton">
        <input type="text" nz-input placeholder="请贴入网络图片地址">
      </nz-input-group>
      <ng-template #suffixButton>
        <button nz-button nzType="primary" nzSearch>提取</button>
      </ng-template>
    </co-se>
  </form>`,
})
export class DemoComponent {
  i: any = {};
}
```
