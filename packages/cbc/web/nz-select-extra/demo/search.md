---
order: 2
title:
  zh-CN: key 搜索
  en-US: Search by key
---

## zh-CN

[coSearchByExtraKey] 从coNzOptionExtra 绑定的对象的label 搜索，此时搜索option 无匹配项，搜label 有

## en-US

[coSearchByExtraKey] search by label 

```ts
import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-ComponentsNzSelectExtraSearchComponent',
  template: `
    <nz-select ngModel
               nzShowSearch
               (coNzOptionExtraChange)="onChange($event)"
               [coSearchByExtraKey]="['label']"
               style="width: 200px;">
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
export class ComponentsNzSelectExtraSearchComponentComponent {
  options = new Array(6)
    .fill({})
    .map((o, i) => ( { name: `option${i}`, label: `label${i}`, value: i, } ))
  changeValue;

  constructor() {}

  onChange(e) {
    this.changeValue = e;
  }
}

```
