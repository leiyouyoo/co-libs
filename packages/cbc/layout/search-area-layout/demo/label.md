---
title:
  zh-CN: 表单label
order: 5
---

## zh-CN

为输入控件增加label。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <co-search-area-layout coWidth="280">
        <co-search-area-item coLabel="单号">
          <input type="text" nz-input placeholder="请输入"/>
        </co-search-area-item>
        <co-search-area-item coLabel="必填" coRequired>
          <input type="text" nz-input placeholder="请输入"/>
        </co-search-area-item>
        <co-search-area-item coLabel="无冒号" coNoColon>
          <input type="text" nz-input placeholder="请输入"/>
        </co-search-area-item>
        <ng-template #label><nz-form-label><span style="color: red">自定义</span></nz-form-label></ng-template>
        <co-search-area-item [coLabel]="label">
          <input type="text" nz-input placeholder="请输入"/>
        </co-search-area-item>
    </co-search-area-layout>
  `,
})
export class DemoComponent {
}
```
