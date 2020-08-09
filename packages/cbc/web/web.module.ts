import { NgModule } from '@angular/core';
import { CoNzSelectExtraModule } from './nz-select-extra';
import { SEModule } from './se';
import { CoSTModule } from './st';

const MODULES: any[] = [CoSTModule, SEModule, CoNzSelectExtraModule];

@NgModule({ exports: MODULES })
export class CbcWebComponentsModule {
  constructor() {}
}
