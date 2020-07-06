import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div>
      <co-place-picker
        coDropdownMode="table"
        [coDropdownStyle]="{ width: '400px' }"
        [coDropdownColumns]="dropdownColumns"
        [coMode]="mode"
        [coMaxMultipleCount]="maxMultipleCount"
        [(ngModel)]="selectedValue"
        style="width:300px"
      >
      </co-place-picker>
      <p>{{ selectedValue }}</p>
    </div>
  `,
})
export class PlasePickerDropdownTableComponent {
  mode = 'multiple';
  maxMultipleCount = 2;
  selectedValue: number[] = [2, 10, 23, 78, 90, 100];
  dropdownColumns: any[] = [
    {
      name: 'name',
      label: '名称',
      width: 100,
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
