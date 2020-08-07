---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

基础用法。

```ts
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-ComponentsCascaderBasicComponent',
  template: `
  <div>
    <co-cascader [ngModel]="value" [coShowSearch]="true" (ngModelChange)="onChanges($event)"></co-cascader>

    <p>{{v}}</p>
  </div>
  `
})
export class ComponentsCascaderBasicComponentComponent {
    value;
    v ;
    constructor(private cdr: ChangeDetectorRef,) {
      setTimeout(() => {
        this.value = '1584502c-9d33-e611-8547-0026551ca878'
        this.cdr.detectChanges();
      }, 2e3)
    }
   onChanges($event){
      this.v = $event;
  }

}

```
