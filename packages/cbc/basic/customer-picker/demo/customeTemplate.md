---
order: 2
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

定义选项的值
通过 customTemplate 自定义 选择项 显示的内容。
通过 customOption 自定义下拉菜单选项显示的内容。

## en-US

The simplest usage.

```ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'customer-picker-demo',
  template: `
<customer-picker 
    [disabled]="disabled" 
    [mode]="mode" 
    [customerList]="customerList" 
    [optionLabel]="optionLabel" 
    [optionValue]="optionValue" 
    [(ngModel)]="value"
    [customTemplate]="selectedTemplate"
    [customOption]="optionTemplate"
>
</customer-picker>
<ng-template #selectedTemplate let-selected>
    <i nz-icon [nzType]="selected.nzValue"></i> {{ selected.nzLabel }} 
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

  value: any;
  disabled = false;
  mode = "default";
  customerList = [];

  optionLabel = (v: any) => `${v.name} ${v.phone}`;
  optionValue = (v: any) => v.id;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<any>('/customers', { params: { total: '50' } }).subscribe(value => {
      console.log(value);
      this.customerList = value.list
    });
  }

}
```
