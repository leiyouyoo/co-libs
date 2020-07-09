---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

基础用法。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <div style="width:50%;display: inline-block;">
        <h4>片区</h4> 
        <co-area-picker style="width:200px" 
          [(ngModel)]="areaValue" 
          [coShowSearch]="showSeacrch" 
          [coMode]="mode" 
          [coMaxMultipleCount]="maxMultipleCount"
          (ngModelChange)="areaChange($event)"
        >
        </co-area-picker>
        <p>{{areaValue}}</p>
    </div>
    <div style="width:50%;display: inline-block;vertical-align: top;">
       <h4>地区</h4> 
       <co-region-picker style="width:200px" 
        [regionReq] = "regionReq"
        [coMode]="mode" 
        [(ngModel)]="regionValue" 
        [coMaxMultipleCount]="maxMultipleCount">
       </co-region-picker>
       <p>{{regionValue}}</p>
    </div>
  </div>
  `
})
export class AreaPickerBasicComponent {
    areaValue:any;
    showSeacrch :boolean = false;
    mode = 'multiple';
    maxMultipleCount = 1;   
    regionValue :any[] = [];
    regionReq = {
      AreaIds:[],
      Recursive : true,
    };
    areaChange( ev ){
        this.regionReq = {
          AreaIds:ev,
          Recursive : true,
        };
    } 

}





```
