import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div style="margin-top:8px;float:right;">
      <co-customer-picker
        coSize="default"
        [coDropdownStyle]="{ width: '500px', left: '-60%' }"
        coDropdownMode="table"
        [coDropdownColumns]="dropdownColumns"
        [(ngModel)]="selectedValue"
        [coMode]="mode"
        [coMaxMultipleCount]="maxMultipleCount"
        style="width:300px"
      >
      </co-customer-picker>
      <p>{{ selectedValue }}</p>
    </div>
  `,
})
export class CustomerPickerDropdownPositionComponent {
  mode = 'multiple';
  maxMultipleCount = 2;
  selectedValue: number[] = [2, 10, 23, 78, 90, 100];
  dropdownColumns: any[] = [
    {
      name: 'name',
      label: '名称',
      width: 400,
    },
    {
      name: 'tel',
      label: '电话',
      width: 80,
    },
    {
      name: 'fax',
      label: '传真',
      width: 80,
    },
  ];
}
