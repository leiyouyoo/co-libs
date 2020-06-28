import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd';
import { LifeCycleComponent } from '@co/cbc/core/life-cycle-component';
import { filter, startWith, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'co-search-area-item',
  template: `
    <nz-form-item>
      <ng-container *ngIf="coLabel">
        <ng-container *ngTemplateOutlet="customLabel?coLabel:label"></ng-container>
        <ng-template #label>
          <nz-form-label [nzNoColon]="coNoColon" [nzRequired]="coRequired" [nzFor]="coFor">{{coLabel}}</nz-form-label>
        </ng-template>
      </ng-container>
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

  @Input() coWidth: number;
  @Input() coMarginRight: number;

  @Input() @InputBoolean() coRequired: boolean = false;
  @Input() @InputBoolean() coNoColon: boolean = false;
  @Input() coFor: string;
  @Input() coLabel: TemplateRef<void> | string | null = null;

  get customLabel(): boolean {
    return this.coLabel !== null && typeof this.coLabel !== 'string';
  }

  constructor(public elementRef: ElementRef, private renderer: Renderer2) {
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

  setWidthAndMargin(width, marginRight, marginBottom): void {
    this.setWidth(width);
    this.setMarginRight(marginRight);
    this.setMarginBottom(marginBottom);
  }

  setWidth(width) {
    if (this.coWidth !== undefined) {
      width = this.coWidth;
    }
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${width}px`);
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
