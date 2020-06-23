import { ChangeDetectorRef, ChangeDetectionStrategy, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import * as _ from 'lodash';

import { Observable } from 'rxjs';

import { ChargingCodeService } from '@co/cds';
import { PickerComponentBase } from '@co/cbc/core';

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

  constructor(cdr: ChangeDetectorRef, private chargingCodeService: ChargingCodeService) {
    super(cdr);
    //显示列的key
    this.coLabelMember = 'name';
  }

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
    return this.chargingCodeService.getAllBySearch(_condition);
  }
}
