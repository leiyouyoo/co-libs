import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { CoCascaderComponent } from './cascader.component';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';

const COMPONENTS = [CoCascaderComponent];

@NgModule({
  imports: [CommonModule, FormsModule, NzDatePickerModule, NzCascaderModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class OrganizationCascaderModule { }
