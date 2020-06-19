---
order: 1
title: 基本用法
---

基本示例。


```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'container-picker-demo',
  template: `
      <h4 nz-typography>value：{{value|json}}</h4>
      <container-picker [(ngModel)]="value"></container-picker>
      <br/>
`,
})
export class ContainerPickerDemoComponent implements OnInit {

  value: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
```
