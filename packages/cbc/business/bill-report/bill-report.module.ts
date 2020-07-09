import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BillReportComponent } from './bill-report.component';

const COMPONENTS = [BillReportComponent];

/**
 * 客户选取器模块
 */
@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class BillReportModule {
}
