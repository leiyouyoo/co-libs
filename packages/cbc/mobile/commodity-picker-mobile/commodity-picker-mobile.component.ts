import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { PickerMobileComponentBase } from '@co/cbc/mobile/core';
import { CustomerService, PUBCommodityService } from '@co/cds';

/**
 * 选择器控件
 */
@Component({
  selector: 'co-commodity-picker-mobile',
  exportAs: 'coCommodityPickerMobile',
  templateUrl: '../templates/picker-template-mobile.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CommodityPickerMobileComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CommodityPickerMobileComponent extends PickerMobileComponentBase {
  constructor(cdr: ChangeDetectorRef, private commodityService: PUBCommodityService) {
    super(cdr);
    this.coLabelMember = 'name';
  }
  //#region  override

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
    _condition.maxResultCount = 20;
    return this.commodityService.getAllForUiPicker(_condition);
  }

  ngOnChanges(changes: SimpleChanges) {}
}
