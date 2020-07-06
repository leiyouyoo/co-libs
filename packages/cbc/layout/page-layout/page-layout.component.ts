import { ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CoSizeType } from '@co/cbc/core';
import { PageSideComponent } from './page-side.component';
import { SearchAreaLayoutComponent } from '@co/cbc/layout/search-area-layout';
import { ToolbarComponent } from '@co/cbc/layout/toolbar';

@Component({
  selector: 'co-page-layout',
  templateUrl: './page-layout.component.html',
  host: { '[class.co-page-layout]': 'true' },
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
