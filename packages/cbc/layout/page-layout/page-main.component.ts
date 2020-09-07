import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'co-page-main',
  template: `
    <ng-content></ng-content>`,
  host: { '[class.co-page-main]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PageMainComponent implements OnInit {

  @HostBinding('style.max-width') @Input() coMaxWidth: string = '100%';

  constructor() {
  }

  ngOnInit(): void {
  }

}
