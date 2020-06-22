import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoUtilModule } from '@co/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { G2PieComponent } from './pie.component';

const COMPONENTS = [G2PieComponent];

@NgModule({
  imports: [CommonModule, CoUtilModule, NzDividerModule, NzOutletModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2PieModule {}
