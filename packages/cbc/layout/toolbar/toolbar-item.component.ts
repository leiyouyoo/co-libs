import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { LifeCycleComponent } from '@co/cbc/core';
import { filter, startWith } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd';

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
    this.onChanges$.pipe(filter(({ marginRight }) => marginRight !== undefined), startWith(null)).subscribe(() => {
      this.setMarginRight();
    });
    this.onChanges$.pipe(filter(({ coWidth }) => coWidth !== undefined), startWith(null)).subscribe(() => {
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
