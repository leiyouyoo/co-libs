import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'co-flex-row-breaker, [co-flex-row-breaker]',
  template: ``,
  host: { '[class.co-flex-row-breaker]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FlexRowBreakerComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
