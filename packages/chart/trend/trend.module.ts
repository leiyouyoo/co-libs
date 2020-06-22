import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoUtilModule } from '@co/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { TrendComponent } from './trend.component';

const COMPONENTS = [TrendComponent];

@NgModule({
  imports: [CommonModule, NzIconModule, CoUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class TrendModule {}
