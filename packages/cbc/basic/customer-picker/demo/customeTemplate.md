---
order: 2
title: 演示
---

定义选项的值
通过 customTemplate 自定义 选择项 显示的内容。
通过 customOption 自定义下拉菜单选项显示的内容。

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer-picker-demo',
  template: `
<customer-picker 
    [optionLabel]="optionLabel" 
    [optionValue]="optionValue" [(ngModel)]="value"
    [coCustomTemplate]="selectedTemplate"
    [coCustomOption]="optionTemplate"
>
</customer-picker>
<ng-template #selectedTemplate let-selected>
    <div class="ant-select-selection-item-content"><i nz-icon nzType="Apple"></i> {{ selected.nzLabel }}</div>
</ng-template>
<ng-template #optionTemplate let-item>
    <div style="color: red">{{ optionLabel(item) }}</div>
    <div style="display: flex;">
      <div style="width: 50%;">{{ item.contacts.length }} Contact person</div>
      <div style="width: 50%;">
        <span class="iconfont icon-dingwei"></span>{{ item.locations.length }}
        Position
      </div>
    </div>
</ng-template>
`,
})
export class CustomerPickerDemo implements OnInit {
  
  value: any = 2;
  optionLabel = (v: any) => `${v.name} ${v.phone}`;
  optionValue = (v: any) => v.id;

  constructor() {
  }

  ngOnInit(): void {
  }

}
```
