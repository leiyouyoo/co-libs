import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PortPickerMobileComponent } from './port-picker-mobile.component';

const COMPONENTS = [PortPickerMobileComponent];

/**
 * 业务员选取器模块
 */
@NgModule({
  imports: [CommonModule, FormsModule, NgSelectModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class PortPickerModule {}
