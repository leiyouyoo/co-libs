import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoUtilModule } from '@co/core';

import { CoMasonryDirective } from './masonry.directive';

const COMPONENTS = [CoMasonryDirective];

@NgModule({
  imports: [CommonModule, CoUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class CoMasonryModule { }
