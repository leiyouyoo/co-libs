import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { PickerMobileComponentBase } from '@co/cbc/mobile/core';
import { PlatformOrganizationUnitService } from '@co/cds';

/**
 * 选择器控件
 */
@Component({
  selector: 'co-customer-service-picker-mobile',
  exportAs: 'coCustomerServicePickerMobile',
  templateUrl: '../templates/picker-template-mobile.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomerServicePickerMobileComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CustomerServicePickerMobileComponent extends PickerMobileComponentBase {
  constructor(cdr: ChangeDetectorRef, private platformOrganizationUnitService: PlatformOrganizationUnitService) {
    super(cdr);
    this.coLabelMember = 'name';
  }
  //#region  override

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
    return this.platformOrganizationUnitService.getCustomerServiceUsers(_condition);
  }

  ngOnChanges(changes: SimpleChanges) {}
}
