import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { CoRangePickerComponent } from './range.component';

const COMPONENTS = [CoRangePickerComponent];

@NgModule({
  imports: [CommonModule, FormsModule, NzDatePickerModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class CoDatePickerModule { }
