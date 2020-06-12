import { NgModule } from '@angular/core';

const MODULES: any[] = [];

/**@co/cbc/basic/down-file
 * @deprecated Use secondary entry eg: `import { STModule } from 'ng-zorro-antd/st';`.
 */
@NgModule({ exports: MODULES })
export class CbcWebComponentsModule {
  constructor() {
    console.warn(
      "The `CbcWebComponentsModule` has been deprecated and will be removed in 10.0.0. Please use secondary entry instead.\ne.g. `import { STModule } from 'ng-zorro-antd/st';`",
    );
  }
}
