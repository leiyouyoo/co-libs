import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoUtilModule } from '@co/core';

import { CoScrollbarDirective } from './scrollbar.directive';

const COMPONENTS = [CoScrollbarDirective];

@NgModule({
  imports: [CommonModule, CoUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class CoScrollbarModule { }
