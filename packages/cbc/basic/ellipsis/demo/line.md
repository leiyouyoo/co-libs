---
order: 2
title:
  zh-CN: 按照行数省略
  en-US: Truncate according to the number of rows
---

## zh-CN

通过设置 `lines` 属性指定最大行数，如果超过这个行数的文本会自动截取。但是在这种模式下所有 `ng-content` 将会被转换成纯文本。

并且注意在这种模式下，外容器需要有指定的宽度（或设置自身宽度）。


```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <co-ellipsis lines="3" tooltip style="width: 200px">
    <p>There were injuries alleged in three <a href="#cover">cases in 2015</a>, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.</p>
  </co-ellipsis>
  `,
})
export class DemoComponent {
}
```
