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
    <co-commodity-picker coDropdownMode="custom" [coItemRender]="itemTemplate" [(ngModel)]="selectedValue"  >
    <ng-template #itemTemplate let-item>
    <p> {{item.name}}(<span style='color:red;'>{{item.tel}}</span>)</p>
    </ng-template>
    </co-commodity-picker>
    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class CustomerPickerItemTemplateComponent {
  selectedValue = 'd86b5fdd-edcb-e111-8d6d-0026551ca87b';
}



```
