---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component } from '@angular/core';
import { ACLService } from '@co/acl';
import { SFSchema } from '@co/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <sf [schema]="schema" (formSubmit)="submit($event)"></sf>
    <button nz-button nzType="primary" (click)="acl.setFull(true)">Full</button>
    <button nz-button nzType="primary" (click)="acl.setFull(false)">Not Full</button>
    <button nz-button nzType="primary" (click)="acl.setRoles(['admin'])">Admin Role</button>
    <button nz-button nzType="primary" (click)="acl.setRoles(['user'])">User Role</button>
  `,
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: 'name-user',
        ui: {
          acl: 'user',
        },
      },
      age: {
        type: 'string',
        title: 'age-admin',
        ui: {
          acl: 'admin',
        },
      },
    },
    required: ['name'],
  };
  constructor(public msg: NzMessageService, public acl: ACLService) {
  }
  submit(value: any) {
    this.msg.success(JSON.stringify(value));
  }
}
```
