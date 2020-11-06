import { ChangeDetectorRef, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

import * as _ from 'lodash';

import { InputBoolean, NzSafeAny, NzSelectComponent, NzSelectModeType, NzSelectSizeType, OnChangeType, OnTouchedType } from 'ng-zorro-antd';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, takeUntil } from 'rxjs/operators';

import { DropdownColumn, DropdownMode, LoadMode } from './index';

/**
 * 客户选择器控件
 */
export class PickerComponentBase implements ControlValueAccessor, OnInit, OnDestroy {
  //#endregion

  //#region  构造函数

  constructor(private cdr: ChangeDetectorRef) {}

  //#endregion

  //#region 公共方法

  get isSearching() {
    return this.nzSelectComponent.nzShowSearch;
  }
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
  @Input() coDropdownRender: TemplateRef<NzSafeAny> | null = null;

  @Input() coDebounceInputCharCount: number = 2;
  @Input() coDebounceTime: number = 200;
  @Input() coPageSize: number = 20;
  @Input() coFilter: any = { includeDeleted: false };

  @Output() readonly coOpenChange = new EventEmitter<boolean>();
  @Output() readonly coBlur = new EventEmitter<void>();
  @Output() readonly coFocus = new EventEmitter<void>();
  @Output() readonly coOptionChange = new EventEmitter<any>();

  @ViewChild(NzSelectComponent, { static: true }) private nzSelectComponent!: NzSelectComponent;

  //#endregion

  //#region 私有变量
  dropdownStyle: { [key: string]: string } | null = null;
  value: NzSafeAny | NzSafeAny[];
  destroy$ = new Subject();
  optionList: Array<{ value: string; text: string }> = [];
  isLoading = false;
  isFirst = true;
  loadingMode: LoadMode = 'more';
  hasMore = true;
  searchText = '';
  skipCount = 0;
  hasLoadedByids = false;
  searchChange$: any = new BehaviorSubject({});
  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};
  coFilterOption = () => true;

  //#endregion

  //#region 组件生命周期钩子

  ngOnInit() {
    const optionList$: Observable<string[]> = this.searchChange$.asObservable().pipe(
      filter(
        (condition: any) =>
          (this.loadingMode === 'search' && condition.searchText && condition.searchText.length > this.coDebounceInputCharCount) ||
          !!condition.ids ||
          this.loadingMode === 'more',
      ),
      debounceTime(this.loadingMode !== 'search' ? 0 : this.coDebounceTime),
      distinctUntilChanged(),
      switchMap((condition: any) => {
        this.isLoading = true;
        condition = {
          ...condition,
          skipCount: this.skipCount,
          maxResultCount: this.coPageSize,
          ...this.coFilter,
        };
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
    if ((modelValue == null || typeof modelValue === 'undefined') && this.isFirst) {
      this.isFirst = false;
      return;
    }

    if (this.value !== modelValue) {
      if (modelValue && this.coValueMember !== this.coLabelMember && !this.hasLoadedByids) {
        this.loadByIds(modelValue);
        this.hasLoadedByids = true;
      }
      this.value = modelValue;
      this.cdr.markForCheck();
    }
  }

  registerOnChange(fn: OnChangeType): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedType): void {
    this.onTouched = fn;
  }

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
    this.coBlur.emit(e);
  }

  onFocus(e: any) {
    this.coFocus.emit(e);
  }

  onChanged(e: any) {
    /* 触发选中item 的事件 */
    try {
      const item = this.optionList.find(o => o[this.coValueMember] === e);
      if (item) {
        this.coOptionChange.emit(item);
      }
    } catch (e) {
      console.error(e);
    }
    this.onChange(e);
  }

  onOpenChanged(e: any) {
    if (!this.coOpen) {
      this.loadDownList(this.value);
    }

    this.coOpenChange.emit(e);
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
    // if (this.coValueMember !== 'id') return;

    this.loadingMode = 'loadByIds';
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
      keyName: this.coValueMember,
      ids: covertModelToList(value, this.coMode),
    });
  }

  private loadBySearchText(value: any): void {
    this.hasMore = true;
    this.loadingMode = 'search';
    this.searchText = value;
    this.skipCount = 0;
    this.searchChange$.next({ searchText: value });
  }

  private loadMore(value: any): void {
    this.loadingMode = 'more';

    this.searchChange$.next({ searchText: value });
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

  private loadDownList(value: any) {
    const val = value || this.value;
    if (val) {
      this.loadByIds(val);
    } else {
      this.skipCount = 0;
      this.loadMore(null);
    }

    // if (this.optionList.length === 0) {
    //   if (val) {
    //     this.loadByIds(val);
    //   } else {
    //     this.skipCount = 0;
    //     this.loadMore(null);
    //   }
    // } else {
    //   if (val) {
    //     if (this.optionList.length === val.length || this.optionList.length === 1) {
    //       this.skipCount = 0;
    //       this.loadMore(null);
    //     } else {
    //       this.optionList = this.sortByDownList(this.optionList);
    //     }
    //   }
    // }
  }

  //#endregion
}
