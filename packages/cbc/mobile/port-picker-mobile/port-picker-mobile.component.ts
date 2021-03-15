import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { PickerMobileComponentBase } from '@co/cbc/mobile/core';
import { PlatformCompanyConfigureService } from '@co/cds';

/**
 * 选择器控件
 */
@Component({
  selector: 'co-port-picker-mobile',
  exportAs: 'coPortPickerMobile',
  templateUrl: '../templates/picker-template-mobile.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProtPickerMobileComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ProtPickerMobileComponent extends PickerMobileComponentBase {
  constructor(cdr: ChangeDetectorRef, private platformCompanyConfigureService: PlatformCompanyConfigureService) {
    super(cdr);
    this.coLabelMember = 'name';
  }
  //#region  override

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
    _condition.sorting = 'code';
    _condition.maxResultCount = 20;
    return this.platformCompanyConfigureService.getByPlaceOrLocation(_condition);
  }

  ngOnChanges(changes: SimpleChanges) {}
}
