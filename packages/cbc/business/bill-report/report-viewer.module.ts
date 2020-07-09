import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReportViewerComponent } from './bill-report/report-viewer.component';

const COMPONENTS = [ReportViewerComponent];

/**
 * 客户选取器模块
 */
@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ReportViewerModule {
}
