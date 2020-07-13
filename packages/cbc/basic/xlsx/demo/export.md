---
order: 2
title:
  zh-CN: 导出
  en-US: Export
---

## zh-CN

导出Excel并自动弹出保存对话框。


```ts
import { Component } from '@angular/core';
import { STColumn,CoXlsxService } from '@co/cbc';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="download()">Export</button>
    <co-st [data]="users" [ps]="3" [columns]="columns" class="mt-sm"></co-st>
    `,
})
export class DemoComponent {
  constructor(private xlsx: CoXlsxService) {}

  users: any[] = Array(100)
    .fill({})
    .map((_item: any, idx: number) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
      };
    });
  columns: STColumn[] = [
    { title: '编号', index: 'id', type: 'checkbox' },
    { title: '姓名', index: 'name' },
    { title: '年龄', index: 'age' },
  ];

  download() {
    const data = [this.columns.map(i => i.title)];
    this.users.forEach(i =>
      data.push(this.columns.map(c => i[c.index as string])),
    );
    this.xlsx.export({
      sheets: [
        {
          data: data,
          name: 'sheet name',
        },
      ],
    });
  }
}
```
