---
order: 6
title:
  zh-CN: 可展开
  en-US: Expandable Row
---

## zh-CN

使用 `#expand` 模板实现可展开，允许接收 `item`、`index`、`column` 三个值。附加可实现：嵌套子表格。

## en-US

Use `#expand` template implement expandable, allowing you to receive three values: `item`, `index`, `column`. Additional achievable: nested subtables.

```ts
import { Component, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@co/cbc/web/st';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-ComponentsStExpandComponent',
  template: `
    <button nz-button nzType="primary" (click)="getChecked()">Get checked</button>
    <co-st #st [data]="users" [columns]="columns" [expand]="expand" expandRowByClick expandAccordion>
      <ng-template #expand let-item let-index="index" let-column="column">
        {{ item.description }}
        <co-st [data]="item.items"
               [page]="{ show: false }"
               [columns]="childColumns"
               [showFilters]="false"></co-st>
      </ng-template>
    </co-st>
  `,
})
export class ComponentsStExpandComponentComponent {
  @ViewChild('st') st: STComponent;
  users: any[] = Array(10)
    .fill({})
    .map((_item: any, idx: number) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
        // 是否显示展开按钮
        showExpand: idx !== 0,
        items: new Array(3).fill(0).map((o, i) => ({a: i, b: `${i}${i}`})),
        description: `${idx + 1}. My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.`,
      };
    });
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '姓名', index: 'name' },
    { title: '年龄', index: 'age' },
    {
      buttons: [
        {
          text: 'Button',
        },
      ],
    },
  ];
  childColumns: STColumn[] = [
    { title: 'A', index: 'a' },
    { title: 'B', index: 'b' },
  ];
  constructor(private messageService: NzMessageService,) {
  }
  getChecked() {
    console.log(this.st.getCheckedList());
    this.messageService.success('打开控制台查看')
  }
}

```
