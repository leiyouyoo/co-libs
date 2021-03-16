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
    <co-commodity-picker-mobile 
      style="width:200px" 
      [(ngModel)]="selectedValue" 
      (coChanged)="nowSearch($event)"
    >
    </co-commodity-picker-mobile>
  </div>

    <div [formGroup]="validateForm">
    <co-commodity-picker-mobile 
      style="width:200px" 
      formControlName="countryId"
      (coChanged)="nowSearch($event)"
    >
    </co-commodity-picker-mobile>
  </div>
  `
})
export class CustomerPickerMobileComponent {
  selectedValue:any ="0e540cea-29ba-4619-a2f1-6e7b14a719c5";
  validateForm:any;


  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit() {
   this.validateForm = this.fb.group({
     countryId:['34c5606e-7a6b-4444-b06c-7a91c57388a2']
   })
  }

  nowSearch(data){
    console.log(data);
  }
}

```
