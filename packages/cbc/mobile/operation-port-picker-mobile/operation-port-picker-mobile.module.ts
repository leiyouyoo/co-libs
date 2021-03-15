import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { OperationProtPickerMobileComponent } from './operation-port-picker-mobile.component';

const COMPONENTS = [OperationProtPickerMobileComponent];

/**
 * 业务员选取器模块
 */
@NgModule({
  imports: [CommonModule, FormsModule, NgSelectModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class OperationPortPickerModule {}
