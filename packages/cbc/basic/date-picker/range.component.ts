import { Component, EventEmitter, forwardRef, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import {
  CoConfigService,
  CoDateRangePickerConfig,
  CoDateRangePickerShortcut,
  CoDateRangePickerShortcutItem,
  deepMergeKey,
  fixEndTimeOfRange,
  getTimeDistance,
  InputBoolean,
} from '@co/core';
import { FunctionProp, NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzRangePickerComponent } from 'ng-zorro-antd/date-picker';

/**
 * 日期范围选择组件
 */
@Component({
  selector: 'co-range-picker',
  exportAs: 'coRangePicker',
  templateUrl: './range.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => RangePickerComponent),
    },
  ],
})
export class RangePickerComponent implements ControlValueAccessor {
  @Input() ngModelEnd: Date;
  @Input()
  set shortcut(val: CoDateRangePickerShortcut | null) {
    const item = deepMergeKey({}, true, this.defaultShortcuts, val == null ? {} : val) as CoDateRangePickerShortcut;
    if (typeof val === 'boolean') {
      item.enabled = val;
    }
    (item.list || []).forEach(i => {
      i._text = this.dom.bypassSecurityTrustHtml(i.text);
    });
    this._shortcut = item;
  }
  get shortcut() {
    return this._shortcut;
  }
  @Output() readonly ngModelEndChange = new EventEmitter<Date>();

  // #region 输入输出参数

  @Input() nzAllowClear = true;
  @Input() nzAutoFocus = false;
  @Input() nzClassName: string;
  @Input() nzDisabled: boolean;
  @Input() nzSize: string;
  @Input() nzStyle: string;
  @Input() nzDisabledDate: (d: Date) => boolean;
  @Input() nzLocale: object;
  @Input() nzPopupStyle: object;
  @Input() nzDropdownClassName: string;
  @Input() nzPlaceHolder: string | string[];
  @Output() readonly nzOnOpenChange = new EventEmitter<boolean>();

  // range
  @Input() nzDateRender: any;
  @Input() nzFormat: any;
  @Input() nzDisabledTime: any;
  @Input() nzRenderExtraFooter: FunctionProp<TemplateRef<void> | string>;
  @Input() nzShowTime: any;
  @Input() @InputBoolean() nzShowToday: boolean = true;
  @Input() nzMode: any;
  @Input() nzRanges: any;
  @Output() readonly nzOnPanelChange = new EventEmitter<any>();
  @Output() readonly nzOnOk = new EventEmitter<any>();

  // #endregion

  //#region 私有变量

  private onChangeFn: (val: Date) => void;
  private _shortcut: CoDateRangePickerShortcut;
  private defaultShortcuts: CoDateRangePickerShortcut;
  @ViewChild('comp', { static: false }) private comp: NzRangePickerComponent;
  value: Date[] = [];

  //#endregion

  constructor(private dom: DomSanitizer, configSrv: CoConfigService) {
    const cog = configSrv.merge<CoDateRangePickerConfig, 'dataRange'>('dataRange', {
      nzFormat: 'yyyy-MM-dd',
      nzAllowClear: true,
      nzAutoFocus: false,
      nzPopupStyle: { position: 'relative' },
      nzShowToday: true,
      shortcuts: {
        enabled: false,
        closed: true,
        list: [
          {
            text: '今天',
            fn: () => getTimeDistance('today'),
          },
          {
            text: '昨天',
            fn: () => getTimeDistance('yesterday'),
          },
          {
            text: '近3天',
            fn: () => getTimeDistance(-2),
          },
          {
            text: '近7天',
            fn: () => getTimeDistance(-6),
          },
          {
            text: '本周',
            fn: () => getTimeDistance('week'),
          },
          {
            text: '本月',
            fn: () => getTimeDistance('month'),
          },
          {
            text: '全年',
            fn: () => getTimeDistance('year'),
          },
        ],
      },
    });
    this.defaultShortcuts = { ...cog.shortcuts } as CoDateRangePickerShortcut;
    Object.assign(this, cog);
  }

  //#region ngModel实现

  writeValue(value: Date): void {
    this.value = value && this.ngModelEnd ? [value, this.ngModelEnd] : [];
  }

  registerOnChange(fn: (val: Date) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(_fn: () => void): void {
    // this.onTouchedFn = fn;
  }

  //#endregion

  //#region 公共方法

  setDisabledState(disabled: boolean) {
    this.nzDisabled = disabled;
  }

  //#endregion

  //#region 事件处理

  onModelChange(e: [Date, Date]) {
    e = fixEndTimeOfRange(e);
    this.onChangeFn(e[0]);
    this.ngModelEnd = e[1];
    this.ngModelEndChange.emit(e[1]);
  }

  onOpenChange(e: any) {
    this.nzOnOpenChange.emit(e);
  }

  onPanelChange(e: any) {
    this.nzOnPanelChange.emit(e);
  }

  onOk(e: any) {
    this.nzOnOk.emit(e);
  }

  onShortcutClick(item: CoDateRangePickerShortcutItem) {
    this.value = item.fn(this.value as any);
    this.onModelChange(this.value as [Date, Date]);
    if (this._shortcut.closed) {
      // tslint:disable-next-line:no-string-literal
      (this.comp as NzSafeAny)['picker'].hideOverlay();
    }
  }

  //#endregion
}
