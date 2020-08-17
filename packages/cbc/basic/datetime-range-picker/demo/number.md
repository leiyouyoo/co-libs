---
order: 1
title:
  zh-CN: 按照字符数省略
  en-US: Truncate according to the number of character
---

## zh-CN

通过设置 `length` 属性指定文本最长长度，如果超过这个长度会自动截取。


```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <co-ellipsis length="100">{{ article }}</co-ellipsis>
  <h4 class="mt-lg">Show Tooltip</h4>
  <co-ellipsis length="100" tooltip>{{ article }}</co-ellipsis>
  `,
})
export class DemoComponent {
  article = 'There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.';
}
```
