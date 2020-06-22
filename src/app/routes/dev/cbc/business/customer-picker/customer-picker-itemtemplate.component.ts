import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div>
      <co-customer-picker coDropdownMode="custom" [coItemRender]="itemTemplate" [(ngModel)]="selectedValue">
        <ng-template #itemTemplate let-item>
          <p>
            {{ item.name }}(<span style="color:red;">{{ item.tel }}</span
            >)
          </p>
        </ng-template>
      </co-customer-picker>
      <p>{{ selectedValue }}</p>
    </div>
  `,
})
export class CustomerPickerItemTemplateComponent {
  selectedValue: number = 2;
}
