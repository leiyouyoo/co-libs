import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchByExtraKeyDirective } from './search-by-extra-key.directive';
import { NzOptionExtraChangeDirective } from './nz-option-extra-change.directive';
import { NzOptionExtraDirective } from './nz-option-extra.directive';

const directives = [
  NzOptionExtraDirective,
  NzOptionExtraChangeDirective,
  SearchByExtraKeyDirective,
]

@NgModule({
  declarations: [...directives],
  imports: [
    CommonModule
  ],
  exports: [...directives]
})
export class CoNzSelectExtraModule { }
