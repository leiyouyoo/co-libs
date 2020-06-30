import { ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ToolbarComponent } from '@co/cbc/layout/toolbar/toolbar.component';
import { SearchAreaLayoutComponent } from '@co/cbc/layout/search-area-layout/search-area-layout.component';
import { PageSideComponent } from '@co/cbc/layout/page-layout/page-side.component';
import { CoSizeType } from '@co/cbc/core';

@Component({
  selector: 'co-page-layout',
  templateUrl: './page-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PageLayoutComponent implements OnInit {

  @Input() coSize: CoSizeType = 'default';

  @ContentChild(ToolbarComponent) toolbarComponent: ToolbarComponent;
  @ContentChild(SearchAreaLayoutComponent) searchAreaLayoutComponent: SearchAreaLayoutComponent;
  @ContentChild(PageSideComponent) pageSideComponent: PageSideComponent;

  constructor() {
  }

  ngOnInit(): void {
  }

}
