import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs';

import { PickerComponentBase } from '@co/cbc/core';
import { PlatformOrganizationUnitService } from '@co/cds';

/**
 * 选择器控件
 */
@Component({
  selector: 'co-service-user-picker',
  exportAs: 'coServiceUserPicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ServiceUserPickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ServiceUserPickerComponent extends PickerComponentBase {
  static readonly SELECTOR = `co-service-user-picker`;
  coDebounceInputCharCount = 1;

  constructor(cdr: ChangeDetectorRef, private organizationUnitService: PlatformOrganizationUnitService) {
    super(cdr);
  }
  //#region  override

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
    return this.organizationUnitService.getCustomerServiceUsers({ ..._condition });
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
