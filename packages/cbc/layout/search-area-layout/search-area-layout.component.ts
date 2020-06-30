import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, HostBinding, Input, QueryList, Renderer2, ViewEncapsulation } from '@angular/core';
import { LifeCycleComponent } from '@co/cbc/core/life-cycle-component';
import { SearchAreaItemComponent } from './search-area-item.component';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import { CoSizeType } from '@co/cbc/core';

@Component({
  selector: 'co-search-area-layout',
  template: `
    <ng-content select="co-search-area-item"></ng-content> `,
  host: { '[class.co-search-area-layout]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SearchAreaLayoutComponent extends LifeCycleComponent {

  @HostBinding('class.co-search-area-layout__alignRight')
  get alignRight() {
    return this.coAlign === 'right';
  };

  @Input() coAlign: 'left' | 'center' | 'right' = 'left';
  @Input() coCols: number = Infinity;
  @Input() coMarginRight: number = 12;
  @Input() coMarginBottom: number = 8;
  @Input() coWidth: number = 200;

  @ContentChildren(SearchAreaItemComponent) searchAreaItemComponents!: QueryList<SearchAreaItemComponent>;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    super();
  }

  ngAfterViewInit(): void {
    const changes = this.onChanges$.pipe(takeUntil(this.onDestroy$));
    const coColsChanges = changes.pipe(filter(({ coCols }) => coCols !== undefined));
    const styleChanges = changes.pipe(filter(({ coMarginRight, coMarginBottom, coWidth }) =>
      coMarginRight !== undefined || coMarginBottom !== undefined || coWidth !== undefined));
    styleChanges.subscribe(() => {
      this.updateItems();
    });
    coColsChanges.subscribe(() => {
      this.clearOtherChildren();
      this.forceWrap();
    });
    this.searchAreaItemComponents.changes.pipe(startWith(null), takeUntil(this.onDestroy$)).subscribe(() => {
      this.updateItems();
      this.clearOtherChildren();
      this.forceWrap();
    });
  }

  private updateItems() {
    this.searchAreaItemComponents.forEach(item => {
      item.setWidthAndMargin(this.coWidth, this.coMarginRight, this.coMarginBottom);
    });
  }

  // 根据coCols强制换行
  private forceWrap() {
    const element = this.elementRef.nativeElement as HTMLElement;
    const children = this.searchAreaItemComponents.toArray();
    if (children.length > this.coCols) {
      for (let i = 0; i < children.length; i++) {
        if ((i + 1) % this.coCols === 0) {
          // 插入填满空余空间的div使后面元素换行
          const div = this.renderer.createElement('div');
          this.renderer.setStyle(div, 'flex', '1 0 99999px');
          if (this.searchAreaItemComponents.last !== children[i]) {
            const nextSibling = this.renderer.nextSibling(children[i].elementRef.nativeElement);
            this.renderer.insertBefore(element, div, nextSibling);
          }
        }
      }
    }
  }

  // 清除之前插入的search-area-item之外的子元素
  clearOtherChildren() {
    const element = this.elementRef.nativeElement as HTMLElement;
    const children = element.children;
    for (let i = 0; i < children.length; i++) {
      if (children.item(i)!.nodeName !== 'CO-SEARCH-AREA-ITEM') {
        this.renderer.removeChild(element, children.item(i));
      }
    }
  }

}
