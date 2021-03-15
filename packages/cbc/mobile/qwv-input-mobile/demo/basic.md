---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

基础用法实列。

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-demo',
  template: `
  
  `
})
export class PortPickerMobileComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
  ){}

  ngOnInit() {
  }
}

```
