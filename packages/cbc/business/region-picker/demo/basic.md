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
            <h4>地区</h4> 
            <co-region-picker style="width:200px" 
              [(ngModel)]="regionValue" 
              [coShowSearch]="showSeacrch" 
              [coMode]="mode" 
              [regionReq] = "regionReq"
              [coMaxMultipleCount]="maxMultipleCount"
              (ngModelChange)="regionChange($event)"
            >
            </co-region-picker>
            <p style="word-break: break-word;">{{regionValue}}</p>
        </div>
        <div style="width:50%;display: inline-block;vertical-align: top;">
           <h4>港口</h4> 
           <co-port-picker style="width:200px" 
            [portReq] = "portReq"
            [coMode]="mode" 
            [coMaxMultipleCount]="maxMultipleCount">
           </co-port-picker>
        </div>
      </div>
  `
})
export class RegionPickerBasicComponent {
    mode = 'multiple';
    maxMultipleCount = 1;
    //入参
    regionReq = {
      AreaIds:["56c5cf93-1820-4bf5-b5da-fee418596fed"],
      Recursive : true,
    };
    //入参
    portReq = {
     IsOcean: true,
     RegionIds :[],
     isPaged:  false ,
     MaxResultCount: 1 ,
    };
    regionChange( ev ){
        this.portReq = {
         IsOcean: true,
         RegionIds :ev,
         isPaged:  false ,
         MaxResultCount: 1 ,
        };
    } 

}

```
