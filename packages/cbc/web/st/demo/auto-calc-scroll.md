---
order: 8
title:
  zh-CN: 自动计算[scroll]
  en-US: Auto calculate scroll
---

## zh-CN

`[scroll.y]` 根据父元素高度设值
`[scroll.x]` 根据组件内的table 元素宽度设置

## en-US

```ts
import { Component } from '@angular/core';
import { STColumn } from '@co/cbc/web/st';

@Component({
  selector: 'app-ComponentsStAutoCalcScrollComponent',
  template: `
    <div style="height: 120px;">
      <co-st [data]="users" [columns]="columns" calcScroll [showFilters]="false" style="height: 100%;"></co-st>
    </div>
  `,
})
export class ComponentsStAutoCalcScrollComponentComponent {
  users: any[] = Array(10)
    .fill({})
    .map((_item: any, idx: number) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
      };
    });
  columns: STColumn[] = [
    { title: '编号1', index: 'id', fixed: 'left', width: 100 },
    { title: '编号2', index: 'id', fixed: 'left', width: 100 },
    { title: '编号3', index: 'id', fixed: 'left', width: 100 },
    { title: '编号4', index: 'id', width: 280 },
    { title: '编号5', index: 'id', width: 280 },
    { title: '编号6', index: 'id', width: 280 },
    { title: '编号7', index: 'id', width: 280 },
    { title: '编号8', index: 'id', width: 280 },
    { title: '编号8', index: 'id', width: 280 },
    { title: '编号8', index: 'id', width: 280 },
    { title: '编号8', index: 'id', width: 280 },
    { title: '编号8', index: 'id', width: 280 },
    { title: '姓名10', index: 'name', fixed: 'right', width: 100 },
    { title: '姓名11', index: 'name', fixed: 'right', width: 100 },
    { title: '年龄12', index: 'age', fixed: 'right', width: 100 },
  ];
}

```
