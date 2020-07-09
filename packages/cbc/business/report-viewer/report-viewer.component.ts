import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { LifeCycleComponent } from '@co/cbc/core';

@Component({
  selector: 'co-report-viewer',
  exportAs: 'coReportViewer',
  templateUrl: './report-viewer.component.html',
  host: { '[class.co-report-viewer]': 'true' },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ReportViewerComponent extends LifeCycleComponent {

  constructor(cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
  }
}
