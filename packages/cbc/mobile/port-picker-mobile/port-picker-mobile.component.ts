import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { PickerMobileComponentBase } from '@co/cbc/mobile/core';
import { PlatformCompanyConfigureService, PUBPlaceService } from '@co/cds';

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
      useExisting: forwardRef(() => PortPickerMobileComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PortPickerMobileComponent extends PickerMobileComponentBase {
  constructor(cdr: ChangeDetectorRef, private placeService: PUBPlaceService) {
    super(cdr);
    this.coLabelMember = 'nameLocalization';
  }
  //#region  override

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
    _condition.sorting = 'code';
    _condition.maxResultCount = 20;
    _condition.isOcean = true;
    _condition.id = _condition.ids;
    return this.placeService.getAll(_condition);
  }

  ngOnChanges(changes: SimpleChanges) {}
}
