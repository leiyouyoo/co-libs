import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoUtilModule } from '@co/core';

import { CoStatusLabelComponent } from './status-label.component';

const COMPONENTS = [CoStatusLabelComponent];

@NgModule({
  imports: [CommonModule, CoUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class CoStatusLabelModule { }
