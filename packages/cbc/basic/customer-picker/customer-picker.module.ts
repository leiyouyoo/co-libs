import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPickerComponent } from './customer-picker.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [CustomerPickerComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NzSelectModule],
  exports: [...COMPONENTS],
})
export class CustomerPickerModule {}
