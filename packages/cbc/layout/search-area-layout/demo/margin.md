---
title:
  zh-CN: 设置间距
order: 3
---

## zh-CN

设置右间距和下间距

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    coMarginRight：{{coMarginRight}}
    <nz-slider nzMin="4" nzMax="32" [(ngModel)]="coMarginRight" style="margin-bottom:8px;"></nz-slider>
    coMarginBottom：{{coMarginBottom}}
    <nz-slider nzMin="4" nzMax="24" [(ngModel)]="coMarginBottom" style="margin-bottom:8px;"></nz-slider>
    <co-search-area-layout [coMarginRight]="coMarginRight" [coMarginBottom]="coMarginBottom">
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
  coMarginBottom = 8;
  coMarginRight = 12;
  customer = 2;
  container = [3, 9];
}
```
