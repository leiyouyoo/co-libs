import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectCellTitleDirective } from './nz-select-cell-title.directive';

const directives = [
  NzSelectCellTitleDirective,
]

@NgModule({
  declarations: [...directives],
  imports: [
    CommonModule
  ],
  exports: [...directives]
})
export class CoNzSelectCellTitleModule { }
