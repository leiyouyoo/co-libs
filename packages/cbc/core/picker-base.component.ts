import { OnInit, ChangeDetectorRef, OnDestroy, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

import * as _ from 'lodash';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, filter, distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { InputBoolean, NzSelectModeType, NzSafeAny, NzSelectSizeType, OnChangeType, OnTouchedType, NzSelectComponent } from 'ng-zorro-antd';

import { LoadMode, DropdownMode, DropdownColumn } from './index';

/**
 * 客户选择器控件
 */
export class PickerComponentBase implements ControlValueAccessor, OnInit, OnDestroy {
  //#region 输入输出参数

  @Input() coSize: NzSelectSizeType = 'default';
  @Input() coPlaceHolder: string | TemplateRef<NzSafeAny> | null = null;
  @Input() coMaxMultipleCount = 2;
  @Input() coMode: NzSelectModeType = 'default';
  @Input() coDropdownMode: DropdownMode = 'default';
  @Input() coDropdownStyle: { [key: string]: string } | null = null;
  @Input() coDropdownColumns: DropdownColumn[] | null = null;
  @Input() coShowSearch: boolean = true;

  @Input() @InputBoolean() nzServerSearch = true;
  @Input() @InputBoolean() coAllowClear = true;
  @Input() @InputBoolean() coAutoFocus = false;
  @Input() @InputBoolean() coAutoClearSearchValue = true;
  @Input() @InputBoolean() coDisabled = false;
  @Input() @InputBoolean() coOpen = false;
  @Input() coLabelMember: string = 'name';
  @Input() coValueMember: string = 'id';
  @Input() coNotFoundContent: string | TemplateRef<NzSafeAny> | undefined = undefined;
  @Input() coItemRender: TemplateRef<NzSafeAny> | null = null;

  @Input() coDebounceInputCharCount: number = 3;
  @Input() coDebounceTime: number = 500;
  @Input() coPageSize: number = 20;
  @Input() coFilter: any = { isDeleted: false };

  @Output() readonly coOpenChange = new EventEmitter<boolean>();
  @Output() readonly coBlur = new EventEmitter<void>();
  @Output() readonly coFocus = new EventEmitter<void>();

  @ViewChild(NzSelectComponent, { static: true }) private nzSelectComponent!: NzSelectComponent;

  //#endregion

  //#region 私有变量
  dropdownStyle: { [key: string]: string } | null = null;
  value: NzSafeAny | NzSafeAny[];
  destroy$ = new Subject();
  onChange: OnChangeType = () => { };
  onTouched: OnTouchedType = () => { };
  coFilterOption = () => true;
  optionList: Array<{ value: string; text: string }> = [];
  searchChange$: any = new BehaviorSubject('');
  isLoading = false;
  loadingMode: LoadMode = 'more';
  hasMore = true;
  searchText = '';
  skipCount = 0;

  //#endregion

  //#region  构造函数

  constructor(private cdr: ChangeDetectorRef) { }

  //#endregion

  //#region 组件生命周期钩子

  ngOnInit() {
    debugger
    const optionList$: Observable<string[]> = this.searchChange$.asObservable().pipe(
      filter(
        (condition: any) =>
          (this.loadingMode === 'search' && condition.searchText && condition.searchText.length > this.coDebounceInputCharCount) ||
          !!condition.ids ||
          this.loadingMode === 'more',
      ),
      debounceTime(this.loadingMode === 'more' ? 0 : this.coDebounceTime),
      distinctUntilChanged(),
      switchMap((condition: any) => {
        this.isLoading = true;

        // return this.customerService.getAllBySearch(condition);
        return this.fetchRemoteData(condition);
      }),
      takeUntil(this.destroy$),
    );

    optionList$.subscribe((response: any) => {

      response = response.result || response;

      let originalOptions: Array<{ value: string; text: string }> = [];
      if (this.loadingMode === 'more') {
        originalOptions = [...this.optionList];
      }

      const newOptions: any[] = [];
      response.items.forEach((item: any) => {
        newOptions.push(item);
      });

      this.optionList = this.sortByDownList(_.unionBy(originalOptions, newOptions, this.coLabelMember));

      // this.optionList = _.sortedUniqBy(listOfOption, (item: any) => {
      //   return item.value;
      // });

      this.isLoading = false;

      if (this.loadingMode === 'more') {
        this.skipCount += this.coPageSize;

        if (response.total <= this.coPageSize) {
          this.hasMore = false;
        }
      }

      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  //#endregion

  fetchRemoteData(_condition: any): Observable<any> {
    return null as any;
  }

  getCdrTo() {
    this.cdr.detectChanges();
  }

  //#region ngModel实现

  writeValue(modelValue: NzSafeAny | NzSafeAny[]): void {
    if (this.value !== modelValue) {
      this.value = modelValue;

      this.loadDownList();
      this.cdr.markForCheck();
    }
  }

  registerOnChange(fn: OnChangeType): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedType): void {
    this.onTouched = fn;
  }

  //#endregion

  //#region 公共方法

  focus(): void {
    this.nzSelectComponent.focus();
  }

  blur(): void {
    this.nzSelectComponent.blur();
  }

  clear(): void {
    this.value = null;
    this.nzSelectComponent.clearInput();
  }
  // onModelChange():void{
  //   this.nzSelectComponent.;

  // }

  //#endregion

  //#region 事件处理

  onBlur(e: any) {
    this.coBlur && this.coBlur.emit(e);
  }

  onFocus(e: any) {
    this.coFocus && this.coFocus.emit(e);
  }

  onChanged(e: any) {
    this.onChange(e);
  }

  onOpenChanged(e: any) {
    if (!this.coOpen) {
      this.loadDownList();
    }

    this.coOpenChange && this.coOpenChange.emit(e);
  }

  onSearch(value: string): void {
    if (value) {
      this.loadBySearchText(value);
    }
  }

  onLoadMore(): void {
    if (this.hasMore) {
      this.loadMore(this.searchText);
    }
  }

  //#endregion

  //#region 私有方法

  private loadByIds(value: any): void {
    this.loadingMode = 'search';
    this.skipCount = 0;

    const covertModelToList = (model: NzSafeAny[] | NzSafeAny, mode: NzSelectModeType): NzSafeAny[] => {
      if (model === null || model === undefined) {
        return [];
      } else if (mode === 'default') {
        return [model];
      } else {
        return model;
      }
    };

    this.searchChange$.next({
      ...this.coFilter,
      ids: covertModelToList(value, this.coMode),
      skipCount: this.skipCount,
      maxResultCount: this.coPageSize,
    });
  }

  private loadBySearchText(value: any): void {
    this.hasMore = true;
    this.loadingMode = 'search';
    this.searchText = value;
    this.skipCount = 0;
    this.searchChange$.next({ ...this.coFilter, searchText: value, skipCount: this.skipCount, maxResultCount: this.coPageSize });
  }

  private loadMore(value: any): void {
    this.loadingMode = 'more';

    this.searchChange$.next({ ...this.coFilter, searchText: value, skipCount: this.skipCount, maxResultCount: this.coPageSize });
  }

  protected sortByDownList(items: any[]) {
    return _.sortBy(items, (item: any) => {
      if (this.value) {
        let values: any[] = this.value;
        if (!_.isArray(this.value)) {
          values = [this.value];
        }

        if (values.includes(item[this.coValueMember])) {
          return '__' + item[this.coLabelMember];
        } else {
          return item[this.coLabelMember];
        }
      }
    });
  }

  private loadDownList() {
    if (this.optionList.length === 0) {
      if (this.value) {
        this.loadByIds(this.value);
      } else {
        this.skipCount = 0;
        this.loadMore(null);
      }
    } else {
      if (this.value) {
        if (this.optionList.length === this.value.length || this.optionList.length === 1) {
          this.skipCount = 0;
          this.loadMore(null);
        } else {
          this.optionList = this.sortByDownList(this.optionList);
        }
      }
    }
  }

  //#endregion
}
