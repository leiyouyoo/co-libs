import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceUserPickerComponent } from './service-user-picker.component';
import { FormsModule } from '@angular/forms';
import { NzSelectModule, NzSpinModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [
    ServiceUserPickerComponent,
  ],
  imports: [CommonModule, FormsModule, NzSelectModule, NzSpinModule],
  exports: [
    ServiceUserPickerComponent,
  ]
})
export class ServiceUserPickerModule { }
