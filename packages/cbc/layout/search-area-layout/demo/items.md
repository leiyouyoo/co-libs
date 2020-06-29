---
title:
  zh-CN: 对个体单独设置
order: 4
---

## zh-CN

对个体单独设置间距和宽度

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <co-search-area-layout coWidth="210" coMarginRight="16" coMarginBottom="8">
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
      <co-search-area-item coMarginRight="226">
        <input type="text" nz-input placeholder="请输入"/>
      </co-search-area-item>
      <co-search-area-item coWidth="420">
        <input type="text" nz-input placeholder="请输入"/>
      </co-search-area-item>
    </co-search-area-layout>
  `,
})
export class DemoComponent {
  width = 180;
  coMarginBottom = 8;
  coMarginRight = 12;
  customer = 2;
  container = [3, 9];
  advanced = false;
}
```
