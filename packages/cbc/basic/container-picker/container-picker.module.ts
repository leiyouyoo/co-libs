import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContainerPickerComponent } from './container-picker.component';
import { NzSelectModule } from 'ng-zorro-antd/select';

const COMPONENTS = [ContainerPickerComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FormsModule, NzSelectModule],
  exports: [...COMPONENTS],
})
export class ContainerPickerModule {}
