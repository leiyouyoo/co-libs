import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div>
      <co-customer-picker
        [(ngModel)]="selectedValue"
        (coFocus)="onFocus($event)"
        (coBlur)="onBlur($event)"
        (coOpenChange)="onOpenChange($event)"
      >
      </co-customer-picker>
      <p>{{ msg }}</p>
    </div>
  `,
})
export class CustomerPickerEventsComponent {
  selectedValue: number = 2;
  msg: string;

  onFocus() {
    this.msg = '触发Focus事件';
  }

  onBlur() {
    this.msg = '触发Blur事件';
  }
  onOpenChange() {
    this.msg = '触发OpenChange事件';
  }
}
