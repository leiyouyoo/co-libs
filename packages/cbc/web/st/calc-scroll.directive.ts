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

  // todo performance
  @HostListener('window:resize')
  @debounce()
  calc() {
    setTimeout(() => {
      const thead = this.el.querySelector('.ant-table-thead');
      const tableContent = this.el.querySelector('.ant-table-content table');
      // const pagination
      this.nzTableComponent.nzScroll = {
        x: this.disableCalcX ? this.nzTableComponent.scrollX : `${tableContent!.clientWidth}px`,
        y: `${this.el.clientHeight - thead!.clientHeight - 64}px`,
      };
      this.nzTableComponent.ngOnChanges({ nzScroll: this.nzTableComponent.nzScroll } as any);
      // hack
      //@ts-ignore
      (this.nzTableComponent.cdr as ChangeDetectorRef).markForCheck();
    });
  }
}