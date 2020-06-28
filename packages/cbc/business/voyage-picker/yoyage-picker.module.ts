import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoyagePickerComponent } from './voyage-picker.component';
import { FormsModule } from '@angular/forms';
import { NzSelectModule, NzSpinModule } from 'ng-zorro-antd';

const COMPONENT = [VoyagePickerComponent];

@NgModule({
  declarations: [...COMPONENT],
  imports: [CommonModule, FormsModule, NzSelectModule, NzSpinModule],
  exports: [...COMPONENT],
})
export class YoyagePickerModule {}
