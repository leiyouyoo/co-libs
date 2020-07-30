import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs';

import { ContainerService } from '@co/cds';
import { PickerComponentBase } from '@co/cbc/core';

/**
 * 箱选择器控件
 */
@Component({
  selector: 'co-container-picker',
  exportAs: 'coContainerPicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContainerPickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ContainerPickerComponent extends PickerComponentBase {
  //#region  构造函数

  constructor(cdr: ChangeDetectorRef, private containerService: ContainerService) {
    super(cdr);

    this.coLabelMember = 'code';
    this.coMode = 'multiple';
    this.coMaxMultipleCount = 3;
  }

  //#endregion


  fetchRemoteData(_condition: any): Observable<any> {
    return this.containerService.getAllForUiPicker(_condition);
  }
}
