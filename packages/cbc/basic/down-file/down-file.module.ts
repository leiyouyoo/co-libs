import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoCommonModule } from '@co/common';

import { DownFileDirective } from './down-file.directive';

const DIRECTIVES = [DownFileDirective];

@NgModule({
  imports: [CommonModule, CoCommonModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class DownFileModule {}
