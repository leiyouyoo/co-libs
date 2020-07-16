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
    <co-cascader [coShowSearch]="true" (coModelChange)="onChanges($event)"></co-cascader>
 
    <p>{{value}}</p>
  </div>
  `
})
export class CascaderBasicComponent {
    value;
   onChanges($event){
      this.value = $event;
  } 

}





```
