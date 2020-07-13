import { NgModule } from '@angular/core';
import { CoSTModule } from '@co/cbc/web/st';
import { SEModule } from '@co/cbc/web/se';
import { CoNzSelectExtraModule } from '@co/cbc/web/nz-select-extra';

const MODULES: any[] = [
  CoSTModule,
  SEModule,
  CoNzSelectExtraModule,
];

/**@co/cbc/basic/down-file
 */
@NgModule({ exports: MODULES })
export class CbcWebComponentsModule {
  constructor() {
  }
}
