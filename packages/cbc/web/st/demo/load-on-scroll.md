---
order: 8
title:
  zh-CN: 滚动加载
  en-US: Load on scroll
---

## zh-CN

需要手动设置`[scroll.y]` 或者 使用 `calcScroll`

## en-US

```ts
import { Component } from '@angular/core';
import { STColumn } from '@co/cbc/web/st';

@Component({
  selector: 'app-ComponentsStLoadOnScrollComponent',
  template: `
    <div style="height: 400px;">
      <co-st loadOnScroll virtualScroll [virtualItemSize]="77" [virtualMinBufferPx]="5" [virtualMaxBufferPx]="5"
             [data]="url" [columns]="columnsX" [ps]="6" calcScroll [showFilters]="false" style="height: 100%;"></co-st>
    </div>
  `,
})
export class ComponentsStLoadOnScrollComponentComponent {
  url = `/users?total=100&maxResultCount=6`;
  columnsX: STColumn[] = [
    { title: '编号1', index: 'id', },
    { title: '编号2', index: 'id', },
    { title: '编号3编号3', index: 'id', },
    { title: '编号4编号4', index: 'id',  },
    { title: '编号5编号5', index: 'id',  },
    { title: '编号6编号6', index: 'id',  },
    { title: '编号7编号7', index: 'id',  },
    { title: '编号8编号8', index: 'id',  },
    { title: '编号8编号8', index: 'id',  },
    { title: '编号8编号8', index: 'id',  },
    { title: '编号8编号8', index: 'id',  },
    { title: '编号8编号8', index: 'id',  },
    { title: '姓名10姓名10', index: 'name', },
    { title: '姓名11', index: 'name', width: 223 },
    { title: '年龄12', index: 'age', },
  ];
}



```
