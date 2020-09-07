import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd';

@Component({
  selector: 'co-page-side',
  template: `
    <co-page-side-resize-handle *ngIf="coWidthResizable"></co-page-side-resize-handle>
    <ng-content></ng-content>`,
  host: { '[class.co-page-side]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PageSideComponent implements OnInit {

  @Input() @InputBoolean() coWidthResizable = false;

  @HostBinding('style.width.px') width;
  @HostBinding('style.height.px') height;

  constructor(public elementRef: ElementRef<HTMLElement>) {
  }

  ngOnInit(): void {
  }

}
