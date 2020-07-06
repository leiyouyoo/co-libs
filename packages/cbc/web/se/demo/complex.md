---
order: 10
title:
  zh-CN: 不规则布局
  en-US: Irregular Layout
---

## zh-CN

利用 `col` 可以构建复杂不规则布局。

## en-US

Use `col` to build complex irregular layouts.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <form nz-form #f="ngForm" co-se-container size="compact" gutter="24">
      <co-se-title>Title 1</co-se-title>
      <co-se label="ID" col="1" [optionalHelp]="optionalHelpTpl">
        1000
        <ng-template #optionalHelpTpl>
          Via by ng-template
        </ng-template>
      </co-se>
      <co-se label="Name" required col="3">
        <input type="text" nz-input [(ngModel)]="i.user_name" name="user_name" required />
      </co-se>
      <co-se label="Age" required col="3">
        <nz-select [(ngModel)]="i.user_age" name="user_age" nzAllowClear nzPlaceHolder="Choose">
          <nz-option [nzValue]="1" nzLabel="1"></nz-option>
          <nz-option [nzValue]="2" nzLabel="2"></nz-option>
          <nz-option [nzValue]="3" nzLabel="3"></nz-option>
          <nz-option [nzValue]="4" nzLabel="4"></nz-option>
          <nz-option [nzValue]="5" nzLabel="5"></nz-option>
        </nz-select>
      </co-se>
      <co-se label="Brithday" required col="3">
        <nz-date-picker [(ngModel)]="i.user_birthday" name="user_birthday" nzShowTime></nz-date-picker>
      </co-se>
      <co-se label="App Key" required>
        <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required />
      </co-se>
      <co-se label="App Secret" required>
        <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32" />
      </co-se>
      <co-se label="Phone Number" required>
        <nz-input-group [nzAddOnBefore]="addOnBeforeTemplate">
          <ng-template #addOnBeforeTemplate>
            <nz-select [(ngModel)]="i.phoneNumberPrefix" name="phoneNumberPrefix" style="width: 70px;">
              <nz-option nzLabel="+86" nzValue="+86"></nz-option>
              <nz-option nzLabel="+87" nzValue="+87"></nz-option>
            </nz-select>
          </ng-template>
          <input type="text" nz-input [(ngModel)]="i.phoneNumber" name="phoneNumber" required maxlength="32" />
        </nz-input-group>
      </co-se>
      <co-se>
        <label nz-checkbox [(ngModel)]="i.agree" name="agree">
          <span>I have read the <a>agreement</a></span>
        </label>
      </co-se>
      <co-se-title>Title 2</co-se-title>
      <co-se label="Long Long Long Long Long Long Label" col="1">
        <textarea [(ngModel)]="i.comment" name="comment" nz-input rows="2" placeholder="write any thing"></textarea>
      </co-se>
      <co-se col="1">
        <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
      </co-se>
    </form>
  `,
})
export class DemoComponent {
  i: any = {
    phoneNumberPrefix: '+86',
    agree: true,
    user_age: 3,
  };
}
```
