export default (componentName: string) => `import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

import { AlainThemeModule } from '@co/theme';
import { DemoDelonABCModule } from './delon-abc.module';
import { DemoDelonChartModule } from './delon-chart.module';
import { DelonFormModule } from '@co/form';
import { DelonAuthModule } from '@co/auth';
import { DelonACLModule } from '@co/acl';
import { DelonCacheModule } from '@co/cache';
import { DelonUtilModule } from '@co/core';
import { StartupService, StartupServiceFactory } from './startup.service';
import { GlobalConfigModule } from './global-config.module';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

import { VERSION as VERSION_ALAIN } from '@co/theme';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';
import { ${componentName} } from './app.component';

@NgModule({
imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    DemoNgZorroAntdModule,
    AlainThemeModule.forRoot(),
    DemoDelonABCModule,
    DemoDelonChartModule,
    DelonACLModule.forRoot(),
    DelonCacheModule,
    DelonUtilModule,
    DelonAuthModule,
    DelonFormModule.forRoot(),
    GlobalConfigModule.forRoot(),
],
providers: [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true
  },
  { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }
],
declarations: [ ${componentName} ],
bootstrap:    [ ${componentName} ]
})
export class AppModule {
  constructor() {
    setTimeout(() => {
      document.querySelector('#VERSION').innerHTML = \`
      VERSIONS: ng-zorro-antd(\${VERSION_ZORRO.full}), @co(\${VERSION_ALAIN.full})
      \`;
    }, 1000);
  }
}
  `;
