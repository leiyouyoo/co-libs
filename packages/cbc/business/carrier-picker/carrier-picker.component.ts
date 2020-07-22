import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs';

import { PickerComponentBase } from '@co/cbc/core';
import { CustomerService } from '@co/cds';

/**
 * 选择器控件
 */
@Component({
  selector: 'co-carrier-picker',
  exportAs: 'coCarrierPicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CarrierPickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CarrierPickerComponent extends PickerComponentBase {
  static readonly SELECTOR = `co-carrier-picker`;
  coDebounceInputCharCount = 1;

  constructor(cdr: ChangeDetectorRef, private customerService: CustomerService) {
    super(cdr);
  }
  //#region  override

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
      return this.customerService.getForwardingCompanies(_condition);
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  // writeValue(modelValue: NzSafeAny | NzSafeAny[]): void {
  //   if (this.value !== modelValue) {
  //     this.value = this.optionList;
  //     this.cdrs.markForCheck();
  //   }
  // }
}
