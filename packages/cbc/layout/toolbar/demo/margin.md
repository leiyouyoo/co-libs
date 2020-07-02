---
title:
  zh-CN: 间距
order: 1
---

## zh-CN

设置间距

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    coMarginRight：{{coMarginRight}}
    <nz-slider nzMin="4" nzMax="32" [(ngModel)]="coMarginRight" style="margin-bottom:8px;"></nz-slider>
    <co-toolbar [coMarginRight]="coMarginRight">
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
  coMarginRight = 12;
}
```
