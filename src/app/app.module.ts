import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

// angular i18n
import { registerLocaleData } from '@angular/common';
import localeZh from '@angular/common/locales/zh';
registerLocaleData(localeZh);

import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';

import { CoBusinessComponentsModule, CoMobileBusinessComponentsModule } from '@co/cbc';
import { CoCommonModule, ResponseInterceptor, UserCustomConfigService } from '@co/common';
import { CO_I18N_TOKEN } from '@co/core';
import { I18NService } from './core/i18n/service';
import { StartupService } from './core/startup.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';

import { GlobalConfigModule } from './global-config.module';

import { SimplemdeModule } from 'ngx-simplemde';
import { NgxTinymceModule } from 'ngx-tinymce';
import { UEditorModule } from 'ngx-ueditor';
import { JsonSchemaModule } from './shared/json-schema/json-schema.module';

import { JWTInterceptor } from '@co/auth';
import { ExampleModule, EXAMPLE_COMPONENTS } from './routes/gen/examples';
import { IconComponent } from './shared/components/icon/icon.component';

export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}

@NgModule({
  imports: [
    BrowserModule,
    CoBusinessComponentsModule,
    CoMobileBusinessComponentsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GlobalConfigModule.forRoot(),
    LayoutModule,
    SharedModule,
    JsonSchemaModule,
    RoutesModule,
    ExampleModule,
    // i18n
    TranslateModule.forRoot(),
    NgxTinymceModule.forRoot({
      baseURL: 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.2/',
    }),
    UEditorModule.forRoot({
      // **??????** ????????????????????????????????????????????? ng-alain ?????????????????????????????????CDN????????????????????????????????????
      js: [`//apps.bdimg.com/libs/ueditor/1.4.3.1/ueditor.config.js`, `//apps.bdimg.com/libs/ueditor/1.4.3.1/ueditor.all.min.js`],
      options: {
        UEDITOR_HOME_URL: `//apps.bdimg.com/libs/ueditor/1.4.3.1/`,
      },
    }),
    SimplemdeModule.forRoot({
      delay: 300,
    }),
    CoCommonModule.forRoot({ environment: { SERVER_URL: 'http://api.test.com', LOGIN_URL: '' } }),
  ],
  providers: [
    [
      { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
    ],
    { provide: CO_I18N_TOKEN, useClass: I18NService, multi: false },
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true,
    },
  ],
  declarations: [AppComponent, LayoutComponent, HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    Object.keys(EXAMPLE_COMPONENTS).forEach(key => {
      const element = createCustomElement(EXAMPLE_COMPONENTS[key].component, {
        injector,
      });
      customElements.define(key, element);
    });
    // icon
    customElements.define('nz-icon', createCustomElement(IconComponent, { injector }));
  }
}
