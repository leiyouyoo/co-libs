---
order: 3
title:
  zh-CN: 行class 样式
  en-US: Row class
---

## zh-CN

`[rowClassName]` 的使用及已内置的样式

已有class: 
`.st-row-error`  红色
`.st-row-error-text`  文字红色
`.st-row--secondary` 蓝色

`.st-row-line-through` 删除样式，如果个别列需排除需要在columns 定义里加上 `className: 'no-line-through'`

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
  url = `/users`;
  params = { a: 1, b: 2 };
  // mock
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    {
      title: '',
      className: 'no-line-through',
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
     switch (record.id) {
          case 1:
            return `st-row-error`;
          case 2:
            return `st-row-error-text`;
          case 3:
            return `st-row-line-through`;
          case 4:
            return `st-row-secondary`;
          default:
            return ``;
        }
  }
}
```
