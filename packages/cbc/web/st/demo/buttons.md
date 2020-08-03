---
order: 7
title:
  zh-CN: 自定义按钮组
  en-US: Custom Buttons
---

## zh-CN

透过简单的配置产生一组日常按钮组（目标组件示例：[DemoModalComponent](https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/modal.component.ts)、[DemoDrawerComponent](https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/drawer.component.ts)）。

> 对话框由[ModalHelper](/theme/modal)处理，抽屉由[DrawerHelper](/theme/drawer)处理。

## en-US

Build a button group with the `buttons` property.

Generate a set of button group with a simple configuration (example code: [DemoModalComponent](https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/modal. Component.ts), [DemoDrawerComponent](https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/drawer.component.ts)).

> The modal is handled by [ModalHelper](/theme/modal) and the drawer is handled by [DrawerHelper](/theme/drawer).

```ts
import { Component } from '@angular/core';
import { STColumn } from '@co/cbc/web/st';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DemoModalComponent, DemoDrawerComponent } from '@shared';
import { timer } from 'rxjs';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="stComponent.addNewRow()">Add</button>
    <co-st #stComponent [data]="users" [columns]="columns" checkOnLoad></co-st>
  `,
})
export class DemoComponent {
  constructor(private message: NzMessageService) {}

  users: any[] = Array(10)
    .fill({})
    .map((_item: any, idx: number) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
        date: new Date(),
      };
    });
  columns: STColumn[] = [
    { title: '序号', type: 'no' },
    { title: '编号', index: 'id' },
    { title: '姓名', index: 'name', filter: { type: 'autocomplete' }, },
    { title: '年龄', index: 'age' },
    { title: '注册日期', index: 'date', type: 'date', filter: { type: 'date' }, },
    {
      title: '操作区',
      type: 'action',
      fixed: 'right',
      width: '100',
      buttons: [
        {
          text: 'Edit',
          icon: 'edit',
          type: 'modal',
          modal: {
            component: DemoModalComponent,
          },
          click: (_record, modal) => this.message.success(`重新加载页面，回传值：${JSON.stringify(modal)}`),
        },
        {
          text: 'Save',
          type: 'save',
          click: (_record, modal, s) => {
            _record._editing = false;
          },
        },
        {
          text: 'Cancel',
          type: 'cancel',
        },
        {
          text: 'Drawer',
          type: 'drawer',
          drawer: {
            title: '编辑',
            component: DemoDrawerComponent,
          },
          click: (_record, modal) => this.message.success(`重新加载页面，回传值：${JSON.stringify(modal)}`),
        },
        {
          icon: 'check-circle',
          click: record => this.message.info(`check-${record.name}`),
          iif: record => record.id % 2 === 0,
          iifBehavior: 'disabled',
          tooltip: `Is disabled button`,
        },
        {
          icon: 'delete',
          type: 'del',
          className: 'st__btn--red',
          pop: {
            title: 'Yar you sure?',
            okType: 'danger',
            icon: 'star',
          },
          click: (record, _modal, comp) => {
            this.message.success(`成功删除【${record.name}】`);
            comp!.removeRow(record);
          },
          iif: record => record.id % 2 === 0,
        },
        {
          text: 'Delay',
          type: 'delay',
          iif: (record) => record.id === 3,
          click: () => {
            return timer(1e3).toPromise().then(() => ({ action: `delete` }));
          },
        },
        {
          children: [
            {
              text: record => (record.id === 1 ? `过期` : `正常`),
              click: record => this.message.error(`${record.id === 1 ? `过期` : `正常`}【${record.name}】`),
            },
            {
              text: `审核`,
              click: record => this.message.info(`check-${record.name}`),
              iif: record => record.id % 2 === 0,
              iifBehavior: 'disabled',
              tooltip: 'This is tooltip',
            },
            {
              type: 'divider',
            },
            {
              text: `重新开始`,
              icon: 'edit',
              click: record => this.message.success(`重新开始【${record.name}】`),
            },
          ],
        },
      ],
    },
  ];
}
```
