---
title:
  zh-CN: 抽屉
order: 1
---

## zh-CN

可拉伸侧栏和抽屉。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
      
<co-page-layout>
  <co-page-main [coMaxWidth]="sideDrawer.isOpen?1200:undefined">
    <co-page-layout>
      <co-toolbar>
        <co-toolbar-item>
          <button nz-button nzType="primary" (click)="sideDrawer.open()"><i nz-icon nzType="plus" nzTheme="outline"></i>打开抽屉</button>
        </co-toolbar-item>
        <co-toolbar-item>
          <button nz-button nzType="danger" (click)="sideDrawer.close()"><i nz-icon nzType="delete"></i>关闭抽屉</button>
        </co-toolbar-item>
        <co-toolbar-item>
          <button nz-button>其他操作</button>
        </co-toolbar-item>
      </co-toolbar>
      <co-search-area-layout>
        <co-search-area-item>
          <input type="text" nz-input placeholder="请输入" />
        </co-search-area-item>
        <co-search-area-item>
          <input type="text" nz-input placeholder="请输入" />
        </co-search-area-item>
        <co-search-area-item>
          <input type="text" nz-input placeholder="请输入" />
        </co-search-area-item>
        <co-search-area-item>
          <input type="text" nz-input placeholder="请输入" />
        </co-search-area-item>
        <co-search-area-item coWidth="auto">
          <button nz-button nzType="primary"><i nz-icon nzType="search" nzTheme="outline"></i>搜索</button>
          <button nz-button>重置</button>
        </co-search-area-item>
        <co-search-area-extra>
          <co-search-area-item>
            <input type="text" nz-input placeholder="请输入" />
          </co-search-area-item>
          <co-search-area-item>
            <input type="text" nz-input placeholder="请输入" />
          </co-search-area-item>
          <co-search-area-item>
            <input type="text" nz-input placeholder="请输入" />
          </co-search-area-item>
          <co-search-area-item>
            <input type="text" nz-input placeholder="请输入" />
          </co-search-area-item>
        </co-search-area-extra>
      </co-search-area-layout>
      <co-page-main>
        <div style="display: flex;justify-content: center;align-items: center;background: #9e9e9e;height: 300px;width:100%;color: white;">主内容区域</div>
      </co-page-main>
      <co-page-side coWidthResizable coMinWidth="20%">
        <div style="display: flex;justify-content: center;align-items: center;background: #8f8f88;height: 300px;width:100%;color: white;">侧栏区域</div>
      </co-page-side>
    </co-page-layout>
  </co-page-main>
  <co-page-side-drawer #sideDrawer (coOnClose)="$event.close()" coWidthResizable>
    <div style="display: flex;justify-content: center;align-items: center;background: #8f8f88;height: 100%;color: white;">抽屉内容</div>
  </co-page-side-drawer>
</co-page-layout>

  `,
})
export class DemoComponent {
}
```
