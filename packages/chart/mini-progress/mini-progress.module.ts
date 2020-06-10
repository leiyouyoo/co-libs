import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonLocaleModule } from '@co/theme';
import { DelonUtilModule } from '@co/core';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { G2MiniProgressComponent } from './mini-progress.component';

const COMPONENTS = [G2MiniProgressComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule, DelonLocaleModule, NzToolTipModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2MiniProgressModule { }
