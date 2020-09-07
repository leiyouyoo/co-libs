import { ChangeDetectionStrategy, Component, ContentChildren, HostBinding, Input, OnInit, QueryList, ViewEncapsulation } from '@angular/core';
import { CoSizeType } from '@co/cbc/core';
import { SearchAreaLayoutComponent } from '@co/cbc/layout/search-area-layout';
import { ToolbarComponent } from '@co/cbc/layout/toolbar';
import { PageSideComponent } from './page-side.component';

@Component({
  selector: 'co-page-layout',
  templateUrl: './page-layout.component.html',
  host: { '[class.co-page-layout]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PageLayoutComponent implements OnInit {

  @Input() coSize: CoSizeType = 'default';

  @ContentChildren(ToolbarComponent, { descendants: false }) toolbarComponents: QueryList<ToolbarComponent>;
  @ContentChildren(SearchAreaLayoutComponent, { descendants: false }) searchAreaLayoutComponents: QueryList<SearchAreaLayoutComponent>;
  @ContentChildren(PageSideComponent, { descendants: false }) pageSideComponents: QueryList<PageSideComponent>;
  @ContentChildren(PageLayoutComponent, { descendants: true }) pageLayoutComponents: QueryList<PageLayoutComponent>;

  @HostBinding('class.co-page-layout__topWrapper') get noPadding(): boolean {
    return this.pageLayoutComponents.length > 0;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
