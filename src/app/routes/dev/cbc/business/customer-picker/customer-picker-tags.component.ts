import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div>
      <co-customer-picker [coSize]="size" coMode="tags" [coValueMember]="valueMember" [(ngModel)]="selectedValue"> </co-customer-picker>
      <p>{{ selectedValue }}</p>
    </div>
  `,
})
export class CustomerPickerTagsComponent {
  size = 'default';
  valueMember = "name";
  selectedValue: string;
}
