---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

基础用法实列。

```ts
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-demo',
  template: `
  <div>
    <co-customer-picker-mobile 
      style="width:200px" 
      [(ngModel)]="selectedValue" 
      (coChanged)="nowSearch($event)"
    >
    </co-customer-picker-mobile>
  </div>

    <div [formGroup]="validateForm">
    <co-customer-picker-mobile 
      style="width:200px" 
      formControlName="countryId"
      (coChanged)="nowSearch($event)"
    >
    </co-customer-picker-mobile>
  </div>
  `
})
export class CustomerPickerMobileComponent {
  selectedValue:any ="0b7b33a4-ef8d-417d-b9cf-a878c56444db";
  validateForm:any;


  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit() {
   this.validateForm = this.fb.group({
     countryId:['a6cd909b-d32e-e711-80d9-2047477d7a58']
   })
  }

  nowSearch(data){
    console.log(data);
  }
}

```
