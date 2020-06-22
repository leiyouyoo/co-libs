import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoUtilModule } from '@co/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

import { G2TimelineComponent } from './timeline.component';

const COMPONENTS = [G2TimelineComponent];

@NgModule({
  imports: [CommonModule, CoUtilModule, NzOutletModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2TimelineModule {}
