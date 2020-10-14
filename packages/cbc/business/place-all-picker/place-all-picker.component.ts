import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs';

import { PickerComponentBase } from '@co/cbc/core';
import { PUBPlaceService } from '@co/cds';

/**
 * 地址选择器控件
 */
@Component({
  selector: 'co-place-all-picker',
  exportAs: 'coPlaceAllPicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PlaceAllPickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PlaceAllPickerComponent extends PickerComponentBase {
  //#region  构造函数

  constructor(cdr: ChangeDetectorRef, private placeService: PUBPlaceService) {
    super(cdr);

    this.coLabelMember = 'name';
  }

  //#endregion
  fetchRemoteData(_condition: any): Observable<any> {
    return this.placeService.getAllForUiPicker(_condition);
  }
}
