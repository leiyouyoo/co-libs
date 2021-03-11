import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { PickerMobileComponentBase } from '@co/cbc/mobile/core';
import { CustomerService } from '@co/cds';

/**
 * 选择器控件
 */
@Component({
  selector: 'co-customer-picker-mobile',
  exportAs: 'coCustomerPickerMobile',
  templateUrl: '../templates/picker-template-mobile.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomerPickerMobileComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CustomerPickerMobileComponent extends PickerMobileComponentBase {
  constructor(cdr: ChangeDetectorRef, private customerService: CustomerService) {
    super(cdr);
    this.coLabelMember = 'name';
  }
  //#region  override

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
    _condition.sorting = 'code';
    _condition.maxResultCount = 20;
    return this.customerService.getAllBySearch(_condition);
  }

  ngOnChanges(changes: SimpleChanges) {}

  // writeValue(modelValue: NzSafeAny | NzSafeAny[]): void {
  //   if (this.value !== modelValue) {
  //     this.value = this.optionList;
  //     this.cdrs.markForCheck();
  //   }
  // }
}
