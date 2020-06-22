import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoUtilModule } from '@co/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { G2RadarComponent } from './radar.component';

const COMPONENTS = [G2RadarComponent];

@NgModule({
  imports: [CommonModule, CoUtilModule, NzGridModule, NzOutletModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2RadarModule {}
