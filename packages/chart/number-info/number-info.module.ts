import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoUtilModule } from '@co/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NumberInfoComponent } from './number-info.component';

const COMPONENTS = [NumberInfoComponent];

@NgModule({
  imports: [CommonModule, NzIconModule, CoUtilModule, NzOutletModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NumberInfoModule {}
