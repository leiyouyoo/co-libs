import { ChangeDetectorRef, ChangeDetectionStrategy, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import * as _ from 'lodash';

import { Observable } from 'rxjs';

import { CurrencyService } from '@co/cds';
import { PickerComponentBase } from '@co/cbc/core';

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

  constructor(cdr: ChangeDetectorRef, private currencyService: CurrencyService) {
    super(cdr);

    this.coLabelMember = 'name';
    this.coShowSearch = false;
  }

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
    console.log(_condition)
    return this.currencyService.getAllBySearch(_condition);
  }
}
