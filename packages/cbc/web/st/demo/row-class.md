---
order: 3
title:
  zh-CN: 行class 样式
  en-US: Row class
---

## zh-CN

`[rowClassName]` 的使用及已内置的样式
已有class: 
`.st-row-red`  红色

## en-US


```ts
import { Component } from '@angular/core';
import { STColumn, STChange, STData } from '@co/cbc/web/st';

@Component({
  selector: 'app-ComponentsStRowClassComponent',
  template: `
  <co-st [data]="url"
         [rowClassName]="getRowClassName"
         [req]="{params: params}"
         [columns]="columns"></co-st>`,
})
export class ComponentsStRowClassComponentComponent {
  url = `/users?results=3`;
  params = { a: 1, b: 2 };
  // mock
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    {
      title: '',
      buttons: [
        {
          text: 'btn',
          type: 'link',
          click: (e: any) => console.log('btn click', e),
        },
      ],
    },
  ];

  getRowClassName(record: STData, index: number, ) {
    switch (index) {
      case 0:
        return `st-row-red`
      default:
        return ``;
    }
  }
}
```
