---
title:
  zh-CN: 基础样例
order: 0
---

## zh-CN

基本用法。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <co-page-layout [coToolbar]="toolbar" [coSearchArea]="searchArea">
        <div style="display: flex;justify-content: center;align-items: center;background: #6e6e6e;height: 300px;width:100%;color: white;">内容区域</div>
      </co-page-layout>
      <ng-template #toolbar>
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
          <co-toolbar-item>
            <button nz-button>复制</button>
          </co-toolbar-item>
          <co-toolbar-item>
            <button nz-button>其他操作</button>
          </co-toolbar-item>
        </co-toolbar>
      </ng-template>
      <ng-template #searchArea>
        <co-search-area-layout>
          <co-search-area-item>
            <input type="text" nz-input placeholder="请输入"/>
          </co-search-area-item>
          <co-search-area-item>
            <input type="text" nz-input placeholder="请输入"/>
          </co-search-area-item>
          <co-search-area-item>
            <input type="text" nz-input placeholder="请输入"/>
          </co-search-area-item>
          <co-search-area-item>
            <input type="text" nz-input placeholder="请输入"/>
          </co-search-area-item>
          <co-search-area-item>
            <button nz-button nzType="primary"><i nz-icon nzType="search" nzTheme="outline"></i>搜索</button>
            <button nz-button>重置</button>
          </co-search-area-item>
        </co-search-area-layout>
      </ng-template>
  `,
})
export class DemoComponent {
}
```
