import { NgModule } from '@angular/core';
import { STModule } from '@co/cbc/web/st';

const MODULES: any[] = [
  STModule,
];

/**@co/cbc/basic/down-file
 */
@NgModule({ exports: MODULES })
export class CbcWebComponentsModule {
  constructor() {
  }
}
