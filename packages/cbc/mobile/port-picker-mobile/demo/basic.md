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
    <co-port-picker-mobile 
      style="width:200px" 
      [(ngModel)]="selectedValue" 
      (coChanged)="nowSearch($event)"
    >
    </co-port-picker-mobile>
  </div>

    <div [formGroup]="validateForm">
    <co-port-picker-mobile 
      style="width:200px" 
      formControlName="countryId"
      (coChanged)="nowSearch($event)"
    >
    </co-port-picker-mobile>
  </div>
  `
})
export class PortPickerMobileComponent {
  selectedValue:string ="0b7b33a4-ef8d-417d-b9cf-a878c56444db";
  validateForm:any;


  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit() {
   this.validateForm = this.fb.group({
     countryId:['0b7b33a4-ef8d-417d-b9cf-a878c56444db']
   })
  }

  nowSearch(data){
    console.log(data);
  }
}

```
