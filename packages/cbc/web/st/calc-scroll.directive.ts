import {
  AfterContentInit,
  AfterViewChecked,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  HostListener,
  Input, Optional,
} from '@angular/core';
import { debounce, InputBoolean } from '@co/core';
import { NzTableComponent } from 'ng-zorro-antd';
import { STComponent } from './st.component';

function outerHeight(el, defaultValue?) {
  if (!el && defaultValue !== void 0) return defaultValue;
  var height = el.offsetHeight;
  var style = getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}

@Directive({
  selector: 'co-st[calcScroll],nz-table[calcScroll]'
})
export class CalcScrollDirective implements AfterContentInit, AfterViewChecked {
  @Input() @InputBoolean() disableCalcX = false;
  @Input() @InputBoolean() disableCalcY = false;
  el: HTMLElement;
  lastHeight = 0;

  constructor(private host: ElementRef,
              @Optional() private _nzTableComponent: NzTableComponent,
              @Optional() private stComponent: STComponent,
              ) {}

  get nzTableComponent() {
    return this._nzTableComponent ?? this.stComponent.orgTable;
  }

  ngAfterContentInit(): void {
    this.el = this.host.nativeElement;
  }

  ngAfterViewChecked(): void {
    if (this.lastHeight !== this.el.clientHeight) {
      this.lastHeight = this.el.clientHeight;
      this.calc();
    }
  }

  @HostListener('window:resize')
  @debounce()
  calc() {
    setTimeout(() => {
      const thead =
        this.el.querySelector('.ant-table-header') ??
        this.el.querySelector('.ant-table-thead');
      const tableContent = this.el.querySelector('.ant-table-content table');
      const paginatorOuterHeight = outerHeight(this.el.querySelector('.ant-table-pagination'), 0);
      // const pagination
      this.nzTableComponent.nzScroll = {
        x: this.disableCalcX ? this.nzTableComponent.scrollX : `${tableContent!.clientWidth}px`,
        y: this.disableCalcY ? this.nzTableComponent.scrollY : `${this.el.clientHeight - thead!.clientHeight - paginatorOuterHeight}px`,
      };
      this.nzTableComponent.ngOnChanges({ nzScroll: this.nzTableComponent.nzScroll } as any);
      // hack
      //@ts-ignore
      (this.nzTableComponent.cdr as ChangeDetectorRef).markForCheck();
    });
  }
}
