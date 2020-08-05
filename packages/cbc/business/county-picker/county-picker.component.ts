import { ChangeDetectorRef, ChangeDetectionStrategy, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs';

import { PUBRegionService } from '@co/cds';
import { PickerComponentBase } from '@co/cbc/core';

/**
 * 国家选择器控件
 */
@Component({
  selector: 'co-county-picker',
  exportAs: 'coCountyPicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountyPickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CountyPickerComponent extends PickerComponentBase {
  //#region  构造函数

  constructor(cdr: ChangeDetectorRef, private countyService: PUBRegionService) {
    super(cdr);

    this.coLabelMember = 'name';
  }

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
    return this.countyService.getAllCountryForUiPicker(_condition);
  }
}
