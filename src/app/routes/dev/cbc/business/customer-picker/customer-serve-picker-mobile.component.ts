import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  template: `
    <ng-template #itemTemplate let-item>
      <section>
        <div>
          <span style="flex:1">{{ item.fullName || '--' }}</span>
        </div>
        <div>
          <span>{{ item.name }}</span>
        </div>
      </section>
    </ng-template>
    普通用例：
    <co-customer-service-picker-mobile style="width: 200px" [(ngModel)]="selectedValue"></co-customer-service-picker-mobile>
  `,
})
export class CustomerServicePickerMobileComponent implements OnInit {
  validateForm!: FormGroup;
  selectedValue = 2600;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
  }
}
