import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs';

import { PickerComponentBase } from '@co/cbc/core';
import { CustomerService } from '@co/cds';

/**
 * 客户选择器控件
 */
@Component({
  selector: 'co-customer-picker',
  exportAs: 'coCustomerPicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomerPickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CustomerPickerComponent extends PickerComponentBase {
  //#region  构造函数

  constructor(cdr: ChangeDetectorRef, private customerService: CustomerService) {
    super(cdr);

    this.coLabelMember = 'fax';
  }

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
    _condition.sorting = "code";
    _condition.maxResultCount = 20;
    return this.customerService.getAllBySearch(_condition);
  }
}
