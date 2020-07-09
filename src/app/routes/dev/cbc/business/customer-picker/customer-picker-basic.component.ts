import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerSearchScope } from '@co/cds';

@Component({
  selector: 'app-demo',
  template: `
  <form class="form-style" nz-form [formGroup]="validateForm" [nzLayout]="'vertical'">
    <nz-form-item>
      <nz-form-label nzRequired nzFor="customer">客户</nz-form-label>
      <nz-form-control nzErrorTip="Please input your customer!">
        <co-customer-picker style="width: 100%;" formControlName="customerId" [coFilter]="customerFilter"> </co-customer-picker>
      </nz-form-control>
    </nz-form-item>
    </form>
  `,
})
export class CustomerPickerBasicComponent implements OnInit {
  validateForm!: FormGroup;
  selectedValue: number = 2;
  customerFilter: any = {
    scope: CustomerSearchScope.Department
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      formLayout: ['horizontal'],
      customerId: [null, [Validators.required]],
      transportationMode: [null, [Validators.required]],
      contactId: [null],
      transferNo: [null],
      channel: [null, [Validators.required]],
      serviceUserId: [null, [Validators.required]], // 业务员
      serviceCompanyId: [null], //口岸
      agentCustomerId: [null], //承运人
      customsCustomerId: [null], //报关行客户Id
      customsClearanceCustomerId: [null], //清关行客户Id
      destinationWarehouseId: [null], // 交货仓库
      deliveryDate: [null],
      commodity: [null, [Validators.required]],
      carrierBookingNo: [null],
      expressNo: [null],
      warehouseNo: [null],
      expressNoRemark: [null],
      huoLalaOrderNo: [null],
      fbaDeliveryType: [null],
      fbaDeliveryTypeRemark: [null],
      cargoPutAwayDate: [null],
      fbaPickUpMethodType: [null],
      country: [null],
    });
  }
}
