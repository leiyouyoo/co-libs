---
order: 3
title:
  zh-CN: 行事件
  en-US: Row event
---

## zh-CN

利用 `(change)` 实现点击行回调，因于DOM事件在同一元素上无法区分单或双击，若明确不需要双击事件，可以设定 `rowClickTime` 值为 `0` 以防止 `200ms` 迟延。

默认禁用button click 冒泡，可以用 `[buttonPropagation]` 开启冒泡

> 打开控制面板了解打印明细。

## en-US

Use `(change)` to implement click line callback, because DOM events can't distinguish single or double click on the same HTML element. If you don't need double-click event, you can set `rowClickTime` value to `0` to prevent `200ms` delay.

> Open the control panel for print details.

```ts
import { Component } from '@angular/core';
import { STColumn, STChange } from '@co/cbc/web/st';

@Component({
  selector: 'app-demo',
  template: `
  <co-st [data]="url"
    [req]="{params: params}" [columns]="columns"
    (change)="_click($event)"></co-st>`,
})
export class DemoComponent {
  url = `/users?maxResultCount=3`;
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

  _click(e: STChange) {
    console.log(e);
  }
}
```
