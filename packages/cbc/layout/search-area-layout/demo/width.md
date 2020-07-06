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
    <nz-slider style="margin-bottom:8px;" nzMin="120" nzMax="400" [(ngModel)]="width"></nz-slider>
    <br/>
    <co-search-area-layout [coWidth]="width">
      <co-search-area-item>
        <input type="text" nz-input placeholder="请输入"/>
      </co-search-area-item>
      <co-search-area-item>
        <co-customer-picker style="width:100%;" coSize="default" [(ngModel)]="customer"></co-customer-picker>
      </co-search-area-item>
      <co-search-area-item>
        <co-container-picker style="width:100%;" coSize="default" [(ngModel)]="container"></co-container-picker>
      </co-search-area-item>
      <co-search-area-item>
        <label nz-checkbox>只搜索xx类型</label>
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
  `,
})
export class DemoComponent {
  width = 200;
  customer = 2;
  container = [3, 9];
}
```
