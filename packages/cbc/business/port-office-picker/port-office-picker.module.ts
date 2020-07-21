import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSelectModule, NzSpinModule } from 'ng-zorro-antd';
import { PortOfficePickerComponent } from './port-office-picker.component';

const COMPONENTS = [PortOfficePickerComponent];

/**
 * 客户选取器模块
 */
@NgModule({
  imports: [CommonModule, FormsModule, NzSelectModule, NzSpinModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class PortOfficePickerModule {}
