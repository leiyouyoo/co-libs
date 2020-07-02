import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { LifeCycleComponent } from '@co/cbc/core';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd';

@Component({
  selector: 'co-toolbar-item',
  template: `
    <!--    <nz-form-item>-->
    <!--      <nz-form-control>-->
    <ng-content></ng-content>
    <!--      </nz-form-control>-->
    <!--    </nz-form-item>-->
  `,
  host: { '[class.co-toolbar-item]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarItemComponent extends LifeCycleComponent {

  @HostBinding('class.co-toolbar-item__alignRight') @Input() @InputBoolean() alignRight: boolean = false;
  @Input() coWidth: number;
  @Input() coMarginRight: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    super();
  }

  ngOnInit(): void {
    const changes = this.onChanges$.pipe(takeUntil(this.onDestroy$));
    changes.pipe(filter(({ marginRight }) => marginRight !== undefined), startWith(null)).subscribe(() => {
      this.setMarginRight(this.coMarginRight);
    });
    changes.pipe(filter(({ coWidth }) => coWidth !== undefined), startWith(null)).subscribe(() => {
      this.setWidth(this.coWidth);
    });
  }

  setWidthAndMargin(width, marginRight): void {
    this.setWidth(width);
    this.setMarginRight(marginRight);
  }

  setWidth(width) {
    if (this.coWidth !== undefined) {
      width = this.coWidth;
    }
    if (width === 'auto') {
      this.renderer.setStyle(this.elementRef.nativeElement, 'width', 'auto');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${width}px`);
    }
  }

  setMarginRight(marginRight) {
    if (this.coMarginRight !== undefined) {
      marginRight = this.coMarginRight;
    }
    this.renderer.setStyle(this.elementRef.nativeElement, 'margin-right', `${marginRight}px`);
  }

}
