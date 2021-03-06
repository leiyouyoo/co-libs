export default `import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from '@core';
import { DelonMockModule } from '@co/mock';
import { AlainThemeModule } from '@co/common';
import { AlainConfig, ALAIN_CONFIG } from '@co/core';

// Please refer to: https://www.cityocean.com/docs/global-config
// #region NG-ALAIN Config

import { DelonACLModule } from '@co/acl';

const alainConfig: AlainConfig = {
  // st: { modal: { size: 'lg' } },
  // pageHeader: { homeI18n: 'home' },
  // auth: { login_url: '/passport/login' },
};

const alainModules = [AlainThemeModule.forRoot(), DelonACLModule.forRoot(), DelonMockModule.forRoot()];
const alainProvides = [{ provide: ALAIN_CONFIG, useValue: alainConfig }];

// mock
import { environment } from '@env/environment';
import * as MOCKDATA from '../../_mock';
if (!environment.production) {
  alainConfig.mock = { data: MOCKDATA };
}

// #region reuse-tab
/**
 * 若需要[路由复用](https://www.cityocean.com/components/reuse-tab)需要：
 * 1、在 \`shared-delon.module.ts\` 导入 \`ReuseTabModule\` 模块
 * 2、注册 \`RouteReuseStrategy\`
 * 3、在 \`src/app/layout/default/default.component.html\` 修改：
 *  \`\`\`html
 *  <section class="alain-default__content">
 *    <reuse-tab #reuseTab></reuse-tab>
 *    <router-outlet (activate)="reuseTab.activate($event)"></router-outlet>
 *  </section>
 *  \`\`\`
 */
// import { RouteReuseStrategy } from '@angular/router';
// import { ReuseTabService, ReuseTabStrategy } from '@co/cbc/reuse-tab';
// alainProvides.push({
//   provide: RouteReuseStrategy,
//   useClass: ReuseTabStrategy,
//   deps: [ReuseTabService],
// } as any);

// #endregion

// #endregion

// Please refer to: https://ng.ant.design/docs/global-config/en#how-to-use
// #region NG-ZORRO Config

import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';

const ngZorroConfig: NzConfig = {};

const zorroProvides = [{ provide: NZ_CONFIG, useValue: ngZorroConfig }];

// #endregion

@NgModule({
  imports: [...alainModules],
})
export class GlobalConfigModule {
  constructor(@Optional() @SkipSelf() parentModule: GlobalConfigModule) {
    throwIfAlreadyLoaded(parentModule, 'GlobalConfigModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GlobalConfigModule,
      providers: [...alainProvides, ...zorroProvides],
    };
  }
}
`;
