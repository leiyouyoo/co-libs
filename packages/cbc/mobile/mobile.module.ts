import { NgModule } from '@angular/core';
import { warnDeprecation } from '@co/core';


const MODULES: any[] = [
];

/**
 * @deprecated Use secondary entry eg: `import { STModule } from 'ng-zorro-antd/st';`.
 */
@NgModule({ exports: MODULES })
export class CbcMobileComponentsModule {
  constructor() {
    warnDeprecation(
      "The `DelonABCModule` has been deprecated and will be removed in 10.0.0. Please use secondary entry instead.\ne.g. `import { STModule } from 'ng-zorro-antd/st';`",
    );
  }
}
