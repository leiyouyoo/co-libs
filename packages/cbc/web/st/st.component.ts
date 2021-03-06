import { DecimalPipe, DOCUMENT } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  QueryList,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
  TrackByFunction,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  CNCurrencyPipe,
  DatePipe,
  CoLocaleService,
  CoDrawerHelper,
  LocaleData,
  ModalHelper,
  YNPipe,
  UserCustomConfigService,
} from '@co/common';
import { CoI18NService, CO_I18N_TOKEN, debounce } from '@co/core';
import { CoConfigService, CoSTConfig, deepCopy, deepMergeKey, InputBoolean, InputNumber, toBoolean } from '@co/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTableComponent, NzTableData } from 'ng-zorro-antd/table';
import { from, Observable, of, Subject, Subscription, timer } from 'rxjs';
import { delay, filter, takeUntil } from 'rxjs/operators';
import { STColumnSource } from './st-column-source';
import { STDataSource, STDataSourceOptions, STDataSourceResult } from './st-data-source';
import { STExport } from './st-export';
import { STRowSource } from './st-row.directive';
import { ST_DEFULAT_CONFIG } from './st.config';
import {
  STChange,
  STChangeType,
  STColumn,
  STColumnButton,
  STColumnFilterMenu,
  STColumnSelection,
  STColumnSetting,
  STData,
  STError,
  STExportOptions,
  STLoadOptions,
  STMultiSort,
  STPage,
  STReq,
  STRes,
  STResetColumnsOption,
  STRowClassName,
  STSingleSort,
  STStatisticalResults,
  STWidthMode,
} from './st.interfaces';
import { generateModel, mergeSorted } from './utils';
import { PlatformSettingService } from '@co/cds';
import { StUserSettingService } from './st-user-setting.service';
import * as _ from 'lodash';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';

@Component({
  selector: 'co-st',
  exportAs: 'coSt',
  templateUrl: './st.component.html',
  providers: [STDataSource, STRowSource, STColumnSource, STExport, StUserSettingService, CNCurrencyPipe, DatePipe, YNPipe, DecimalPipe],
  host: {
    '[class.st]': `true`,
    '[class.st__p-left]': `page.placement === 'left'`,
    '[class.st__p-center]': `page.placement === 'center'`,
    '[class.st__width-strict]': `widthMode.type === 'strict'`,
    '[class.st-bordered]': `bordered`,
    '[class.ant-table-rep]': `responsive`,
    '[class.ant-table-rep__hide-header-footer]': `responsiveHideHeaderFooter`,
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class STComponent implements AfterContentInit, AfterViewInit, OnChanges, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  private data$: Subscription;
  private totalTpl = ``;
  private cog: CoSTConfig;
  private rowClickCount = 0;
  private _req: STReq;
  private _res: STRes;
  private _page: STPage;
  private _widthMode: STWidthMode;
  locale: LocaleData = {};
  _loading = false;
  _data: STData[] = [];
  _statistical: STStatisticalResults = {};
  _isPagination = true;
  _allChecked = false;
  _allCheckedDisabled = false;
  _indeterminate = false;
  _headers: STColumn[][] = [];
  _columns: STColumn[] = [];
  _showFilters = false;
  _filterRow: STColumn[] = [];
  activatedRowValue: any;

  @ViewChild('table', { static: false }) readonly orgTable: NzTableComponent;
  private expandSTChangeList$: Subscription[] = [];
  private _expandSTList: QueryList<STComponent>;
  get expandSTList(): QueryList<STComponent> {
    return this._expandSTList;
  }
  @ContentChildren(STComponent) set expandSTList(value: QueryList<STComponent>) {
    this.expandSTChangeList$.forEach(o => o.unsubscribe());
    this.expandSTChangeList$ = value.toArray().map((o, i) => {
      return o.change.pipe(takeUntil(this.unsubscribe$)).subscribe(event => {
        switch (event.type) {
          case 'checkbox':
            this._checkSelection(this._data[i], !!event.checkbox?.length, -1);
            break;
          default:
        }
      });
    });
    this._expandSTList = value;
  }

  @Input()
  get req() {
    return this._req;
  }
  set req(value: STReq) {
    this._req = deepMergeKey({}, true, this.cog.req, value);
    this._req.params = value.params;
  }
  /** ??????????????? */
  @Input()
  get res() {
    return this._res;
  }
  set res(value: STRes) {
    const item = (this._res = deepMergeKey({}, true, this.cog.res, value));
    const reName = item.reName!;
    if (!Array.isArray(reName.list)) reName.list = reName.list!.split('.');
    if (!Array.isArray(reName.total)) reName.total = reName.total!.split('.');
    this._res = item;
  }
  @Input()
  get page() {
    return this._page;
  }
  set page(value: STPage) {
    this._page = { ...this.cog.page, ...value };
    this.updateTotalTpl();
  }
  @Input() data: string | STData[] | Observable<STData[]>;
  @Input() @InputNumber() ps = 10;
  @Output() psChange = new EventEmitter<number>();
  @Input() @InputNumber() pi = 1;
  @Output() piChange = new EventEmitter<number>();
  @Input() @InputNumber() total = 0;
  @Input() loading: boolean | null = null;
  @Input() @InputNumber() loadingDelay = 0;
  @Input() loadingIndicator: TemplateRef<void>;
  @Input() @InputBoolean() bordered = true;
  @Input() size: 'small' | 'middle' | 'default';
  @Input() singleSort: STSingleSort;
  @Input() @InputNumber() columnDefaultWidth: number;
  rawData: any;
  _scroll: { y?: string; x?: string };
  get scroll(): { y?: string; x?: string } {
    /**
     * fix: virtual scroll height
     */
    // if (this.virtualScroll && !this._data?.length) return {};
    return this._scroll;
  }
  @Input() set scroll(value: { y?: string; x?: string }) {
    this._scroll = value;
  }
  private _multiSort?: STMultiSort;
  @Input()
  get multiSort() {
    return this._multiSort;
  }
  set multiSort(value: NzSafeAny) {
    if ((typeof value === 'boolean' && !toBoolean(value)) || (typeof value === 'object' && Object.keys(value).length === 0)) {
      this._multiSort = undefined;
      return;
    }
    this._multiSort = {
      ...(typeof value === 'object' ? value : {}),
    };
  }
  @Input() rowClassName: STRowClassName;
  @Input()
  set widthMode(value: STWidthMode) {
    this._widthMode = { ...this.cog.widthMode, ...value };
  }
  get widthMode() {
    return this._widthMode;
  }
  @Input()
  set showFilters(val: boolean) {
    this._showFilters = val;
    if (this.columnSource.cog) {
      this.columnSource.cog.showFilters = val;
    }
  }
  get showFilters(): boolean {
    return this._showFilters;
  }
  _originColumns: STColumn[] = [];
  _sortedColumns: STColumn[] = [];
  @Input() set columns(val: STColumn[]) {
    this._originColumns = val;
    this._sortedColumns = val;
  }
  get columns(): STColumn[] {
    return this._sortedColumns;
  }

  @Input() header: string | TemplateRef<void>;
  @Input() footer: string | TemplateRef<void>;
  @Input() bodyHeader: TemplateRef<STStatisticalResults>;
  @Input() body: TemplateRef<STStatisticalResults>;
  @Input() @InputBoolean() expandRowByClick = false;
  @Input() @InputBoolean() expandAccordion = false;
  @Input() expand: TemplateRef<{ $implicit: {}; column: STColumn }>;
  @Input() noResult: string | TemplateRef<void>;
  @Input() widthConfig: string[] = [];
  @Input() @InputNumber() rowClickTime = 200;
  @Input() @InputBoolean() responsive: boolean = true;
  @Input() @InputBoolean() responsiveHideHeaderFooter: boolean;
  // tslint:disable-next-line:no-output-native
  @Output() readonly error = new EventEmitter<STError>();
  // tslint:disable-next-line:no-output-native
  @Output() readonly change = new EventEmitter<STChange>();
  @Input() @InputBoolean() virtualScroll = false;
  @Input() @InputNumber() virtualItemSize = 54;
  @Input() @InputNumber() virtualMaxBufferPx = 200;
  @Input() @InputNumber() virtualMinBufferPx = 100;
  @Input() virtualForTrackBy: TrackByFunction<NzTableData> = index => index;
  @Input() @InputBoolean() showCheckbox = true;
  @Input() @InputBoolean() checkOnLoad = false;
  @Input() checkboxSelections = [];
  @Input() @InputBoolean() buttonPropagation = false;
  @Input() @InputBoolean() cellContentPropagation = false;
  @Input() @InputBoolean() loadOnScroll = false;
  @Input() @InputBoolean() uncheckMuteCheckbox = false;
  @Input() columnSettingName: string = 'st';
  @Input() activatedRowKey: string = 'id';

  /**
   * Get the number of the current page
   */
  get count(): number {
    return this._data.length;
  }

  /**
   * Get the data of the current page
   */
  get list(): STData[] {
    return this._data;
  }

  private get routerState() {
    const { pi, ps, total } = this;
    return { pi, ps, total };
  }

  constructor(
    @Optional() @Inject(CO_I18N_TOKEN) private i18nSrv: CoI18NService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private el: ElementRef,
    private exportSrv: STExport,
    private modalHelper: ModalHelper,
    private drawerHelper: CoDrawerHelper,
    @Inject(DOCUMENT) private doc: any,
    private columnSource: STColumnSource,
    private dataSource: STDataSource,
    private delonI18n: CoLocaleService,
    private userCustomConfigService: UserCustomConfigService,
    configSrv: CoConfigService,
  ) {
    this.setCog(configSrv.merge('st', ST_DEFULAT_CONFIG)!);

    this.delonI18n.change.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.locale = this.delonI18n.getData('st');
      if (this._columns.length > 0) {
        this.updateTotalTpl();
        this.cd();
      }
    });

    i18nSrv.change
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(() => this._columns.length > 0),
      )
      .subscribe(() => {
        this.refreshColumns();
        this.cd();
      });
  }

  private setCog(cog: CoSTConfig): void {
    const copyMultiSort = { ...cog.multiSort };
    // Because multiSort.global will affect the result, it should be removed first, and multiSort will be operated again after processing.
    delete cog.multiSort;
    this.cog = cog;
    Object.assign(this, cog);

    if (copyMultiSort.global !== false) {
      this.multiSort = copyMultiSort;
    }
    this.columnSource.setCog(cog);
  }

  cd() {
    this.cdr.detectChanges();
    return this;
  }

  renderTotal(total: string, range: string[]) {
    return this.totalTpl
      ? this.totalTpl.replace('{{total}}', total).replace('{{range[0]}}', range[0]).replace('{{range[1]}}', range[1])
      : '';
  }

  isTruncate(column: STColumn): boolean {
    return !!column.width && this.widthMode.strictBehavior === 'truncate' && column.type !== 'img' && column.strictBehavior !== 'wrap';
  }

  columnClass(column: STColumn): string | null {
    return column.className || (this.isTruncate(column) ? 'text-truncate' : null);
  }

  private changeEmit(type: STChangeType, data?: any) {
    const res: STChange = {
      type,
      pi: this.pi,
      ps: this.ps,
      total: this.total,
    };
    if (data != null) {
      res[type] = data;
    }
    this.change.emit(res);
  }

  // #region data

  /**
   * ???????????????????????????
   * - ??????????????????????????????????????????????????????
   * - ???????????????????????? `pi`???`ps` ????????????
   */
  get filteredData(): Promise<STData[]> {
    return this.loadData({ paginator: false } as any).then(res => res.list);
  }

  private updateTotalTpl(): void {
    const { total } = this.page;
    if (typeof total === 'string' && total.length) {
      this.totalTpl = total;
    } else if (toBoolean(total)) {
      this.totalTpl = this.locale.total;
    } else {
      this.totalTpl = '';
    }
  }

  private setLoading(val: boolean): void {
    if (this.loading == null) {
      this._loading = val;
      this.cdr.detectChanges();
    }
  }

  private loadData(options?: STDataSourceOptions): Promise<STDataSourceResult> {
    const { pi, ps, data, req, res, page, total, singleSort, multiSort, rowClassName, checkOnLoad, showFilters } = this;
    return new Promise((resolvePromise, rejectPromise) => {
      if (this.data$) {
        this.data$.unsubscribe();
      }

      this.data$ = this.dataSource
        .process({
          pi,
          ps,
          total,
          data,
          req,
          res,
          page,
          columns: this._columns,
          singleSort,
          multiSort,
          rowClassName,
          checkOnLoad,
          paginator: true,
          showFilters,
          ...options,
        })
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          result => resolvePromise(result),
          error => {
            console.error('st.loadDate', error);
            rejectPromise(error);
          },
        );
    });
  }

  async loadPageData(
    option: {
      appendData: boolean;
      singleLoading: boolean;
    } = {} as any,
  ): Promise<this> {
    const { appendData, singleLoading } = option;
    if (singleLoading && this._loading) return this;
    if (appendData) this.pi++;
    this.setLoading(true);
    try {
      const result = await this.loadData();
      this.setLoading(false);
      if (typeof result.pi !== 'undefined') {
        this.pi = result.pi;
      }
      if (typeof result.ps !== 'undefined') {
        this.ps = result.ps;
      }
      if (typeof result.total !== 'undefined') {
        this.total = result.total;
      }
      if (typeof result.pageShow !== 'undefined') {
        this._isPagination = result.pageShow;
      }
      if (appendData) {
        this._data = this._data.concat(result.list as STData[]);
      } else {
        this._data = result.list as STData[];
      }
      this.rawData = result.rawData;
      this._statistical = result.statistical as STStatisticalResults;
      this.changeEmit('loaded', result.list);
      return this._refCheck();
    } catch (error) {
      this.setLoading(false);
      if (!this.unsubscribe$.isStopped) {
        this.cdr.detectChanges();
        this.error.emit({ type: 'req', error });
      }
      return this;
    }
  }

  /** ?????????????????? */
  clear(cleanStatus = true): this {
    if (cleanStatus) {
      this.clearStatus();
    }
    this._data = [];
    return this.cd();
  }

  /** ?????????????????? */
  clearStatus(): this {
    return this.clearCheck().clearRadio().clearFilter().clearSort();
  }

  /**
   * ??????????????????????????????
   *
   * @param pi ??????????????????????????????`1`
   * @param extraParams ???????????? `extraParams` ???
   * @param options ??????
   */
  load(pi = 1, extraParams?: {}, options?: STLoadOptions) {
    if (pi !== -1) this.pi = pi;
    if (typeof extraParams !== 'undefined') {
      this.req.params = options && options.merge ? { ...this.req.params, ...extraParams } : extraParams;
    }
    this._change('pi', options);
    return this;
  }

  /**
   * ?????????????????????
   * @param extraParams ???????????? `extraParams` ???
   */
  reload(extraParams?: {}, options?: STLoadOptions) {
    return this.load(-1, extraParams, options);
  }

  /**
   * ????????????????????? `pi` ??? `1`?????????????????????
   * - `check` ??????
   * - `radio` ??????
   * - `sort` ??????
   * - `fileter` ??????
   *
   * @param extraParams ???????????? `extraParams` ???
   */
  reset(extraParams?: {}, options?: STLoadOptions) {
    this.clearStatus().load(1, extraParams, options);
    return this;
  }

  private _toTop(enforce?: boolean) {
    if (!(enforce == null ? this.page.toTop : enforce)) return;
    const el = this.el.nativeElement as HTMLElement;
    if (this.scroll) {
      el.querySelector('.ant-table-body')?.scrollTo(0, 0);
      return;
    }
    el.scrollIntoView();
    // fix header height
    this.doc.documentElement.scrollTop -= this.page.toTopOffset!;
  }

  _change(type: 'pi' | 'ps', options?: STLoadOptions) {
    if (type === 'pi' || (type === 'ps' && this.pi <= Math.ceil(this.total / this.ps))) {
      this.loadPageData().then(() => this._toTop(options?.toTop));
    }

    this.changeEmit(type);
  }

  _click(e: Event, item: STData, col: STColumn) {
    e.preventDefault();
    e.stopPropagation();
    const res = col.click!(item, this);
    if (typeof res === 'string') {
      this.router.navigateByUrl(res, { state: this.routerState });
    }
    return false;
  }
  private closeOtherExpand(item: STData) {
    if (this.expandAccordion === false) return;
    this._data.filter(i => i !== item).forEach(i => (i.expand = false));
  }
  _rowClick(e: MouseEvent, item: STData, index: number) {
    if ((e.target as HTMLElement).nodeName === 'INPUT') return;
    const { expand, expandRowByClick, rowClickTime } = this;
    if (!!expand && item.showExpand !== false && expandRowByClick) {
      item.expand = !item.expand;
      this.closeOtherExpand(item);
      this.changeEmit('expand', item);
      return;
    }
    ++this.rowClickCount;
    if (this.rowClickCount !== 1) return;
    setTimeout(() => {
      const data = { e, item, index };
      if (this.rowClickCount === 1) {
        if (!this.cellContentPropagation && (e.target as HTMLElement)?.matches(`span[data-cell-span] *`)) {
          // nothing to do
        } else {
          this.changeEmit('click', data);
        }
      } else {
        this.changeEmit('dblClick', data);
      }
      this.rowClickCount = 0;
    }, rowClickTime);
  }

  _expandChange(item: STData, expand: boolean): void {
    if (this.expandRowByClick) {
      return;
    }
    item.expand = expand;
    this.closeOtherExpand(item);
    this.changeEmit('expand', item);
  }

  /**
   * Remove a row in the table, like this:
   *
   * ```
   * this.st.removeRow(0)
   * this.st.removeRow(stDataItem)
   * ```
   */
  removeRow(data: STData | STData[] | number) {
    if (typeof data === 'number') {
      this._data.splice(data, 1);
    } else {
      if (!Array.isArray(data)) {
        data = [data];
      }

      (data as STData[])
        .map(item => this._data.indexOf(item))
        .filter(pos => pos !== -1)
        .forEach(pos => this._data.splice(pos, 1));
      this._data = [...this._data];
    }
    // recalculate no
    this._columns
      .filter(w => w.type === 'no')
      .forEach(c =>
        this._data.forEach(
          (i, idx) => (i._values[c.__point] = { _text: this.dataSource.getNoIndex(i, c, idx, (this.pi - 1) * this.ps), org: idx }),
        ),
      );

    return this.cd();
  }

  /**
   * Sets the row value for the `index` in the table, like this:
   *
   * - `optinos.refreshSchema` Whether to refresh of st schemas
   * - `optinos.emitReload` Whether to trigger a reload http request when data is url
   *
   * ```
   * this.st.setRow(0, { price: 100 })
   * this.st.setRow(0, { price: 100, name: 'asdf' })
   * ```
   */
  setRow(index: number, item: STData, options?: { refreshSchema?: boolean; emitReload?: boolean }): this {
    options = { refreshSchema: false, emitReload: false, ...options };
    this._data[index] = deepMergeKey(this._data[index], false, item);
    this.optimizeData();
    if (options.refreshSchema) {
      this.resetColumns({ emitReload: options.emitReload });
      return this;
    }
    this.cdr.detectChanges();
    return this;
  }

  // #endregion

  // #region sort

  sort(col: STColumn, idx: number, value: any) {
    console.log(this.multiSort);
    if (this.multiSort) {
      col._sort!.default = value;
      col._sort!.tick = this.dataSource.nextSortTick;
    } else {
      this._columns.forEach((item, index) => (item._sort!.default = index === idx ? value : null));
    }
    this.cdr.detectChanges();
    if (this.loadOnScroll) this.pi = 1;
    this.loadPageData();
    const res = {
      value,
      map: this.dataSource.getReqSortMap(this.singleSort, this.multiSort, this._columns),
      column: col,
    };
    this.changeEmit('sort', res);
  }

  clearSort() {
    this._columns.forEach(item => (item._sort!.default = null));
    return this;
  }

  // #endregion

  // #region filter

  private handleFilter(col: STColumn) {
    this.columnSource.updateDefault(col.filter!);
    this.loadPageData();
    this.changeEmit('filter', col);
  }

  ifNeedFilterConfirm(input: string): boolean {
    return !input || input?.length > 2;
  }

  @debounce(2e2)
  _filterConfirm(col: STColumn) {
    console.log(col);
    this.pi = 1;
    this.handleFilter(col);
  }

  _filterRadio(col: STColumn, item: STColumnFilterMenu, checked: boolean) {
    col.filter!.menus!.forEach(i => (i.checked = false));
    item.checked = checked;
  }

  _filterClear(col: STColumn) {
    this.columnSource.cleanFilter(col);
    this.handleFilter(col);
  }

  clearFilter() {
    this._columns.filter(w => w.filter && w.filter.default === true).forEach(col => this.columnSource.cleanFilter(col));
    return this;
  }

  _filterClick($event: MouseEvent): void {
    $event.stopPropagation();
  }
  // #endregion

  // #region checkbox

  /** ???????????? `checkbox` */
  clearCheck(): this {
    return this._checkAll(false);
  }

  _refCheck(): this {
    const validData = this._data.filter(w => !w.disabled);
    const checkedList = validData.filter(w => w.checked === true);
    this._allChecked = checkedList.length > 0 && checkedList.length === validData.length;
    const allUnChecked = validData.every(value => !value.checked);
    this._indeterminate = !this._allChecked && !allUnChecked;
    this._allCheckedDisabled = this._data.length === this._data.filter(w => w.disabled).length;
    this.optimizeData();
    return this.cd();
  }

  _checkAll(checked?: boolean): this {
    checked = typeof checked === 'undefined' ? this._allChecked : checked;
    if (!checked) {
      const checkList = this._data.filter(w => w.checked && !w.disabled);
      this._uncheckNotify(checkList);
    }
    this._data.filter(w => !w.disabled).forEach(i => (i.checked = checked));
    this._refCheck();
    if (!this.uncheckMuteCheckbox) {
      this._checkNotify();
    }
    return this;
  }

  _checkSelection(i: STData, value: boolean, index: number) {
    i.checked = value;
    this.expandSTList.toArray()?.[index]?._checkAll(value);
    if (!value) {
      this._uncheckNotify([i]);
    }
    this._refCheck();
    if (!this.uncheckMuteCheckbox) {
      this._checkNotify();
    }
    return this;
  }

  _rowSelection(row: STColumnSelection): this {
    row.select(this._data);
    return this._refCheck()._checkNotify();
  }

  _checkNotify(): this {
    const res = this._data.filter(w => !w.disabled && w.checked === true);
    this.changeEmit('checkbox', res);
    return this;
  }

  _uncheckNotify(res: STData[]): this {
    this.changeEmit('uncheck', res);
    return this;
  }

  getCheckedList(): STData[] {
    const res = this._data.filter(w => !w.disabled && w.checked === true);
    const expandSelected = this.expandSTList
      ?.toArray()
      .map(o => o.getCheckedList())
      .filter(o => !!o.length);

    return res.map((o, i) => ({
      ...o,
      expandSelectedList: expandSelected?.[i],
    }));
  }

  // #endregion

  // #region radio

  /** ???????????? `radio` */
  clearRadio(): this {
    this._data.filter(w => w.checked).forEach(item => (item.checked = false));
    this.changeEmit('radio', null);
    return this;
  }

  _refRadio(checked: boolean, item: STData): this {
    // if (item.disabled === true) return;
    this._data.filter(w => !w.disabled).forEach(i => (i.checked = false));
    item.checked = checked;
    this.changeEmit('radio', item);
    return this;
  }

  // #endregion

  // #region buttons

  _btnClick(record: STData, btn: STColumnButton, e: Event, index: number) {
    // should be stop propagation when expandRowByClick is true
    if (e && this.expandRowByClick === true) {
      e.stopPropagation();
    }
    if (btn.type === 'modal' || btn.type === 'static') {
      const { modal } = btn;
      const obj = { [modal!.paramsName!]: record };
      (this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'] as any)(
        modal!.component,
        { ...obj, ...(modal!.params && modal!.params!(record)) },
        deepMergeKey({}, true, this.cog.modal, modal),
      )
        .pipe(filter(w => typeof w !== 'undefined'))
        .subscribe((res: NzSafeAny) => this.btnCallback(record, btn, res));
      return;
    } else if (btn.type === 'drawer') {
      const { drawer } = btn;
      const obj = { [drawer!.paramsName!]: record };
      this.drawerHelper
        .create(
          drawer!.title!,
          drawer!.component,
          { ...obj, ...(drawer!.params && drawer!.params!(record)) },
          deepMergeKey({}, true, this.cog.drawer, drawer),
        )
        .pipe(filter(w => typeof w !== 'undefined'))
        .subscribe(res => this.btnCallback(record, btn, res));
      return;
    } else if (btn.type === 'link') {
      const clickRes = this.btnCallback(record, btn);
      if (typeof clickRes === 'string') {
        this.router.navigateByUrl(clickRes, { state: this.routerState });
      }
      return;
    } else if (btn.type === 'delay') {
      /* ??????text ????????????bug */
      const recordDelayPath = ['_button', btn.text, 'delay'] as string[];
      const delay$ = _.get(record, recordDelayPath);

      if (delay$) {
        delay$.unsubscribe();
        _.set(record, recordDelayPath, void 0);
      } else {
        const newDelay$ = timer(3e3).subscribe(() => {
          _.set(record, recordDelayPath, void 0);
          this.btnCallback(record, btn);
          this.cd();
        });
        _.set(record, recordDelayPath, newDelay$);
      }
      return;
    } else if (btn.type === 'edit') {
    } else if (btn.type === 'save') {
      const model = generateModel(record);
      if (record._new) {
        /* new one */
      } else {
        /* edit exist */
      }
    } else if (btn.type === 'cancel') {
      if (record._new) {
        /* new one */
        const _index = this._data.findIndex(o => o === record);
        this._data.splice(_index, 1);
        this.optimizeData();
      } else {
        /* edit exist */
        record._editing = false;
        record?._values?.forEach(o => {
          o.value = deepCopy(o.org);
        });
      }
    }
    this.btnCallback(record, btn);
  }

  private btnCallback(record: STData, btn: STColumnButton, modal?: any) {
    if (!btn.click) return;
    if (typeof btn.click === 'string') {
      // ????????????????????????: load, reload
      switch (btn.click) {
        case 'load':
          this.load();
          break;
        case 'reload':
          this.reload();
          break;
      }
    } else {
      // callback ??????
      const result = btn.click(record, modal, this);
      if (result instanceof Promise) {
        // todo loading
        /* ??????text ????????????bug */
        const recordLoadingPath = ['_button', btn.text, 'loading'] as string[];
        _.set(record, recordLoadingPath, true);

        return result
          .finally(() => {
            _.set(record, recordLoadingPath, false);
            this.cd();
          })
          .then(data => {
            switch (data?.action) {
              case 'delete':
                this.removeRow(record);
                break;
              default:
            }
            return data;
          });
      } else {
        return result;
      }
    }
  }

  _btnText(record: STData, btn: STColumnButton) {
    let text = typeof btn.text === 'function' ? btn.text(record, btn) : btn.text || '';
    if (text && !btn.disableI18n) {
      text = this.i18nSrv.fanyi(text);
    }
    return text;
  }

  _validBtns(btns: STColumnButton[], item: STData, col: STColumn, isRoot = false): STColumnButton[] {
    const filteredBtns = btns.filter(btn => {
      const result = btn.iif!(item, btn, col);
      const isRenderDisabled = btn.iifBehavior === 'both' ? result === false : btn.iifBehavior === 'disabled';
      btn._result = result;
      btn._disabled = !result && isRenderDisabled;
      if (btn.className) {
        btn._className = typeof btn.className === 'string' ? btn.className : btn.className(item);
      }
      /* ?????????????????????????????? */
      let showOnEdit: boolean;
      if (item._editing) {
        showOnEdit = btn.type !== 'edit';
      } else {
        showOnEdit = !['save', 'cancel'].includes(btn.type as string);
      }
      return (result || isRenderDisabled) && showOnEdit;
    });
    let nestedBtns: STColumnButton[] = [];
    if (isRoot && filteredBtns?.length > 3) {
      nestedBtns = (() => {
        const [firstBtn, secondBtn, ...lastBtns] = filteredBtns;
        const retBtns: STColumnButton[] = [];
        if (firstBtn) retBtns.push(firstBtn);
        if (secondBtn) retBtns.push(secondBtn);
        if (lastBtns?.length) retBtns.push({ children: lastBtns });
        return retBtns;
      })();
    } else {
      nestedBtns = filteredBtns;
    }

    return nestedBtns;
  }

  /* not production ready */
  btnTrackByFn(index: number, item: STColumnButton) {
    if (item.children?.length) {
      return item.children[0];
    } else {
      return item;
    }
  }

  // #endregion

  // #region export

  /**
   * ???????????????????????????????????? `XlsxModule`
   * @param newData ??????????????????????????? `true` ???????????? `filteredData` ??????
   * @param opt ????????????
   */
  export(newData?: STData[] | true, opt?: STExportOptions) {
    (newData === true ? from(this.filteredData) : of(newData || this._data)).subscribe((res: STData[]) =>
      this.exportSrv.export({
        ...opt,
        _d: res,
        _c: this._columns,
      }),
    );
  }

  // #endregion

  get cdkVirtualScrollViewport() {
    return this.orgTable.cdkVirtualScrollViewport!;
  }

  resetColumns(options?: STResetColumnsOption): Promise<this> {
    options = { emitReload: true, ...options };
    if (typeof options.columns !== 'undefined') {
      this.columns = options.columns;
    }
    if (typeof options.pi !== 'undefined') {
      this.pi = options.pi;
    }
    if (typeof options.ps !== 'undefined') {
      this.ps = options.ps;
    }
    this.refreshColumns();
    if (options.emitReload === true) {
      // Should clean data, Because of changing columns may cause inaccurate data
      this._data = [];
      return this.loadPageData();
    } else {
      this.cd();
      return Promise.resolve(this);
    }
  }

  private refreshColumns(): this {
    const res = this.columnSource.process(this.columns, { defaultWidth: this.columnDefaultWidth });
    this._columns = res.columns;
    this._headers = res.headers;
    this._filterRow = res.filterRow;
    return this;
  }

  getFilterOptions(column: STColumn, index: number, input?: string): any[] {
    /*  */
    if (column?.filter?.optionList) {
      return (column.filter.optionList as { label: string; value: any }[]).map(o => ({ ...o, label: this.i18nSrv.fanyi(o.label) }));
    }
    const arr = Array.from(new Set(this._data.map(o => o._values[index].text)));
    let result: any[];
    switch (column.filter!.type) {
      case 'autocomplete':
        result = arr.filter(o => {
          const str = o + '';
          return input ? str.includes(input) : true;
        });
        break;
      case 'select':
      default:
        result = arr.map(o => ({ label: o + '', value: o }));
    }

    return result;
  }

  optimizeData(): void {
    this._data = this.dataSource.optimizeData({
      columns: this._columns,
      result: this._data,
      rowClassName: this.rowClassName,
      pi: this.pi,
      ps: this.ps,
    });
  }

  addNewRow() {
    this._data.unshift({ _editing: true, _new: true, _values: [] });
    this.optimizeData();
    this.cdr.markForCheck();
  }

  /**
   *
   */
  showLoading(type?: 'nz-table' | 'load-on-scroll'): boolean {
    switch (type) {
      case 'nz-table':
        return this.loadOnScroll ? this.pi === 1 && this._loading : this._loading;
      case 'load-on-scroll':
        return this.loadOnScroll && this.pi !== 1 && this._loading;
      default:
        return this.loadOnScroll ? false : this._loading;
    }
  }

  /**
   * ????????????????????????
   */
  getEnabledColumns(columns: STColumn[], mapKey = '', debugName?: string): STColumn[] {
    return columns.filter(o => {
      o = mapKey ? o[mapKey] : o;
      return o.columnShow !== false;
    });
  }

  sortColumns() {
    try {
      const settingColumns = this.userCustomConfigService.getByPath([this.columnSettingName, 'columns']);
      if (!settingColumns?.length) return;
      const columns = this._originColumns;
      const result = mergeSorted(columns, settingColumns, 'index').map(o => {
        const index = columns.findIndex(p => {
          return p === o;
        });
        return columns[index];
      });
      this._sortedColumns = result;
    } catch (e) {
      console.error(e);
      this._sortedColumns = [...this._originColumns];
    }
  }

  resortColumns() {
    this.sortColumns();
    this.refreshColumns().optimizeData();
    this.cd();
  }

  onResize({ width }: NzResizeEvent, col: STColumn) {
    let x = this._sortedColumns.find(o => o.title === col._oriColumn!.title && o.index === col._oriColumn!.index);
    if (!x) {
      this._sortedColumns?.some(o => {
        x = o.children?.find(child => child.title === col._oriColumn!.title && child.index === col._oriColumn!.index);
        return !!x;
      });
    }
    (x as any).width = width;

    this.refreshColumns().optimizeData();
    this.cd();
  }

  isFunction(func): boolean {
    return typeof func === 'function';
  }

  resetFilters() {
    this._filterRow?.forEach(filter => {
      filter?.column?.filter?.menus?.forEach(m => {
        m.value = null;
      });
    });
    this.loadPageData();
  }

  htmlToText(text: string) {
    if (typeof text !== 'string') return text;
    return text?.replace(/<[^>]+>/g, '');
  }

  ngAfterContentInit() {}

  ngAfterViewInit() {
    this.columnSource.restoreAllRender(this._columns);
    this.cd();
  }

  ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
    const changeData = changes.data;
    /* columns must be set before load data */
    if (changes.columnSettingName || changes.columns) {
      this.sortColumns();
      this.refreshColumns().optimizeData();
    }
    if (changeData && changeData.currentValue && !(this.req.lazyLoad && changeData.firstChange)) {
      this.loadPageData();
    }
    if (changes.loading) {
      this._loading = changes.loading.currentValue;
    }
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }

  ngDoCheck() {}
}
