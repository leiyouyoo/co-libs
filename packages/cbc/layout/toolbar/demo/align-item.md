---
title:
  zh-CN: 单独对齐
order: 4
---

## zh-CN

对个体单独设置靠右

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <co-toolbar>
      <co-toolbar-item>
        <button nz-button nzType="primary"><i nz-icon nzType="plus" nzTheme="outline"></i>新增</button>
      </co-toolbar-item>
      <co-toolbar-item>
        <button nz-button nzType="secondary"><i nz-icon nzType="edit" nzTheme="outline"></i>编辑</button>
      </co-toolbar-item>
      <co-toolbar-item>
        <button nz-button nzType="danger"><i nz-icon nzType="delete"></i>删除</button>
      </co-toolbar-item>
      <co-toolbar-item alignRight>
        <button nz-button>复制</button>
      </co-toolbar-item>
      <co-toolbar-item>
        <button nz-button>其他操作</button>
      </co-toolbar-item>
    </co-toolbar>
  `,
})
export class DemoComponent {
}
```
