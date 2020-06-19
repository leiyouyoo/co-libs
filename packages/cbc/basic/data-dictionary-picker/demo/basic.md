---
order: 1
title: 基本用法
---

基本示例。


```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-dictionary-picker-demo',
  template: `
      <h4 nz-typography>value：{{value|json}}</h4>
      <data-dictionary-picker [(ngModel)]="value"></data-dictionary-picker>
      <br/>
`,
})
export class DataDictionaryPickerDemoComponent implements OnInit {

  value: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
```
