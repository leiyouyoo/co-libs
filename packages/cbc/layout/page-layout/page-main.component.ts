import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, Optional, Renderer2, RendererStyleFlags2, SkipSelf, ViewEncapsulation } from '@angular/core';
import { LifeCycleComponent } from '@co/core';
import { filter, startWith } from 'rxjs/operators';

@Component({
  selector: 'co-page-main',
  template: `
    <ng-content></ng-content>`,
  host: { '[class.co-page-main]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PageMainComponent extends LifeCycleComponent {

  @HostBinding('style.max-width') @Input() coMaxWidth: string;
  @HostBinding('style.min-width') @Input() coMinWidth = '800px';

  constructor(@Optional() @SkipSelf() private parentMainComponent: PageMainComponent,
              private renderer: Renderer2, private elementRef: ElementRef<HTMLElement>) {
    super();
  }

  ngOnInit(): void {
    if (this.parentMainComponent && this.parentMainComponent.coMinWidth === this.coMinWidth) {
      this.coMinWidth = '50%'; // 内层的最小宽度默认50%
    }
    const parent = this.renderer.parentNode(this.elementRef.nativeElement);
    this.coOnChanges$.pipe(filter(({ coMinWidth }) => coMinWidth !== undefined), startWith(null)).subscribe(() => {
      this.renderer.setStyle(parent, '--left-min-width', `${this.coMinWidth}`, RendererStyleFlags2.DashCase);
    });
    super.ngOnInit();
  }

}
