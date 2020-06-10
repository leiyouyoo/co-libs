import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@co/core';
import { XlsxDirective } from './xlsx.directive';

const COMPONENTS = [XlsxDirective];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class XlsxModule { }
