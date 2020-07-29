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
    <co-shipping-line-picker coDropdownMode="custom" [coItemRender]="itemTemplate" >
    <ng-template #itemTemplate let-item>
    <p> {{item.name}}(<span style='color:red;'>{{item.tel}}</span>)</p>
    </ng-template>
    </co-shipping-line-picker>
    <p>{{selectedValue}}</p>
  </div>
  `,
})
export class ShippingLinePickerItemTemplateComponent {
}



```
