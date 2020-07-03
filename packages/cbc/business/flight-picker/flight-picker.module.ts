import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightPickerComponent } from './flight-picker.component';
import { FormsModule } from '@angular/forms';
import { NzSelectModule, NzSpinModule } from 'ng-zorro-antd';

const COMPONENT = [FlightPickerComponent];

@NgModule({
  declarations: [...COMPONENT],
  imports: [CommonModule, FormsModule, NzSelectModule, NzSpinModule],
  exports: [...COMPONENT],
})
export class FlightPickerModule {}
