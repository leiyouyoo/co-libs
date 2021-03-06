/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { BACKSPACE, DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, ConnectionPositionPair } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Host,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { DEFAULT_CASCADER_POSITIONS } from 'ng-zorro-antd/core/overlay';
import { BooleanInput, NgClassType, NgStyleInterface, NzSafeAny } from 'ng-zorro-antd/core/types';
import { InputBoolean, toArray } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

import { NzCascaderI18nInterface, NzI18nService } from 'ng-zorro-antd/i18n';
import { CoCascaderOptionComponent } from './co-cascader-li.component';
import { CoCascaderService } from './co-cascader.service';
import {
  CoCascaderComponentAsSource,
  CozCascaderExpandTrigger,
  CoCascaderOption,
  CoCascaderSearchOption,
  CoCascaderSize,
  CozCascaderTriggerType,
  CoShowSearchOptions,
} from './typings';

const NZ_CONFIG_COMPONENT_NAME = 'cascader';
const defaultDisplayRender = (labels: string[]) => labels.join(' / ');

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'co-cascader, [co-cascader]',
  exportAs: 'coCascader',
  preserveWhitespaces: false,
  template: `
    <div cdkOverlayOrigin #origin="cdkOverlayOrigin" #trigger>
      <div *ngIf="nzShowInput">
        <input
          #input
          nz-input
          class="ant-cascader-input"
          [class.ant-cascader-input-disabled]="nzDisabled"
          [class.ant-cascader-input-lg]="nzSize === 'large'"
          [class.ant-cascader-input-sm]="nzSize === 'small'"
          [attr.autoComplete]="'off'"
          [attr.placeholder]="showPlaceholder ? nzPlaceHolder || locale?.placeholder : null"
          [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
          [readonly]="!nzShowSearch"
          [disabled]="nzDisabled"
          [nzSize]="nzSize"
          [(ngModel)]="inputValue"
          (blur)="handleInputBlur()"
          (focus)="handleInputFocus()"
          (change)="$event.stopPropagation()"
        />
        <i
          *ngIf="clearIconVisible"
          nz-icon
          nzType="close-circle"
          nzTheme="fill"
          class="ant-cascader-picker-clear"
          (click)="clearSelection($event)"
        ></i>
        <i
          *ngIf="nzShowArrow && !isLoading"
          nz-icon
          nzType="down"
          class="ant-cascader-picker-arrow"
          [class.ant-cascader-picker-arrow-expand]="menuVisible"
        >
        </i>
        <i *ngIf="isLoading" nz-icon nzType="loading" class="ant-cascader-picker-arrow"></i>
        <span
          class="ant-cascader-picker-label"
          [class.ant-cascader-show-search]="!!nzShowSearch"
          [class.ant-focusd]="!!nzShowSearch && isFocused && !inputValue"
        >
          <ng-container *ngIf="!isLabelRenderTemplate; else labelTemplate">{{ labelRenderText }}</ng-container>
          <ng-template #labelTemplate>
            <ng-template [ngTemplateOutlet]="nzLabelRender" [ngTemplateOutletContext]="labelRenderContext"></ng-template>
          </ng-template>
        </span>
      </div>
      <ng-content></ng-content>
    </div>
    <ng-template
      cdkConnectedOverlay
      coConnectedOverlay
      cdkConnectedOverlayHasBackdrop
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayPositions]="positions"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-cascader-menus'"
      (backdropClick)="closeMenu()"
      (detach)="closeMenu()"
      [cdkConnectedOverlayOpen]="menuVisible"
    >
      <div
        #menu
        class="ant-cascader-menus"
        [class.ant-cascader-menus-hidden]="!menuVisible"
        [ngClass]="menuCls"
        [ngStyle]="nzMenuStyle"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@slideMotion]="'enter'"
        (mouseleave)="onTriggerMouseLeave($event)"
      >
        <ul
          *ngIf="shouldShowEmpty; else hasOptionsTemplate"
          class="ant-cascader-menu"
          [style.width]="dropdownWidthStyle"
          [style.height]="dropdownHeightStyle"
        >
          <li class="ant-cascader-menu-item ant-cascader-menu-item-expanded ant-cascader-menu-item-disabled">
            <nz-embed-empty [nzComponentName]="'cascader'" [specificContent]="nzNotFoundContent"></nz-embed-empty>
          </li>
        </ul>
        <ng-template #hasOptionsTemplate>
          <div style="display: inline-flex;flex-direction: column;" *ngFor="let options of coCascaderService.columns; let i = index">
            <nz-input-group [nzSuffix]="suffixIconSearch">
              <input #input nz-input [nzSize]="nzSize" ngModel (change)="$event.stopPropagation()" />
            </nz-input-group>
            <ng-template #suffixIconSearch>
              <i nz-icon nzType="search"></i>
            </ng-template>
            <ul class="ant-cascader-menu" [ngClass]="menuColumnCls" [style.height]="dropdownHeightStyle" [style.width]="dropdownWidthStyle">
              <li
                co-cascader-option
                *ngFor="let option of searchLabel(input.value, options)"
                [columnIndex]="i"
                [nzLabelProperty]="nzLabelProperty"
                [optionTemplate]="nzOptionRender"
                [activated]="isOptionActivated(option, i)"
                [highlightText]="inSearchingMode ? inputValue : ''"
                [option]="option"
                (mouseenter)="onOptionMouseEnter(option, i, $event)"
                (mouseleave)="onOptionMouseLeave(option, i, $event)"
                (click)="onOptionClick(option, i, $event)"
              ></li>
            </ul>
          </div>
        </ng-template>
      </div>
    </ng-template>
  `,
  animations: [slideMotion],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CascaderComponent),
      multi: true,
    },
    CoCascaderService,
  ],
  host: {
    '[attr.tabIndex]': '"0"',
    '[class.ant-cascader-lg]': 'nzSize === "large"',
    '[class.ant-cascader-sm]': 'nzSize === "small"',
    '[class.ant-cascader-picker-disabled]': 'nzDisabled',
    '[class.ant-cascader-picker-open]': 'menuVisible',
    '[class.ant-cascader-picker-with-value]': '!!inputValue',
    '[class.ant-cascader-focused]': 'isFocused',
  },
})
export class CascaderComponent implements CoCascaderComponentAsSource, OnInit, OnDestroy, ControlValueAccessor {
  static ngAcceptInputType_nzShowInput: BooleanInput;
  static ngAcceptInputType_nzShowArrow: BooleanInput;
  static ngAcceptInputType_nzAllowClear: BooleanInput;
  static ngAcceptInputType_nzAutoFocus: BooleanInput;
  static ngAcceptInputType_nzChangeOnSelect: BooleanInput;
  static ngAcceptInputType_nzDisabled: BooleanInput;

  @ViewChild('input', { static: false }) input!: ElementRef;
  @ViewChild('menu', { static: false }) menu!: ElementRef;
  @ViewChild(CdkConnectedOverlay, { static: false }) overlay!: CdkConnectedOverlay;
  @ViewChildren(CoCascaderOptionComponent) cascaderItems!: QueryList<CoCascaderOptionComponent>;

  @Input() nzOptionRender: TemplateRef<{ $implicit: CoCascaderOption; index: number }> | null = null;
  @Input() @InputBoolean() nzShowInput = true;
  @Input() @InputBoolean() nzShowArrow = true;
  @Input() @InputBoolean() nzAllowClear = true;
  @Input() @InputBoolean() nzAutoFocus = false;
  @Input() @InputBoolean() nzChangeOnSelect = false;
  @Input() @InputBoolean() nzDisabled = false;
  @Input() nzColumnClassName?: string;
  @Input() nzExpandTrigger: CozCascaderExpandTrigger = 'click';
  @Input() nzValueProperty = 'value';
  @Input() nzLabelRender: TemplateRef<void> | null = null;
  @Input() nzLabelProperty = 'label';
  @Input() nzNotFoundContent?: string | TemplateRef<void>;
  @Input() @WithConfig(NZ_CONFIG_COMPONENT_NAME) nzSize: CoCascaderSize = 'default';
  @Input() nzShowSearch: boolean | CoShowSearchOptions = false;
  @Input() nzShowLocalSearch: boolean = false;
  @Input() nzPlaceHolder: string = '';
  @Input() nzMenuClassName?: string;
  @Input() nzMenuStyle: NgStyleInterface | null = null;
  @Input() nzMouseEnterDelay: number = 150; // ms
  @Input() nzMouseLeaveDelay: number = 150; // ms
  @Input() nzTriggerAction: CozCascaderTriggerType | CozCascaderTriggerType[] = ['click'] as CozCascaderTriggerType[];
  @Input() nzChangeOn?: (option: CoCascaderOption, level: number) => boolean;
  @Input() nzLoadData?: (node: CoCascaderOption, index: number) => PromiseLike<NzSafeAny>;

  @Input()
  get nzOptions(): CoCascaderOption[] | null {
    return this.coCascaderService.nzOptions;
  }

  set nzOptions(options: CoCascaderOption[] | null) {
    this.coCascaderService.withOptions(options);
  }

  @Output() readonly nzVisibleChange = new EventEmitter<boolean>();
  @Output() readonly nzSelectionChange = new EventEmitter<CoCascaderOption[]>();
  @Output() readonly nzSelect = new EventEmitter<{ option: CoCascaderOption; index: number } | null>();
  @Output() readonly nzClear = new EventEmitter<void>();

  /**
   * If the dropdown should show the empty content.
   * `true` if there's no options.
   */
  shouldShowEmpty: boolean = false;

  el: HTMLElement;
  menuVisible = false;
  isLoading = false;
  labelRenderText?: string;
  labelRenderContext = {};
  onChange = Function.prototype;
  onTouched = Function.prototype;
  positions: ConnectionPositionPair[] = [...DEFAULT_CASCADER_POSITIONS];

  /**
   * Dropdown's with in pixel.
   */
  dropdownWidthStyle?: string;
  dropdownHeightStyle: 'auto' | '' = '';
  isFocused = false;

  locale!: NzCascaderI18nInterface;

  private destroy$ = new Subject<void>();
  private inputString = '';
  private isOpening = false;
  private delayMenuTimer: number | any = null;
  private delaySelectTimer: number | any = null;

  get inSearchingMode(): boolean {
    return this.coCascaderService.inSearchingMode;
  }

  set inputValue(inputValue: string) {
    this.inputString = inputValue;
    this.toggleSearchingMode(!!inputValue);
  }

  get inputValue(): string {
    return this.inputString;
  }

  get menuCls(): NgClassType {
    return { [`${this.nzMenuClassName}`]: !!this.nzMenuClassName };
  }

  get menuColumnCls(): NgClassType {
    return { [`${this.nzColumnClassName}`]: !!this.nzColumnClassName };
  }

  private get hasInput(): boolean {
    return !!this.inputValue;
  }

  private get hasValue(): boolean {
    return this.coCascaderService.values && this.coCascaderService.values.length > 0;
  }

  get showPlaceholder(): boolean {
    return !(this.hasInput || this.hasValue);
  }

  get clearIconVisible(): boolean {
    return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
  }

  get isLabelRenderTemplate(): boolean {
    return !!this.nzLabelRender;
  }

  constructor(
    public coCascaderService: CoCascaderService,
    private i18nService: NzI18nService,
    public nzConfigService: NzConfigService,
    private cdr: ChangeDetectorRef,
    elementRef: ElementRef,
    renderer: Renderer2,
    @Host() @Optional() public noAnimation?: NzNoAnimationDirective,
  ) {
    this.el = elementRef.nativeElement;
    this.coCascaderService.withComponent(this);
    renderer.addClass(elementRef.nativeElement, 'ant-cascader');
    renderer.addClass(elementRef.nativeElement, 'ant-cascader-picker');
  }

  ngOnInit(): void {
    const srv = this.coCascaderService;

    srv.$redraw.pipe(takeUntil(this.destroy$)).subscribe(() => {
      // These operations would not mutate data.
      this.checkChildren();
      this.setDisplayLabel();
      this.reposition();
      this.setDropdownStyles();

      this.cdr.markForCheck();
    });

    srv.$loading.pipe(takeUntil(this.destroy$)).subscribe(loading => {
      this.isLoading = loading;
    });

    srv.$optionSelected.pipe(takeUntil(this.destroy$)).subscribe(data => {
      if (!data) {
        this.onChange([]);
        this.nzSelect.emit(null);
        this.nzSelectionChange.emit([]);
      } else {
        const { option, index } = data;
        const shouldClose = option.isLeaf;
        if (shouldClose) {
          this.delaySetMenuVisible(false);
        }
        this.onChange(this.coCascaderService.values);
        this.nzSelectionChange.emit(this.coCascaderService.selectedOptions);
        this.nzSelect.emit({ option, index });
        this.cdr.markForCheck();
      }
    });

    srv.$quitSearching.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.inputString = '';
      this.dropdownWidthStyle = '';
    });

    this.i18nService.localeChange.pipe(startWith(), takeUntil(this.destroy$)).subscribe(() => {
      this.setLocale();
    });

    this.nzConfigService
      .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.clearDelayMenuTimer();
    this.clearDelaySelectTimer();
  }

  registerOnChange(fn: () => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(value: NzSafeAny): void {
    this.coCascaderService.values = toArray(value);
    this.coCascaderService.syncOptions(true);
  }

  delaySetMenuVisible(visible: boolean, delay: number = 100, setOpening: boolean = false): void {
    this.clearDelayMenuTimer();
    if (delay) {
      if (visible && setOpening) {
        this.isOpening = true;
      }
      this.delayMenuTimer = setTimeout(() => {
        this.setMenuVisible(visible);
        this.cdr.detectChanges();
        this.clearDelayMenuTimer();
        if (visible) {
          setTimeout(() => {
            this.isOpening = false;
          }, 100);
        }
      }, delay);
    } else {
      this.setMenuVisible(visible);
    }
  }

  setMenuVisible(visible: boolean): void {
    if (this.nzDisabled || this.menuVisible === visible) {
      return;
    }
    if (visible) {
      this.coCascaderService.syncOptions();
    }

    this.menuVisible = visible;
    this.nzVisibleChange.emit(visible);
    this.cdr.detectChanges();
  }

  private clearDelayMenuTimer(): void {
    if (this.delayMenuTimer) {
      clearTimeout(this.delayMenuTimer);
      this.delayMenuTimer = null;
    }
  }

  clearSelection(event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.labelRenderText = '';
    this.labelRenderContext = {};
    this.inputValue = '';
    this.setMenuVisible(false);
    this.coCascaderService.clear();
  }

  getSubmitValue(): NzSafeAny[] {
    return this.coCascaderService.selectedOptions.map(o => this.coCascaderService.getOptionValue(o));
  }

  focus(): void {
    if (!this.isFocused) {
      (this.input ? this.input.nativeElement : this.el).focus();
      this.isFocused = true;
    }
  }

  blur(): void {
    if (this.isFocused) {
      (this.input ? this.input.nativeElement : this.el).blur();
      this.isFocused = false;
    }
  }

  handleInputBlur(): void {
    this.menuVisible ? this.focus() : this.blur();
  }

  handleInputFocus(): void {
    this.focus();
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const keyCode = event.keyCode;

    if (
      keyCode !== DOWN_ARROW &&
      keyCode !== UP_ARROW &&
      keyCode !== LEFT_ARROW &&
      keyCode !== RIGHT_ARROW &&
      keyCode !== ENTER &&
      keyCode !== BACKSPACE &&
      keyCode !== ESCAPE
    ) {
      return;
    }

    // Press any keys above to reopen menu.
    if (!this.menuVisible && keyCode !== BACKSPACE && keyCode !== ESCAPE) {
      return this.setMenuVisible(true);
    }

    // Make these keys work as default in searching mode.
    if (this.inSearchingMode && (keyCode === BACKSPACE || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW)) {
      return;
    }

    // Interact with the component.
    if (this.menuVisible) {
      event.preventDefault();
      if (keyCode === DOWN_ARROW) {
        this.moveUpOrDown(false);
      } else if (keyCode === UP_ARROW) {
        this.moveUpOrDown(true);
      } else if (keyCode === LEFT_ARROW) {
        this.moveLeft();
      } else if (keyCode === RIGHT_ARROW) {
        this.moveRight();
      } else if (keyCode === ENTER) {
        this.onEnter();
      }
    }
  }

  @HostListener('click')
  onTriggerClick(): void {
    if (this.nzDisabled) {
      return;
    }
    if (this.nzShowSearch) {
      this.focus();
    }
    if (this.isActionTrigger('click')) {
      this.delaySetMenuVisible(!this.menuVisible, 100);
    }
    this.onTouched();
  }

  @HostListener('mouseenter')
  onTriggerMouseEnter(): void {
    if (this.nzDisabled || !this.isActionTrigger('hover')) {
      return;
    }

    this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
  }

  @HostListener('mouseleave', ['$event'])
  onTriggerMouseLeave(event: MouseEvent): void {
    if (this.nzDisabled || !this.menuVisible || this.isOpening || !this.isActionTrigger('hover')) {
      event.preventDefault();
      return;
    }
    const mouseTarget = event.relatedTarget as HTMLElement;
    const hostEl = this.el;
    const menuEl = this.menu && (this.menu.nativeElement as HTMLElement);
    if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))) {
      return;
    }
    this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
  }

  onOptionMouseEnter(option: CoCascaderOption, columnIndex: number, event: Event): void {
    event.preventDefault();
    if (this.nzExpandTrigger === 'hover') {
      if (!option.isLeaf) {
        this.delaySetOptionActivated(option, columnIndex, false);
      } else {
        this.coCascaderService.setOptionDeactivatedSinceColumn(columnIndex);
      }
    }
  }

  onOptionMouseLeave(option: CoCascaderOption, _columnIndex: number, event: Event): void {
    event.preventDefault();
    if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
      this.clearDelaySelectTimer();
    }
  }

  onOptionClick(option: CoCascaderOption, columnIndex: number, event: Event): void {
    if (event) {
      event.preventDefault();
    }
    if (option && option.disabled) {
      return;
    }
    this.el.focus();
    this.inSearchingMode
      ? this.coCascaderService.setSearchOptionSelected(option as CoCascaderSearchOption)
      : this.coCascaderService.setOptionActivated(option, columnIndex, true);
  }

  private isActionTrigger(action: 'click' | 'hover'): boolean {
    return typeof this.nzTriggerAction === 'string' ? this.nzTriggerAction === action : this.nzTriggerAction.indexOf(action) !== -1;
  }

  private onEnter(): void {
    const columnIndex = Math.max(this.coCascaderService.activatedOptions.length - 1, 0);
    const option = this.coCascaderService.activatedOptions[columnIndex];
    if (option && !option.disabled) {
      this.inSearchingMode
        ? this.coCascaderService.setSearchOptionSelected(option as CoCascaderSearchOption)
        : this.coCascaderService.setOptionActivated(option, columnIndex, true);
    }
  }

  private moveUpOrDown(isUp: boolean): void {
    const columnIndex = Math.max(this.coCascaderService.activatedOptions.length - 1, 0);
    const activeOption = this.coCascaderService.activatedOptions[columnIndex];
    const options = this.coCascaderService.columns[columnIndex] || [];
    const length = options.length;
    let nextIndex = -1;
    if (!activeOption) {
      // Not selected options in this column
      nextIndex = isUp ? length : -1;
    } else {
      nextIndex = options.indexOf(activeOption);
    }

    while (true) {
      nextIndex = isUp ? nextIndex - 1 : nextIndex + 1;
      if (nextIndex < 0 || nextIndex >= length) {
        break;
      }
      const nextOption = options[nextIndex];
      if (!nextOption || nextOption.disabled) {
        continue;
      }
      this.coCascaderService.setOptionActivated(nextOption, columnIndex);
      break;
    }
  }

  private moveLeft(): void {
    const options = this.coCascaderService.activatedOptions;
    if (options.length) {
      options.pop(); // Remove the last one
    }
  }

  private moveRight(): void {
    const length = this.coCascaderService.activatedOptions.length;
    const options = this.coCascaderService.columns[length];
    if (options && options.length) {
      const nextOpt = options.find(o => !o.disabled);
      if (nextOpt) {
        this.coCascaderService.setOptionActivated(nextOpt, length);
      }
    }
  }

  private clearDelaySelectTimer(): void {
    if (this.delaySelectTimer) {
      clearTimeout(this.delaySelectTimer);
      this.delaySelectTimer = null;
    }
  }

  private delaySetOptionActivated(option: CoCascaderOption, columnIndex: number, performSelect: boolean): void {
    this.clearDelaySelectTimer();
    this.delaySelectTimer = setTimeout(() => {
      this.coCascaderService.setOptionActivated(option, columnIndex, performSelect);
      this.delaySelectTimer = null;
    }, 150);
  }

  private toggleSearchingMode(toSearching: boolean): void {
    if (this.inSearchingMode !== toSearching) {
      this.coCascaderService.toggleSearchingMode(toSearching);
    }

    if (this.inSearchingMode) {
      this.coCascaderService.prepareSearchOptions(this.inputValue);
    }
  }

  isOptionActivated(option: CoCascaderOption, index: number): boolean {
    const activeOpt = this.coCascaderService.activatedOptions[index];
    return activeOpt === option;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.closeMenu();
    }
    this.nzDisabled = isDisabled;
  }

  closeMenu(): void {
    this.blur();
    this.clearDelayMenuTimer();
    this.setMenuVisible(false);
  }

  /**
   * Reposition the cascader panel. When a menu opens, the cascader expands
   * and may exceed the boundary of browser's window.
   */
  private reposition(): void {
    if (this.overlay && this.overlay.overlayRef && this.menuVisible) {
      Promise.resolve().then(() => {
        this.overlay.overlayRef.updatePosition();
      });
    }
  }

  /**
   * When a cascader options is changed, a child needs to know that it should re-render.
   */
  private checkChildren(): void {
    if (this.cascaderItems) {
      this.cascaderItems.forEach(item => item.markForCheck());
    }
  }

  private setDisplayLabel(): void {
    const selectedOptions = this.coCascaderService.selectedOptions;
    const labels: string[] = selectedOptions.map(o => this.coCascaderService.getOptionLabel(o));

    if (this.isLabelRenderTemplate) {
      this.labelRenderContext = { labels, selectedOptions };
    } else {
      this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
    }
  }

  private setDropdownStyles(): void {
    const firstColumn = this.coCascaderService.columns[0];

    this.shouldShowEmpty =
      (this.inSearchingMode && (!firstColumn || !firstColumn.length)) || // Should show empty when there's no searching result
      (!(this.nzOptions && this.nzOptions.length) && !this.nzLoadData); // Should show when there's no options and developer does not use nzLoadData
    this.dropdownHeightStyle = this.shouldShowEmpty ? 'auto' : '';

    if (this.input) {
      this.dropdownWidthStyle = this.inSearchingMode || this.shouldShowEmpty ? `${this.input.nativeElement.offsetWidth}px` : '';
    }
  }

  private setLocale(): void {
    this.locale = this.i18nService.getLocaleData('global');
    this.cdr.markForCheck();
  }

  searchLabel(value, option) {
    return option.filter(e => {
      return (
        e?.nameLocalization?.toLowerCase()?.includes(value?.toLowerCase()) ||
        e?.name?.toLowerCase()?.includes(value?.toLowerCase()) ||
        e?.code?.toLowerCase()?.includes(value?.toLowerCase())
      );
    });
  }
}
