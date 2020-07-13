import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoUtilModule } from '@co/core';
import { CoXlsxDirective } from './xlsx.directive';

const COMPONENTS = [CoXlsxDirective];

@NgModule({
  imports: [CommonModule, CoUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class CoXlsxModule { }
