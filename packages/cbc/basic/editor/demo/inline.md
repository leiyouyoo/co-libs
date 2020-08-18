---
order: 123
title: 富文本内联编辑器
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
  html = `<div style="color:#1890ff">the gone with the sin</div>`;

    constructor() {}

editorChange(data){
  console.log(data);
}

}
```