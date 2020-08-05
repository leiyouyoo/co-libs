import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs';

import { PickerComponentBase } from '@co/cbc/core';
import { PUBShippingLineService } from '@co/cds';

/**
 * 航线选择器控件
 */
@Component({
  selector: 'co-shipping-line-picker',
  exportAs: 'coShippingLinePicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ShippingLinePickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ShippingLinePickerComponent extends PickerComponentBase {
  //#region  构造函数

  constructor(cdr: ChangeDetectorRef, private shippingLineService: PUBShippingLineService) {
    super(cdr);

    this.coLabelMember = 'localizationName';
  }

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
    _condition.sorting = 'code';
    _condition.maxResultCount = 20;
    return this.shippingLineService.getAllForUiPicker(_condition);
  }
}
