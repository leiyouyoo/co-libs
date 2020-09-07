---
order: 1
title:
  zh-CN: 基础 
  en-US: Basic
---

## zh-CN

`(coNzOptionExtraChange)`

## en-US

`(coNzOptionExtraChange)`

```ts
import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-ComponentsNzSelectExtraBasicComponent',
  template: `
    <nz-select ngModel (coNzOptionExtraChange)="onChange($event)" style="width: 200px;">
      <nz-option *ngFor="let o of options"
                 [coNzOptionExtra]="o"
                 [nzLabel]="o.name"
                 [nzValue]="o.value"></nz-option>
    </nz-select>
    <div>
      coNzOptionExtraChange: {{ changeValue | json }}
    </div>
  `,
})
export class ComponentsNzSelectExtraBasicComponentComponent {
  options = new Array(6)
    .fill({})
    .map((o, i) => ( { name: `option${i}`, value: i, } ))
  changeValue = 0;

  constructor() {}

  onChange(e) {
    this.changeValue = e;
  }
}

```

