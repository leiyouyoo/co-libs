import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs';

import { PickerComponentBase } from '@co/cbc/core';
import { PUBCurrencyService } from '@co/cds';

/**
 * 客户选择器控件
 */
@Component({
  selector: 'co-currency-picker',
  exportAs: 'coCurrencyPicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CurrencyPickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CurrencyPickerComponent extends PickerComponentBase {
  //#region  构造函数

  constructor(cdr: ChangeDetectorRef, private currencyService: PUBCurrencyService) {
    super(cdr);

    this.coLabelMember = 'name';
    this.coValueMember = 'code';
  }

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
    return this.currencyService.getAllForUiPicker(_condition);
  }
}
