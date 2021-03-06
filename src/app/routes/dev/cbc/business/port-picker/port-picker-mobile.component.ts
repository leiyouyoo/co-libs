import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  template: `
    <div>自定义模板:</div>
    <ng-template #itemTemplate let-item>
      <section>
        <div>
          <span style="flex:1">{{ item.name || '--' }}</span>
        </div>
        <div>
          <span>{{ item.tel }}</span>
        </div>
      </section>
    </ng-template>
    <co-port-picker-mobile style="width: 200px" [coItemRender]="itemTemplate" [(ngModel)]="selectedValue"></co-port-picker-mobile>

    <div>普通模板:</div>
    <div [formGroup]="validateForm">
      <co-port-picker-mobile style="width: 200px" formControlName="countryId"></co-port-picker-mobile>
    </div>
  `,
})
export class PickerMobileComponent implements OnInit {
  validateForm!: FormGroup;
  selectedValue = '34c86b6a-b53f-45a2-a0c0-5f5b001298a3';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      countryId: '7dedbb31-57e0-4593-84e4-38be9e513d18',
    });
  }
}
