import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoUtilModule } from '@co/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { G2CardComponent } from './card.component';

const COMPONENTS = [G2CardComponent];

@NgModule({
  imports: [CommonModule, CoUtilModule, NzCardModule, NzSpinModule, NzOutletModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2CardModule {}
