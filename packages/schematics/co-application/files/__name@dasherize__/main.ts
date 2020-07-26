import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ReuseTabService } from '@co/cbc';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { defineApplication, PlanetPortalApplication } from '@co/cms';

if (environment.production) {
  enableProdMode();
}

// todo:子应用代码
defineApplication(
  '<%= name %>',
  (portalApp: PlanetPortalApplication) => {
    return platformBrowserDynamic([
      {
        provide: PlanetPortalApplication,
        useValue: portalApp,
      },
      {
        provide: ReuseTabService,
        useValue: portalApp.data.data,
      },
    ])
      .bootstrapModule(AppModule)
      .then(appModule => {
        return appModule;
      })
      .catch(error => {
        return null;
      });
  },
  { version: process.env.APP_VERSION, releaseDate: new Date(process.env.APP_RELEASEDATE) },
);
