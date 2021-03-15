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
    <co-customer-service-picker-mobile
      style="width:200px" 
      [(ngModel)]="selectedValue" 
      (coChanged)="nowSearch($event)"
    >
    </co-customer-service-picker-mobile>
  </div>
  `
})
export class CustomerPickerMobileComponent {
  selectedValue:string =1018;
  validateForm:any;


  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit() {

  }

  nowSearch(data){
    console.log(data);
  }
}

```
