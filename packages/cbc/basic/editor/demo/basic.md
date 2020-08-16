---
order: 123
title: 富文本编辑器
---

用于生成打印HTML文件

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <coeditor [html]="html" (coChange)="editorChange($event)"></coeditor>
  `
})
export class DemoComponent {
  html = `<div style="color:#e55354">test</div>`;

    constructor() {}

editorChange(data){
  console.log(data);
}

}
```
