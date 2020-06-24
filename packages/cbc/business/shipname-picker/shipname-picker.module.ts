import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipnamePickerComponent } from './shipname-picker.component';
import { NzSelectModule, NzSpinModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
const COMPONENT = [ShipnamePickerComponent];

/**
 * 船名选取器模块
 */
@NgModule({
  declarations: [...COMPONENT],
  imports: [CommonModule, FormsModule, NzSelectModule, NzSpinModule],
  exports: [...COMPONENT],
})
export class ShipnamePickerModule {}
