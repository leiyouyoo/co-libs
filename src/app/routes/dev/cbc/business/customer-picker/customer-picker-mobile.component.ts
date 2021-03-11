import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  template: `
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
    <co-customer-picker-mobile style="width: 200px" [items]="portsPOL" [(ngModel)]="selectedValue"></co-customer-picker-mobile>
  `,
})
export class CustomerPickerMobileComponent implements OnInit {
  validateForm!: FormGroup;
  portsPOL = [
    {
      name: 'qqq',
      tel: '222',
    },
    {
      name: 'zzz',
      tel: '333',
    },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
  }
}
