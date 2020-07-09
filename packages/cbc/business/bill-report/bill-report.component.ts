import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { BillingService } from '@co/cds';
import { LifeCycleComponent } from '@co/cbc/core';

@Component({
  selector: 'co-bill-report',
  exportAs: 'coBillReport',
  templateUrl: './bill-report.component.html',
  host: { '[class.co-bill-report]': 'true' },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BillReportComponent extends LifeCycleComponent {

  constructor(cdr: ChangeDetectorRef, private billingService: BillingService) {
    super();
  }

  ngOnInit(): void {
    this.getData();
  }


  getData() {
  }
}
