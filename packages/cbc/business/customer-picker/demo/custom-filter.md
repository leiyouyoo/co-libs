---
title:
  zh-CN: 自定义过滤条件
  en-US: Custom Filters
order: 0
---

## zh-CN

自定义过滤条件

```ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerSearchScope } from '@co/cds';

@Component({
  selector: 'app-demo',
  template: `
  <form class="form-style" nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()" [nzLayout]="'vertical'">
    <nz-form-item>
      <nz-form-label nzRequired nzFor="customer">客户</nz-form-label>
      <nz-form-control nzErrorTip="Please input your customer!">
        <co-customer-picker style="width: 100%;" formControlName="customerId" [coFilter]="customerFilter"> </co-customer-picker>
      </nz-form-control>
    </nz-form-item>
    </form>
  `,
})
export class CustomerPickerBasicComponent implements OnInit {
  validateForm!: FormGroup;
  customerFilter: any = {
    scope: CustomerSearchScope.Department
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      customerId: [null, [Validators.required]],
    });
  }
}


```
