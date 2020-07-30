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
    <co-container-picker coDropdownMode="custom" [coItemRender]="itemTemplate" >
    <ng-template #itemTemplate let-item>
    <p> {{item.name}}(<span style='color:red;'>{{item.teu}}</span>)</p>
    </ng-template>
    </co-container-picker>
  </div>
  `,
})
export class ContainerPickerItemTemplateComponent {
}



```
