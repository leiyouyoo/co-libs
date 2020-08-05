import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs';

import { PUBAreaService } from '@co/cds';
import { PickerComponentBase } from '@co/cbc/core';

/**
 * 客户选择器控件
 */
@Component({
  selector: 'co-area-picker',
  exportAs: 'coAreaPicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AreaPickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AreaPickerComponent extends PickerComponentBase {
  //#region  构造函数

  constructor(cdr: ChangeDetectorRef, private areaService: PUBAreaService) {
    super(cdr);
    this.coLabelMember = 'name';
  }

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
    return this.areaService.getAllForUiPicker(_condition);
  }

}
