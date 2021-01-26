import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSpinIconDirective } from './nz-spin-icon.directive';
import { CoSpinTemplateComponent } from './co-spin-template.component';

const directive = [NzSpinIconDirective]

@NgModule({
  declarations: [...directive, CoSpinTemplateComponent],
  imports: [
    CommonModule
  ],
  exports: [...directive],
  entryComponents: [CoSpinTemplateComponent,],
})
export class NzSpinIconModule { }
