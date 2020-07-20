import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { filter, startWith } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd';
import { LifeCycleComponent } from '@co/core';

@Component({
  selector: 'co-toolbar-item',
  template: `
    <ng-content></ng-content>
  `,
  host: { '[class.co-toolbar-item]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarItemComponent extends LifeCycleComponent {

  @HostBinding('class.co-toolbar-item__alignRight') @Input() @InputBoolean() alignRight: boolean = false;
  @Input() coWidth: number | 'auto';
  @Input() coMarginRight: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super();
  }

  ngOnInit(): void {
    this.coOnChanges$.pipe(filter(({ marginRight }) => marginRight !== undefined), startWith(null)).subscribe(() => {
      this.setMarginRight();
    });
    this.coOnChanges$.pipe(filter(({ coWidth }) => coWidth !== undefined), startWith(null)).subscribe(() => {
      this.setWidth();
    });
  }

  setWidthAndMargin(width, marginRight): void {
    this.setWidth(width);
    this.setMarginRight(marginRight);
  }

  setWidth(width?) {
    width = this.coWidth || width;
    if (width === 'auto') {
      this.renderer.setStyle(this.elementRef.nativeElement, 'width', 'auto');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${width}px`);
    }
  }

  setMarginRight(marginRight?) {
    marginRight = this.coMarginRight || marginRight;
    this.renderer.setStyle(this.elementRef.nativeElement, 'margin-right', `${marginRight}px`);
  }

}
