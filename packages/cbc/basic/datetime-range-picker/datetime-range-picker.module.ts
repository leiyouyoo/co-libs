import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimeRangePickerComponent } from './datetime-range-picker.component';
import { NzPopoverModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DatetimeRangePickerComponent],
  imports: [
    CommonModule,
    NzPopoverModule,
    FormsModule,
  ],
  exports: [DatetimeRangePickerComponent]
})
export class DatetimeRangePickerModule { }
