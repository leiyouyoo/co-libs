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
    <co-flight-picker coDropdownMode="custom" [coItemRender]="itemTemplate" [(ngModel)]="selectedValue"  >
    <ng-template #itemTemplate let-item>
    <p> {{item.no}}(<span style='color:red;'>{{item.no}}</span>)</p>
    </ng-template>
    </co-flight-picker>
    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class FlightPickerItemTemplateComponent {
  selectedValue: string = '72e72331-dbc5-452b-8dc3-fecddc11290e';
}



```
