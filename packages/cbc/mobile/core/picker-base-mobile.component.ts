import {
  ChangeDetectorRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

import * as _ from 'lodash';

import { NzSafeAny, NzSelectComponent, OnChangeType, OnTouchedType } from 'ng-zorro-antd';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, finalize, map, switchMap, takeUntil } from 'rxjs/operators';
/**
 * 客户选择器控件
 */

type DropdownPosition = 'bottom' | 'top' | 'auto';
type AddTagFn = (term: string) => any | Promise<any>;

export class PickerMobileComponentBase implements ControlValueAccessor, OnInit, OnChanges, OnDestroy {
  //#endregion

  //#region  构造函数

  constructor(private cdr: ChangeDetectorRef) {}

  //#endregion

  //#region 公共方法

  get isSearching() {
    return this.nzSelectComponent.nzShowSearch;
  }
  //#region 输入输出参数
  @ViewChild('ngSelectComponent') ngSelectComponent: NgSelectComponent;
  @Input() template: any;
  @Input() coMode = 'default';
  @Input() coBindLabel: string;
  @Input() coBindValue: string;
  @Input() coMarkFirst = true;
  @Input() coPlaceholder: string;
  @Input() coNotFoundText: string = 'No Data';
  @Input() coTypeToSearchText: string;
  @Input() coAddTagText: string;
  @Input() coLoadingText: string;
  @Input() coClearAllText: string;
  @Input() coAppearance: string;
  @Input() coDropdownPosition = 'auto';
  @Input() coAppendTo: string;
  @Input() coLoading = false;
  @Input() coCloseOnSelect = true;
  @Input() coHideSelected = false;
  @Input() coSelectOnTab = false;
  @Input() coOpenOnEnter: boolean;
  @Input() coMaxSelectedItems: number;
  @Input() coGroupBy: string | Function;
  @Input() coBufferAmount = 4;
  @Input() coVirtualScroll: boolean;
  @Input() coSelectableGroup = false;
  @Input() coSelectableGroupAsModel = true;
  @Input() coSearchFn = null;
  @Input() coTrackByFn = null;
  @Input() coClearOnBackspace = true;
  @Input() coLabelForId = null;
  @Input() coInputAttrs: { [key: string]: string } = {};
  @Input() coTabIndex: number;
  @Input() coReadonly = false;
  @Input() coSearchWhileComposing = true;
  @Input() coItemRender: TemplateRef<NzSafeAny> | null = null;
  @Input() coMinTermLength = 0;
  @Input() coEditableSearchTerm = false;
  @Input() keyDownFn = (_: KeyboardEvent) => true;
  @Input() coLabelMember: string = 'name';
  @Input() coValueMember: string = 'id';
  @Input() coPageSize: number = 20;
  @Input() coDebounceTime: number = 200;
  @Input() coFilter: any = { includeDeleted: false };
  @Input() coDebounceInputCharCount: number = 2;
  @Input() set coImportList(arr: any) {
    if (arr) {
      this.importList = arr;
      this.ngOnInit();
    }
  }
  @Input() coTypeahead: Subject<string>;
  @Input() coMultiple = false;
  @Input() coSearchable = true;
  @Input() coClearable = true;
  @Input() coIsOpen = false;

  @Input()
  get items() {
    return this._items;
  }

  set items(value: any[]) {
    this._itemsAreUsed = true;
    this._items = value;
  }

  @Output() readonly coAdd = new EventEmitter<any>();
  @Output() readonly coBlur = new EventEmitter<any>();
  @Output() readonly coChanged = new EventEmitter<any>();
  @Output() readonly coClose = new EventEmitter<any>();
  @Output() readonly coClear = new EventEmitter<any>();
  @Output() readonly coFocus = new EventEmitter<any>();
  @Output() readonly coSearch = new EventEmitter<any>();
  @Output() readonly coOpen = new EventEmitter<any>();
  @Output() readonly coRemove = new EventEmitter<any>();
  @Output() readonly coScroll = new EventEmitter<any>();
  @Output() readonly coOptionChange = new EventEmitter<any>();
  @Output() readonly coOpenChange = new EventEmitter<boolean>();
  @ViewChild(NzSelectComponent, { static: true }) private nzSelectComponent!: NzSelectComponent;

  //#endregion

  //#region 私有变量
  searchText = '';
  importList = [];
  hasMore = true;
  isFirst = true;
  value = null;
  destroy$ = new Subject();
  optionList: Array<{ value: string; text: string }> = [];
  skipCount = 0;
  hasLoadedByids = false;
  loadingMode = 'more';
  searchChange$: any = new BehaviorSubject({});
  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  private _items: any = [];
  private _itemsAreUsed: boolean;
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
        condition = {
          ...condition,
          skipCount: this.skipCount,
          maxResultCount: this.coPageSize,
          ...this.coFilter,
        };
        // return this.customerService.getAllBySearch(condition);
        this.coLoading = true;
        return this.fetchRemoteData(condition).pipe(
          map((data: any) => {
            if (data.items) {
              data.items = [...this.importList, ...data.items];
            }
            this.coLoading = false;
            return data;
          }),
        );
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
      console.log('optionList', this.optionList);
      if (this.loadingMode === 'more') {
        this.skipCount += this.coPageSize;

        if (response.total <= this.coPageSize) {
          this.hasMore = false;
        }
      }
      this.cdr.detectChanges();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items) {
      // @ts-ignore
      this.ngSelectComponent._setItems(changes.items.currentValue || []);
    }
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

  writeValue(modelValue): void {
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

  onAdd(e: any) {
    this.coAdd.emit(e);
  }

  onChanged(e: any) {
    this.coChanged.emit(e);
  }

  onClose(e: any) {
    this.coClose.emit(e);
  }

  onClear(e: any) {
    this.coClear.emit(e);
  }

  onFocus(e: any) {
    this.coFocus.emit(e);
  }

  onSearch(value: any): void {
    if (value) {
      this.loadBySearchText(value.term);
    }
  }

  onOpen(e) {
    this.coOpen.emit(e);
  }

  onRemove(e) {
    this.coRemove.emit(e);
  }

  onScroll(e) {
    this.coScroll.emit(e);
  }

  //#endregion

  //#region 私有方法

  private loadByIds(value: any): void {
    this.loadingMode = 'loadByIds';
    this.skipCount = 0;

    const covertModelToList = (model: NzSafeAny[] | NzSafeAny, mode: any): NzSafeAny[] => {
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

  onLoadMore(): void {
    if (this.hasMore) {
      this.loadMore(this.searchText);
    }
  }

  private loadMore(value: any): void {
    this.loadingMode = 'more';

    this.searchChange$.next({ searchText: value });
  }

  private loadBySearchText(value: any): void {
    this.hasMore = true;
    this.loadingMode = 'search';
    this.searchText = value;
    this.skipCount = 0;
    this.searchChange$.next({ searchText: value });
  }

  protected sortByDownList(items: any[]) {
    return _.sortBy(items, (item: any) => {
      if (this.value) {
        let values: any = this.value;
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
  }

  onOpenChanged(e: any) {
    if (!this.coOpen) {
      this.loadDownList(this.value);
    }

    this.coOpenChange.emit(e);
  }
  //#endregion
}
