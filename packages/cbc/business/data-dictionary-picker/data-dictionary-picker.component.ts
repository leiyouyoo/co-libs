import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs';
import { PickerComponentBase } from '@co/cbc/core';
import { NzSafeAny } from 'ng-zorro-antd';
import { DataDictionaryService } from '@co/cds';
import { switchMap, takeUntil } from 'rxjs/operators';
import * as _ from 'lodash';

/**
 * 数据字典选择器控件
 */
@Component({
  selector: 'co-data-dictionary-picker',
  exportAs: 'coDataDictionaryPicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DataDictionaryPickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DataDictionaryPickerComponent extends PickerComponentBase {

  @Input() TypeCode: string;

  //#region  构造函数

  constructor(private _cdr: ChangeDetectorRef, private dataDictionaryService: DataDictionaryService) {
    super(_cdr);

    this.coLabelMember = 'name';
    this.nzServerSearch = false;
    this.coPageSize = 100;
  }

  //#endregion


  //#region  override

  ngOnInit() {
    const optionList$: Observable<string[]> = this.searchChange$.asObservable().pipe(
      switchMap((condition: any) => {
        this.isLoading = true;
        return this.fetchRemoteData(condition);
      }),
      takeUntil(this.destroy$),
    );

    optionList$.subscribe((response: any) => {
      let originalOptions = [...this.optionList];

      const newOptions: any[] = [];
      response.items.forEach((item: any) => {
        newOptions.push(item);
      });

      this.optionList = this.sortByDownList(_.unionBy(originalOptions, newOptions, this.coLabelMember));

      this.isLoading = false;
      this.skipCount += this.coPageSize;
      if (response.total <= this.coPageSize) {
        this.hasMore = false;
      }

      this._cdr.detectChanges();
    });
    const condition = {
      ...this.coFilter,
      skipCount: this.skipCount,
      maxResultCount: this.coPageSize,
    };
    this.searchChange$.next(condition);
  }

  fetchRemoteData(condition: any): Observable<any> {
    _.defaults(condition, { TypeCode: this.TypeCode });
    return this.dataDictionaryService.getAll(condition);
  }

  writeValue(modelValue: NzSafeAny | NzSafeAny[]): void {
    if (this.value !== modelValue) {
      this.value = modelValue;
      this._cdr.markForCheck();
    }
  }

  onOpenChanged(e: boolean) {
    this.coOpenChange && this.coOpenChange.emit(e);
  }

  onSearch(value: string): void {
  }

  //#endregion

}
