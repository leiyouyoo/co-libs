import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs';

import { PickerComponentBase } from '@co/cbc/core';
import { PUBChargingCodeService } from '@co/cds';

/**
 * 费用代码选择器控件
 */
@Component({
  selector: 'co-charging-code-picker',
  exportAs: 'coChargingCodePicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChargingCodePickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ChargingCodePickerComponent extends PickerComponentBase {
  //#region  构造函数

  constructor(cdr: ChangeDetectorRef, private chargingCodeService: PUBChargingCodeService) {
    super(cdr);
    // 显示列的key
    this.coLabelMember = 'name';
    this.coValueMember = 'id';
  }

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
    return this.chargingCodeService.getAllForUiPicker(_condition);
  }
}
