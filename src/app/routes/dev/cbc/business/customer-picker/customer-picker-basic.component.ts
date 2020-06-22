import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div style="margin:80px">
      <co-customer-picker coSize="default" nzAutoFocus="true" [(ngModel)]="selectedValue"> </co-customer-picker>
      <p>{{ selectedValue }}</p>
    </div>
  `,
})
export class CustomerPickerBasicComponent {
  selectedValue: number = 2;
}
