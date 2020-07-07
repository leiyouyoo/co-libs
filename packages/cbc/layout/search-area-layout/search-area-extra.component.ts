import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Host, HostBinding, Input, Optional, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { SearchAreaLayoutComponent } from './search-area-layout.component';

@Component({
  selector: 'co-search-area-extra',
  template: `
    <ng-content select="co-search-area-item"></ng-content>
  `,
  host: { '[class.co-search-area-extra]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SearchAreaExtraComponent extends SearchAreaLayoutComponent {

  @HostBinding('class.show') @Input() isShow = false;
  @Output() readonly isShowChange = new EventEmitter<boolean>();

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef,
              @Optional() @Host() private parent: SearchAreaLayoutComponent) {
    super(_renderer, _elementRef);
    if (parent == null) {
      throw new Error(`<co-search-area-extra> 必须作为 <co-search-area-layout> 的子组件使用`);
    }
    delete this.coAlign;
    delete this.coCols;
    delete this.coMarginRight;
    delete this.coMarginBottom;
    delete this.coWidth;
    delete this.coNoDefaultToggleShowButton;
    parent.setExtra(this);
  }

  ngOnInit() {
    super.ngOnInit();
    this.coAlign = this.coAlign || this.parent.coAlign;
    this.coCols = this.coCols || this.parent.coCols;
    this.coMarginRight = this.coMarginRight || this.parent.coMarginRight;
    this.coMarginBottom = this.coMarginBottom || this.parent.coMarginBottom;
    this.coWidth = this.coWidth || this.parent.coWidth;
  }

  toggleShow() {
    this.isShow = !this.isShow;
    this.isShowChange.emit(this.isShow);
  }

}
