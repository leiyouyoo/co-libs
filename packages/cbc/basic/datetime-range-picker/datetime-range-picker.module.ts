import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoDatetimeRangePickerComponent } from './datetime-range-picker.component';
import { NzIconModule, NzIconService, NzInputModule, NzPopoverModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { LeftOutline, RightOutline } from '@ant-design/icons-angular/icons';


@NgModule({
  declarations: [CoDatetimeRangePickerComponent],
  imports: [
    CommonModule,
    NzPopoverModule,
    NzIconModule,
    NzInputModule,
    FormsModule,
  ],
  exports: [CoDatetimeRangePickerComponent]
})
export class CoDatetimeRangePickerModule {
  constructor(private nzIconService: NzIconService,
  ) {
    nzIconService.addIcon(LeftOutline, RightOutline)
  }

}
