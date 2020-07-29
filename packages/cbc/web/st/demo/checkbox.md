---
order: 3
title:
  zh-CN: 可选择
  en-US: Checkbox
---

## zh-CN

利用 `change` 监听所选的数据。

## en-US

Use `change` event get selected data.

```ts
import { Component, ViewChild } from '@angular/core';
import { STColumn, STData, STChange, STComponent } from '@co/cbc/web/st';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-ComponentsStCheckboxComponent',
  template: `
    <button nz-button nzType="primary" (click)="getChecked()">Get checked</button>
    <co-st
      #st
      [data]="url" [columns]="columns"
      [req]="{params: params}" [res]="{process: dataProcess}"
      (change)="change($event)"></co-st>`,
})
export class ComponentsStCheckboxComponentComponent {
  @ViewChild('st') st: STComponent;
  url = `/users?total=100`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '编号', index: 'id.value', type: 'checkbox' },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];
  constructor(private messageService: NzMessageService,) {
  }
  change(e: STChange) {
    console.log('change', e);
  }
  dataProcess(data: STData[]) {
    return data.map((i: STData, index: number) => {
      i.disabled = index === 0;
      return i;
    });
  }
  getChecked() {
    console.log(this.st.getCheckedList());
    this.messageService.success('打开控制台查看')
  }
}
```
