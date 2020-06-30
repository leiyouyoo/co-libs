import { ModuleWithProviders, NgModule } from '@angular/core';
import { CoMockModule } from '@co/mock';
import { CoCommonModule } from '@co/common';
import { CoConfig, CO_CONFIG } from '@co/core';

// Please refer to: https://ng-alain.com/docs/global-config
// #region NG-ALAIN Config

import { CoACLModule } from '@co/acl';
import * as MOCKDATA from '../../_mock';

const coConfig: CoConfig = {
  st: { ps: 3 },
  // lodop: {
  //   license: `A59B099A586B3851E0F0D7FDBF37B603`,
  //   licenseA: `C94CEE276DB2187AE6B65D56B3FC2848`,
  // },
  mock: { data: MOCKDATA },
};

const coModules = [CoCommonModule.forRoot(), CoACLModule.forRoot(), CoMockModule.forRoot()];
const coProvides = [{ provide: CO_CONFIG, useValue: coConfig }];

/**
 * 若需要[路由复用](https://ng-alain.com/components/reuse-tab)需要：
 * 1、增加 `REUSETAB_PROVIDES`
 * 2、在 `src/app/layout/default/default.component.html` 修改：
 *  ```html
 *  <section class="alain-default__content">
 *    <div reuse-tab [mode]="2" debug #reuseTab></div>
 *    <router-outlet (activate)="reuseTab.activate($event)"></router-outlet>
 *  </section>
 *  ```
 */
// import { RouteReuseStrategy } from '@angular/router';
// import { ReuseTabService, ReuseTabStrategy } from '@co/cbc/reuse-tab';
// alainProvides.push({
//   provide: RouteReuseStrategy,
//   useClass: ReuseTabStrategy,
//   deps: [ReuseTabService],
// } as any);

// #endregion

// Please refer to: https://ng.ant.design/docs/global-config/en#how-to-use
// #region NG-ZORRO Config

import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';

const ngZorroConfig: NzConfig = {};

const zorroProvides = [{ provide: NZ_CONFIG, useValue: ngZorroConfig }];

// #endregion

@NgModule({
  imports: [...coModules],
})
export class GlobalConfigModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GlobalConfigModule,
      providers: [...coProvides, ...zorroProvides],
    };
  }
}
