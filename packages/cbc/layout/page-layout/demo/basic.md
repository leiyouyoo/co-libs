---
title:
  zh-CN: 基本结构
order: 0
---

## zh-CN

基本结构。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
      <co-page-layout>
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
        <co-page-main>
          <div style="display: flex;justify-content: center;align-items: center;background: #9e9e9e;height: 300px;width:100%;color: white;">主内容区域</div>
        </co-page-main>
        <co-page-side>
          <div style="display: flex;justify-content: center;align-items: center;background: #8f8f88;height: 300px;width:100%;color: white;">侧栏区域</div>
        </co-page-side>
      </co-page-layout>
  `,
})
export class DemoComponent {
}
```
