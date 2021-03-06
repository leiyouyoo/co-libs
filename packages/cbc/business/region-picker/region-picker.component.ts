import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs';

import { PickerComponentBase } from '@co/cbc/core';
import { PUBRegionService } from '@co/cds';
import * as _ from 'lodash';

/**
 * 客户选择器控件
 */
@Component({
  selector: 'co-region-picker',
  exportAs: 'coRegionPicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RegionPickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class RegionPickerComponent extends PickerComponentBase {
  @Input() regionReq: any;
  //#region  构造函数

  constructor(cdr: ChangeDetectorRef, private regionService: PUBRegionService) {
    super(cdr);

    this.coLabelMember = 'name';
  }
  //#region  override

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
    if (this.regionReq) {
      return this.regionService.getAllRegionForUiPicker(_condition);
    } else {
      return [] as any;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
    }
    if (this.regionReq) {
      this.fetchRemoteData(this.regionReq).subscribe((response: any) => {
        const valueList: any[] = [];
        if (response && response.items.length > 0) {
          response.items.forEach(v => {
            valueList.push(v.id);
          });
        }
        this.value = valueList;

        let originalOptions: Array<{ value: string; text: string }> = [];
        if (this.loadingMode === 'more') {
          originalOptions = [...this.optionList];
        }

        const newOptions: any[] = [];
        response.items.forEach((item: any) => {
          newOptions.push(item);
        });

        this.optionList = this.sortByDownList(_.unionBy(originalOptions, newOptions, this.coLabelMember));

        this.isLoading = false;

        if (this.loadingMode === 'more') {
          this.skipCount += this.coPageSize;

          if (response.total <= this.coPageSize) {
            this.hasMore = false;
          }
        }

        this.getCdrTo();
      });
    } else {
      this.value = [];

      this.optionList = [];

      this.isLoading = false;
    }
  }

  // writeValue(modelValue: NzSafeAny | NzSafeAny[]): void {
  //   if (this.value !== modelValue) {
  //     this.value = this.optionList;
  //     this.cdrs.markForCheck();
  //   }
  // }
}
