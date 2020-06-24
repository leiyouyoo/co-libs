---
title:
  zh-CN: 项模板样例
  en-US: Item Template Usage
order: 3
---

## zh-CN

基于coItemRender设置项模板样例.


```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <div>
    <co-shipname-picker coDropdownMode="custom" [coItemRender]="itemTemplate" [(ngModel)]="selectedValue"  >
    <ng-template #itemTemplate let-item>
    <p> {{item.name}}(<span style='color:red;'>{{item.tel}}</span>)</p>
    </ng-template>
    </co-shipname-picker>
    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class ShipnamePickerItemTemplateComponent {
  selectedValue: string = 'abbebcea-11af-41c0-aeb0-61f1c9ad0e4f';
}



```
