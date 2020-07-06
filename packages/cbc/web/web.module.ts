import { NgModule } from '@angular/core';
import { CoSTModule } from '@co/cbc/web/st';
import { SEModule } from '@co/cbc/web/se';

const MODULES: any[] = [
  CoSTModule,
  SEModule,
];

/**@co/cbc/basic/down-file
 */
@NgModule({ exports: MODULES })
export class CbcWebComponentsModule {
  constructor() {
  }
}
