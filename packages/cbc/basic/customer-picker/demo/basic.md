---
order: 1
title: 基本用法
---

基本示例。


```ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'customer-picker-demo',
  template: `
      <h4 nz-typography>已选option的值：{{value|json}}</h4>
      <customer-picker [coDisabled]="disabled" [coMode]="mode" [data]="customerList" [(ngModel)]="value"></customer-picker>
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
  <nz-option nzCustomContent *ngFor="let customer of customerList" [nzLabel]="customer.name" nzValue="customer.id">
    {{ customer.name }}
  </nz-option>
`,
})
export class CustomerPickerDemo implements OnInit {

  value: any;
  disabled = false;
  mode = "default";
  customerList = [];

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
