import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoUtilModule } from '@co/core';

import { G2SingleBarComponent } from './single-bar.component';

const COMPONENTS = [G2SingleBarComponent];

@NgModule({
  imports: [CommonModule, CoUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2SingleBarModule {}
