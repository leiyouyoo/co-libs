import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoUtilModule } from '@co/core';

import { CoMouseFocusDirective } from './mouse-focus.directive';

const COMPONENTS = [CoMouseFocusDirective];

@NgModule({
  imports: [CommonModule, CoUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class CoMouseFocusModule { }
