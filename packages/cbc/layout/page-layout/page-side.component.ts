import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean, InputNumber } from 'ng-zorro-antd';
import { LifeCycleComponent } from '@co/core';

@Component({
  selector: 'co-page-side',
  template: `
    <co-page-side-resize-handle *ngIf="coWidthResizable"></co-page-side-resize-handle>
    <ng-content></ng-content>`,
  host: { '[class.co-page-side]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PageSideComponent extends LifeCycleComponent {

  @Input() @InputBoolean() coWidthResizable = false;
  @HostBinding('style.margin-left.px') @Input() @InputNumber() marginLeft: number | undefined = 16;
  @HostBinding('style.min-width.px') @Input() @InputNumber() minWidth: number | undefined = 360;

  @HostBinding('style.width.px') width;
  @HostBinding('style.height.px') height;

  @HostBinding('style.max-width') get maxWidth() {
    return `calc(100% - ${this.marginLeft}px - var(--left-min-width))`;
  }

  constructor(public elementRef: ElementRef<HTMLElement>) {
    super();
  }

}
