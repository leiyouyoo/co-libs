import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs';

import { PickerComponentBase } from '@co/cbc/core';
import { CompanyConfigureService } from '@co/cds';
import * as _ from 'lodash';

/**
 * 选择器控件
 */
@Component({
  selector: 'co-port-office-picker',
  exportAs: 'coPortOfficePicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PortOfficePickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PortOfficePickerComponent extends PickerComponentBase {
  static readonly SELECTOR = `co-port-office-picker`;

  constructor(cdr: ChangeDetectorRef, private companyConfigureService: CompanyConfigureService) {
    super(cdr);

    this.coLabelMember = 'displayName';
  }
  //#region  override

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
      return this.companyConfigureService.getByPlaceOrLocation(_condition);
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
