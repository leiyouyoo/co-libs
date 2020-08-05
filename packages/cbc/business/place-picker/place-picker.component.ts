import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs';

import { PickerComponentBase } from '@co/cbc/core';
import { PUBPlaceService } from '@co/cds';

/**
 * 地址选择器控件
 */
@Component({
  selector: 'co-place-picker',
  exportAs: 'coPlacePicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PlacePickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PlacePickerComponent extends PickerComponentBase {
  //#region  构造函数

  constructor(cdr: ChangeDetectorRef, private placeService: PUBPlaceService) {
    super(cdr);

    this.coLabelMember = 'fax';
  }

  //#endregion
  fetchRemoteData(_condition: any): Observable<any> {
    return this.placeService.getByRegionIds(_condition);
  }
}
