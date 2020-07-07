---
title:
  zh-CN: 综合示例
order: 7
---

## zh-CN

综合示例。

```ts
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo',
  template: `
     <co-search-area-layout coWidth="250" [formGroup]="form" [coNoDefaultToggleShowButton]="true">
        <co-search-area-item>
          <nz-form-label nzRequired>单号</nz-form-label>
          <input type="text" nz-input placeholder="请输入" formControlName="filed1"/>
        </co-search-area-item>
        <co-search-area-item>
          <nz-form-label nzRequired>数量</nz-form-label>
          <input type="text" nz-input placeholder="请输入" formControlName="filed2"/>
        </co-search-area-item>
        <co-search-area-item coWidth="auto">
          <button nz-button nzType="primary"><i nz-icon nzType="search" nzTheme="outline"></i>搜索</button>
          <button nz-button>重置</button>
          <a nz-button nzType="link" (click)="advanced=!advanced">
            <span>高级搜索
              <i [hidden]="advanced" nz-icon nzType="down" nzTheme="outline"></i>
              <i [hidden]="!advanced" nz-icon nzType="up" nzTheme="outline"></i>
            </span>
          </a>
        </co-search-area-item>
        <co-search-area-extra [(isShow)]="advanced">
          <co-search-area-item>
            <input type="text" nz-input placeholder="请输入"/>
          </co-search-area-item>
          <co-search-area-item>
            <input type="text" nz-input placeholder="请输入"/>
          </co-search-area-item>
          <co-search-area-item>
            <input type="text" nz-input placeholder="请输入"/>
          </co-search-area-item>
          <co-search-area-item>
            <input type="text" nz-input placeholder="请输入"/>
          </co-search-area-item>
        </co-search-area-extra>
     </co-search-area-layout>
  `,
})
export class DemoComponent {
  advanced = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      filed1: ['NOxxxxxxx'],
      filed2: ['24'],
    });
  }

}
```
