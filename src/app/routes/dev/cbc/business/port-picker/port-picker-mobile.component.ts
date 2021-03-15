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
    <co-port-picker-mobile style="width: 200px" [(ngModel)]="selectedValue"></co-port-picker-mobile>
  `,
})
export class PortPickerMobileComponent implements OnInit {
  validateForm!: FormGroup;
  selectedValue = '80ef556c-69a4-e911-b0c1-f71612d60fdf';
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
  }
}
