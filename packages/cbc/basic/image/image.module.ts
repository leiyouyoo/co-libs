import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoUtilModule } from '@co/core';
import { CoImageDirective } from './image.directive';

const DIRECTIVES = [CoImageDirective];

/**
 * Image模块
 */
@NgModule({
  imports: [CommonModule, CoUtilModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class CoImageModule { }
