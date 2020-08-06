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
    <co-cascader [coValue]="value" [coShowSearch]="true" (coModelChange)="onChanges($event)"></co-cascader>
 
    <p>{{v}}</p>
  </div>
  `
})
export class CascaderBasicComponent {
    value = '1584502c-9d33-e611-8547-0026551ca878';
    v ;
   onChanges($event){
      this.v = $event;
  } 

}





```
