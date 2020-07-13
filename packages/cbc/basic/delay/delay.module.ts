import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoUtilModule } from '@co/core';

import { CoDelayDirective } from './delay.directive';

const COMPONENTS = [CoDelayDirective];

@NgModule({
  imports: [CommonModule, CoUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class CoDelayModule { }
