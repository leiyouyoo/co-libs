import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { LifeCycleComponent } from '@co/cbc/core';
import { filter, startWith } from 'rxjs/operators';


@Component({
  selector: 'co-search-area-item',
  template: `
    <nz-form-item>
      <ng-content select="nz-form-label"></ng-content>
      <nz-form-control>
        <ng-content></ng-content>
      </nz-form-control>
    </nz-form-item>
  `,
  host: { '[class.co-search-area-item]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SearchAreaItemComponent extends LifeCycleComponent {

  @Input() coWidth: number | 'auto';
  @Input() coMarginRight: number;

  constructor(public elementRef: ElementRef, private renderer: Renderer2) {
    super();
  }

  ngOnInit(): void {
    this.onChanges$.pipe(filter(({ marginRight }) => marginRight !== undefined), startWith(null)).subscribe(() => {
      this.setMarginRight(this.coMarginRight);
    });
    this.onChanges$.pipe(filter(({ coWidth }) => coWidth !== undefined), startWith(null)).subscribe(() => {
      this.setWidth(this.coWidth);
    });
  }

  setWidthAndMargin(width, marginRight, marginBottom): void {
    this.setWidth(width);
    this.setMarginRight(marginRight);
    this.setMarginBottom(marginBottom);
  }

  setWidth(width: number | string) {
    if (this.coWidth !== undefined) {
      width = this.coWidth;
    }
    width = width === 'auto' ? width : `${width}px`;
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', width);
  }

  setMarginRight(marginRight) {
    if (this.coMarginRight !== undefined) {
      marginRight = this.coMarginRight;
    }
    this.renderer.setStyle(this.elementRef.nativeElement, 'margin-right', `${marginRight}px`);
  }

  setMarginBottom(marginBottom) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'margin-bottom', `${marginBottom}px`);
  }

}
