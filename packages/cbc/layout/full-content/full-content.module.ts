import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoUtilModule } from '@co/core';
import { FullContentToggleDirective } from './full-content-toggle.directive';
import { FullContentComponent } from './full-content.component';

const COMPONENTS = [FullContentComponent, FullContentToggleDirective];

@NgModule({
  imports: [CommonModule, CoUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class FullContentModule {}
