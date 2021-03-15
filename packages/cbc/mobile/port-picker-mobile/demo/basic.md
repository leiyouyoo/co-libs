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
  selectedValue:string ="d4dad39a-a5ec-49a5-bfaa-40adc5c4572f";
  validateForm:any;


  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit() {
   this.validateForm = this.fb.group({
     countryId:['f5d0af85-57af-448d-a432-9ba5833f69b0']
   })
  }

  nowSearch(data){
    console.log(data);
  }
}

```
