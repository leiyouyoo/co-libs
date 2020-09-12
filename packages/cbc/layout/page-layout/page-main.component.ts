import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnInit, Optional, Renderer2, RendererStyleFlags2, SkipSelf, ViewEncapsulation } from '@angular/core';
import { InputNumber } from 'ng-zorro-antd';

@Component({
  selector: 'co-page-main',
  template: `
    <ng-content></ng-content>`,
  host: { '[class.co-page-main]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PageMainComponent implements OnInit {

  @HostBinding('style.max-width.px') @Input() coMaxWidth: number | 'none';
  @HostBinding('style.min-width.px') @Input() @InputNumber() coMinWidth: number | null = 800;

  constructor(@Optional() @SkipSelf() private parentMainComponent: PageMainComponent,
              private renderer: Renderer2, private elementRef: ElementRef<HTMLElement>) {
  }

  ngOnInit(): void {
    if (this.parentMainComponent && this.parentMainComponent.coMinWidth === this.coMinWidth) {
      this.coMinWidth = 0; // 内层的最小宽度不设默认值
    }
    const parent = this.renderer.parentNode(this.elementRef.nativeElement);
    this.renderer.setStyle(parent, '--left-min-width', `${this.coMinWidth}px`, RendererStyleFlags2.DashCase);
  }

}
