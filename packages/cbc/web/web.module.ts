import { NgModule } from '@angular/core';
import { CoNzSelectExtraModule } from '@co/cbc/web/nz-select-extra';
import { CoNzSelectCellTitleModule } from '@co/cbc/web/nz-select-cell-title';
import { SEModule } from '@co/cbc/web/se';
import { CoSTModule } from '@co/cbc/web/st';

const MODULES: any[] = [CoSTModule, SEModule, CoNzSelectExtraModule, CoNzSelectCellTitleModule];

@NgModule({ exports: MODULES })
export class CbcWebComponentsModule {
  constructor() {}
}
