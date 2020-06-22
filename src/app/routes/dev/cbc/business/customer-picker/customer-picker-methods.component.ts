import { Component, ViewChild } from '@angular/core';
import { CustomerPickerComponent } from '@co/cbc';

@Component({
  selector: 'app-demo',
  template: `
    <div>
      <div>
        <button nz-button nzType="default" (click)="onFocus($event)">设置焦点</button>
        <button nz-button nzType="default" (click)="onBlur($event)">失去焦点</button>
        <button nz-button nzType="default" (click)="onClear($event)">清除所有值</button>
      </div>
      <co-customer-picker [(ngModel)]="selectedValue"> </co-customer-picker>
    </div>
  `,
})
export class CustomerPickerMethodsComponent {
  @ViewChild(CustomerPickerComponent, { static: true }) coCustomerPickerComponent!: CustomerPickerComponent;

  selectedValue: number = 2;

  onFocus(_e: any) {
    this.coCustomerPickerComponent.focus();
  }

  onBlur(_e: any) {
    this.coCustomerPickerComponent.blur();
  }

  onClear(_e: any) {
    this.coCustomerPickerComponent.clear();
  }
}
