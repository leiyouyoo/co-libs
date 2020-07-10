import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReportViewerComponent } from './report-viewer.component';
import { NzWaveModule } from 'ng-zorro-antd';

const COMPONENTS = [ReportViewerComponent];

/**
 * 客户选取器模块
 */
@NgModule({
  imports: [CommonModule, NzWaveModule],
  declarations: [...COMPONENTS ],
  exports: [...COMPONENTS],
})
export class ReportViewerModule {
}
