import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PickerComponentBase } from '@co/cbc/core';
import { VoyageService } from '@co/cds';
import { Observable } from 'rxjs';

/**
 * 航次选择器控件
 */
@Component({
  selector: 'co-voyage-picker',
  exportAs: 'coVoyagePicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VoyagePickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class VoyagePickerComponent extends PickerComponentBase {
  constructor(cdr: ChangeDetectorRef, private voyageService: VoyageService) {
    super(cdr);
  }
  fetchRemoteData(_condition: any): Observable<any> {
    return this.voyageService.getAll(_condition);
  }
}
