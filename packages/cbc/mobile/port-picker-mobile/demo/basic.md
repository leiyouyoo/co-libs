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
  selectedValue:string ="80ef556c-69a4-e911-b0c1-f71612d60fdf";
  validateForm:any;


  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit() {
   this.validateForm = this.fb.group({
     countryId:['2d3f1d05-d451-e911-b0c1-f71612d60fdf']
   })
  }

  nowSearch(data){
    console.log(data);
  }
}

```
