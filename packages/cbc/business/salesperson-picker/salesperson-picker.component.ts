import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs';

import { PickerComponentBase } from '@co/cbc/core';
import { PlatformOrganizationUnitService } from '@co/cds';

/**
 * 选择器控件
 */
@Component({
  selector: 'co-salesperson-picker',
  exportAs: 'coSalespersonPicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SalespersonPickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SalespersonPickerComponent extends PickerComponentBase {
  static readonly SELECTOR = `co-salesperson-picker`;
  coDebounceInputCharCount = 1;

  constructor(cdr: ChangeDetectorRef, private organizationUnitService: PlatformOrganizationUnitService) {
    super(cdr);
  }
  //#region  override

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
      return this.organizationUnitService.getSaleUsers({ ..._condition, userId: _condition?.ids });
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  // writeValue(modelValue: NzSafeAny | NzSafeAny[]): void {
  //   if (this.value !== modelValue) {
  //     this.value = this.optionList;
  //     this.cdrs.markForCheck();
  //   }
  // }
}
