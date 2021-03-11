import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule, NzSelectModule, NzSpinModule } from 'ng-zorro-antd';
import { PortPickerComponent } from './port-picker.component';
import { PortTemplateComponent } from './port-template.component';

const COMPONENTS = [PortPickerComponent, PortTemplateComponent];

/**
 * 客户选取器模块
 */
@NgModule({
  imports: [CommonModule, FormsModule, NzSelectModule, NzSpinModule, NzIconModule,],
  declarations: [...COMPONENTS,],
  exports: [...COMPONENTS],
})
export class PortPickerModule {}
