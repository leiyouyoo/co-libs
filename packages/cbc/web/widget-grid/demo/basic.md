---
order: 1
title:
  zh-CN: 基础
  en-US: Basic
---

## zh-CN


## en-US


```ts
import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-ComponentsWidgetGridBasicComponent',
  template: `
    <co-widget-grid [items]="widgetItems">
      <ng-template co-widget-item="co-st1">
        <co-st [columns]="[{}]" style="width: 100%;height: 100%;"></co-st>
      </ng-template>
      <ng-template co-widget-item="co-st2">
        <co-st [columns]="[{}]"></co-st>
      </ng-template>
    </co-widget-grid>
  `,
})
export class ComponentsWidgetGridBasicComponentComponent {
  widgetItems = [
    { label: `CO-ST`, index: `co-st1` },
    { label: `CO-ST`, index: `co-st2` },
  ]
}

```
