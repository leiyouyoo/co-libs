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
    <co-customer-picker coDropdownMode="custom" [coItemRender]="itemTemplate" [(ngModel)]="selectedValue"  >
    <ng-template #itemTemplate let-item>
    <p> {{item.name}}(<span style='color:red;'>{{item.tel}}</span>)</p>
    </ng-template>
    </co-customer-picker>
    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class CustomerPickerItemTemplateComponent {
  selectedValue = '25f6f24a-22ea-4b85-b916-1345a122d295';
}



```
