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
    <co-customer-picker-mobile style="width: 200px" [coItemRender]="itemTemplate" [(ngModel)]="selectedValue"></co-customer-picker-mobile>

    <div>普通模板:</div>
    <co-customer-picker-mobile style="width: 200px" [(ngModel)]="selectedValue"></co-customer-picker-mobile>
  `,
})
export class CustomerPickerMobileComponent implements OnInit {
  validateForm!: FormGroup;
  selectedValue = '';
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
  }
}
