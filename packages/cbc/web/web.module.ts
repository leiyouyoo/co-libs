import { NgModule } from '@angular/core';
import { CoNzSelectExtraModule } from '@co/cbc/web/nz-select-extra';
import { SEModule } from '@co/cbc/web/se';
import { CoSTModule } from '@co/cbc/web/st';

const MODULES: any[] = [CoSTModule, SEModule, CoNzSelectExtraModule];

@NgModule({ exports: MODULES })
export class CbcWebComponentsModule {
  constructor() {}
}
