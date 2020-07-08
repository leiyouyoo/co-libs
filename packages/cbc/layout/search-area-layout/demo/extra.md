---
title:
  zh-CN: 高级搜索
order: 6
---

## zh-CN

增加额外搜索栏。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
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
        <co-search-area-extra>
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
        </co-search-area-extra>
     </co-search-area-layout>
  `,
})
export class DemoComponent {
}
```
