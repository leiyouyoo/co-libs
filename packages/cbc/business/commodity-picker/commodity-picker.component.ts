import { ChangeDetectorRef, ChangeDetectionStrategy, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import * as _ from 'lodash';

import { Observable } from 'rxjs';

import { PUBCommodityService } from '@co/cds';
import { PickerComponentBase } from '@co/cbc/core';

/**
 *品名选择器控件
 */
@Component({
  selector: 'co-commodity-picker',
  exportAs: 'coCommodityPicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CommodityPickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CommodityPickerComponent extends PickerComponentBase {
  //#region  构造函数

  constructor(cdr: ChangeDetectorRef, private commodityService: PUBCommodityService) {
    super(cdr);

    this.coLabelMember = 'name';
  }

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
    return this.commodityService.getAllForUiPicker(_condition);
  }
}
