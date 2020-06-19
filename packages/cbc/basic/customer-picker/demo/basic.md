---
order: 1
title: 基本用法
---

基本示例。


```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer-picker-demo',
  template: `
      <h4 nz-typography>value：{{value|json}}</h4>
      <customer-picker [coDisabled]="disabled" [coMode]="mode" [(ngModel)]="value"></customer-picker>
      <br/>
      <br/>
    <nz-card nzTitle="配置项" style="width:500px;">
        <nz-form-item>
            <nz-form-label [nzSpan]="5">是否禁用</nz-form-label>
            <nz-form-control>
              <nz-switch
                  [(ngModel)]="disabled"
               >
               </nz-switch>
            </nz-form-control>
        </nz-form-item>
        <nz-form-item>
            <nz-form-label [nzSpan]="5">模式</nz-form-label>
            <nz-form-control>
              <nz-radio-group [(ngModel)]="mode">
                <label nz-radio nzValue="multiple">multiple</label>
                <label nz-radio nzValue="tags">tags</label>
                <label nz-radio nzValue="default">default</label>
              </nz-radio-group>
            </nz-form-control>
        </nz-form-item>
    </nz-card>
`,
})
export class CustomerPickerDemo implements OnInit {

  value: any;
  disabled = false;
  mode = "default";
  data = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
```
