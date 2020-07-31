---
order: 5
title:
  zh-CN: 大小
  en-US: Size
---

## zh-CN

Size

## en-US

Size

```ts
import { Component } from '@angular/core';
import { STColumn } from '@co/cbc/web/st';

@Component({
  selector: 'app-demo',
  template: `
       <div>Size: default</div>
    <co-st #st1 [data]="url" [req]="{ params: params }" [columns]="columns" multiSort></co-st>
    <div>Size: small</div>
    <co-st #st2 size="small" [data]="url" [req]="{ params: params }" [columns]="columns" multiSort></co-st>
  `,
})
export class DemoComponent {
  url = `/users?total=200`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
      { title: '编号', index: 'id' },
      { title: '头像', type: 'img', width: 80, index: 'picture.thumbnail',
      },
      {
        title: '姓名',
        index: 'name.last',
        format: (item, _col, index) => `${index + 1}: ${item.name.last} ${item.name.first}`,
        sort: true,
      },
      {
        title: '国家',
        index: 'nat',
        filter: {
          menus: [{ text: '中国', value: 'CH' }, { text: '美国', value: 'US' }, { text: '德国', value: 'DE' }],
        },
        sort: true,
      },
      {
        title: '性别',
        index: 'gender',
        filter: {
          menus: [{ text: 'male', value: 'male' }, { text: 'female', value: 'female' }],
          multiple: false,
        },
        sort: true,
      },
      { title: '注册时间', type: 'date', index: 'registered' },
    ];
}
```
