import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoUtilModule } from '@co/core';

import { G2MiniBarComponent } from './mini-bar.component';

const COMPONENTS = [G2MiniBarComponent];

@NgModule({
  imports: [CommonModule, CoUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2MiniBarModule {}
