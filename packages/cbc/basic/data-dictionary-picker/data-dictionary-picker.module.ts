import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { DataDictionaryPickerComponent } from './data-dictionary-picker.component';

const COMPONENTS = [DataDictionaryPickerComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FormsModule, NzSelectModule],
  exports: [...COMPONENTS],
})
export class DataDictionaryPickerModule {}
