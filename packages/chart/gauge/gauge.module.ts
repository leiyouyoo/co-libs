import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoUtilModule } from '@co/core';

import { G2GaugeComponent } from './gauge.component';

const COMPONENTS = [G2GaugeComponent];

@NgModule({
  imports: [CommonModule, CoUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2GaugeModule {}
