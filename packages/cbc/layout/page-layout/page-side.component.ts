import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'co-page-side',
  template: `
    <co-page-side-resize-handle *ngIf="coWidthResizable"></co-page-side-resize-handle>
    <ng-content></ng-content>`,
  host: { '[class.co-page-side]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PageSideComponent {

  @Input() @InputBoolean() coWidthResizable = true;
  @HostBinding('style.margin-left') @Input() coMarginLeft: string = '0px'; // UI认为不要间距更好，这里先将【16px】改成【0px】
  @HostBinding('style.min-width') @Input() coMinWidth: string = '360px';

  @HostBinding('style.width.px') width;

  @HostBinding('style.max-width') get maxWidth() {
    return this.sanitizer.bypassSecurityTrustStyle(`calc(100% - ${this.coMarginLeft} - var(--left-min-width))`);
  }

  constructor(public elementRef: ElementRef<HTMLElement>, private sanitizer: DomSanitizer) {
  }

}
