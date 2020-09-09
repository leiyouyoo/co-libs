import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd';
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
export class PageSideComponent extends LifeCycleComponent implements OnInit {

  @Input() @InputBoolean() coWidthResizable = false;
  @Input() @HostBinding('style.margin-left.px') marginLeft = 16;

  @HostBinding('style.width.px') width;
  @HostBinding('style.height.px') height;
  @HostBinding('style.max-width') maxWidth = `calc(100% - ${this.marginLeft}px - var(--left-min-width))`;

  constructor(public elementRef: ElementRef<HTMLElement>) {
    super();
  }

  ngOnInit(): void {
  }

}
