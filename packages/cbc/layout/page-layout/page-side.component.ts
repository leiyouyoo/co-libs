import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'co-page-side',
  template: `
    <ng-content></ng-content>`,
  host: { '[class.co-page-side]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PageSideComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
