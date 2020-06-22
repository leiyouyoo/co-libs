import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoUtilModule } from '@co/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

import { G2WaterWaveComponent } from './water-wave.component';

const COMPONENTS = [G2WaterWaveComponent];

@NgModule({
  imports: [CommonModule, CoUtilModule, NzOutletModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2WaterWaveModule {}
