import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, HostBinding, Input, QueryList, Renderer2, ViewEncapsulation } from '@angular/core';
import { LifeCycleComponent } from '@co/cbc/core';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import { SearchAreaItemComponent } from './search-area-item.component';
import { SearchAreaExtraComponent } from './search-area-extra.component';

@Component({
  selector: 'co-search-area-layout',
  template: `
    <ng-content select="co-search-area-item"></ng-content>
    <co-search-area-item coWidth="auto" *ngIf="searchAreaExtraComponent&&!coNoDefaultToggleShowButton">
      <a nz-button nzType="link" (click)="searchAreaExtraComponent.toggleShow()">
        高级搜索
        <i nz-icon [nzType]="searchAreaExtraComponent.isShow?'up':'down'" nzTheme="outline"></i>
      </a>
    </co-search-area-item>
    <ng-content select="co-search-area-extra"></ng-content>
  `,
  host: { '[class.co-search-area-layout]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SearchAreaLayoutComponent extends LifeCycleComponent {

  @HostBinding('class.co-search-area-layout__alignRight')
  get alignRight() {
    return this.coAlign === 'right';
  };

  @HostBinding('class.co-search-area-layout__alignCenter')
  get alignCenter() {
    return this.coAlign === 'center';
  };

  @Input() coAlign: 'left' | 'center' | 'right' = 'left';
  @Input() coCols: number = Infinity;
  @Input() coMarginRight: number = 12;
  @Input() coMarginBottom: number = 8;
  @Input() coWidth: number | 'auto' = 200;
  @Input() coNoDefaultToggleShowButton = false;

  searchAreaExtraComponent: SearchAreaExtraComponent;
  @ContentChildren(SearchAreaItemComponent) searchAreaItemComponents!: QueryList<SearchAreaItemComponent>;

  private forceWrapDivs: Set<HTMLDivElement> = new Set();

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    super();
  }

  ngAfterViewInit(): void {
    // 强行换行
    const coColsChanges = this.onChanges$.pipe(filter(({ coCols }) => coCols !== undefined));
    coColsChanges.subscribe(() => {
      this.clearOtherChildren();
      this.forceWrap();
    });

    // 控制item
    const styleChanges = this.onChanges$.pipe(filter(({ coMarginRight, coMarginBottom, coWidth }) =>
      coMarginRight !== undefined || coMarginBottom !== undefined || coWidth !== undefined));
    styleChanges.subscribe(() => {
      this.updateItems();
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
          const div: HTMLDivElement = this.renderer.createElement('div');
          this.renderer.setStyle(div, 'flex', '1 0 99999px');
          if (this.searchAreaItemComponents.last !== children[i]) {
            const nextSibling = this.renderer.nextSibling(children[i].elementRef.nativeElement);
            this.renderer.insertBefore(element, div, nextSibling);
            this.forceWrapDivs.add(div);
          }
        }
      }
    }
  }

  // 清除之前插入的div元素
  clearOtherChildren() {
    const element = this.elementRef.nativeElement as HTMLElement;
    this.forceWrapDivs.forEach(item => {
      this.renderer.removeChild(element, item);
      this.forceWrapDivs.delete(item);
    });
  }

  public setExtra(searchAreaExtraComponent: SearchAreaExtraComponent) {
    this.searchAreaExtraComponent = searchAreaExtraComponent;
  }

}
