import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule, NzSelectModule, NzSpinModule, NzTreeSelectModule } from 'ng-zorro-antd';
import { TreePickerComponent } from './tree-picker.component';

const COMPONENTS = [TreePickerComponent];

/**
 * 客户选取器模块
 */
@NgModule({
  imports: [CommonModule, FormsModule, NzSelectModule, NzSpinModule, NzTreeSelectModule, NzButtonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class TreePickerModule {
}
