---
title:
  zh-CN: 设置宽度
order: 2
---

## zh-CN

设置宽度

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    width：{{width}}
    <nz-slider style="margin-bottom:8px;" [nzDisabled]="auto" nzMin="120" nzMax="400" [(ngModel)]="width"></nz-slider>
    <label style="margin-bottom:8px;" nz-checkbox [(ngModel)]="auto">auto</label>
    <br/>
    <co-toolbar [coWidth]="auto?'auto':width">
      <co-toolbar-item>
        <button nz-button nzType="primary"><i nz-icon nzType="plus" nzTheme="outline"></i>新增</button>
      </co-toolbar-item>
      <co-toolbar-item>
        <button nz-button nzType="secondary"><i nz-icon nzType="edit" nzTheme="outline"></i>编辑</button>
      </co-toolbar-item>
      <co-toolbar-item>
        <button nz-button nzType="danger"><i nz-icon nzType="delete"></i>删除</button>
      </co-toolbar-item>
      <co-toolbar-item>
        <button nz-button>其他操作</button>
      </co-toolbar-item>
    </co-toolbar>
  `,
})
export class DemoComponent {
  width = 180;
  auto = false;
}
```
