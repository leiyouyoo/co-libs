---
title:
  zh-CN: 指定一行列数
order: 1
---

## zh-CN

指定一行显示的列数，强制换行

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
      cols：
      <nz-radio-group [(ngModel)]="cols" style="margin-bottom:8px;">
        <label nz-radio [nzValue]="3">3</label>
        <label nz-radio [nzValue]="4">4</label>
        <label nz-radio [nzValue]="5">5</label>
      </nz-radio-group>
    <co-search-area-layout [coCols]="cols">
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
        <label nz-checkbox>只搜索xx类型</label>
      </co-search-area-item>
      <co-search-area-item>
        <button nz-button nzType="primary"><i nz-icon nzType="search" nzTheme="outline"></i>搜索</button>
        <button nz-button>重置</button>
      </co-search-area-item>
    </co-search-area-layout>
  `,
})
export class DemoComponent {
  cols = 5;
  customer = 2;
  container = [3, 9];
}
```
