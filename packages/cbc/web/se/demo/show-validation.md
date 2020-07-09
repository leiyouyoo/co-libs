---
order: 11
title:
  zh-CN: co-validation 展示错误信息
  en-US: co-validation display error
---

## zh-CN

展示错误信息

## en-US

Display error

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  template: `
  <nz-table [nzNoResult]="null">
      <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Type</th>
      </tr>
      </thead>
      <tbody>
      <tr [formGroup]="formGroup">
        <td coValidation coLabel="Name">
          <input type="text" minlength="3" nz-input formControlName="name">
        </td>
        <td coValidation coLabel="Age">
          <input type="text" nz-input formControlName="age" required>
        </td>
        <td>
          <input type="text" nz-input formControlName="type">
        </td>
      </tr>
      <tr>
        <td coValidation>
          <input type="text" nz-input [(ngModel)]="person.name" required>
        </td>
        <td coValidation>
          <input type="text" nz-input [(ngModel)]="person.age" required>
        </td>
        <td>
          <input type="text" nz-input [(ngModel)]="person.type">
        </td>
      </tr>
      </tbody>
    </nz-table>
`,
})
export class DemoComponent {
  formGroup: FormGroup;
  person = {
    name: '',
    age: null,
    type: 'ngModel',  
  }
  
  constructor(private formBuilder: FormBuilder,
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      age: [null],
      type: ['formControlName']
    })
  }
}
```
