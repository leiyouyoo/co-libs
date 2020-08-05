import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, startWith } from 'rxjs/operators';

import { AppsLoadingStartEvent, AppStatusChangeEvent, PlanetApplicationLoader } from './application/planet-application-loader';
import { PlanetApplicationService } from './application/planet-application.service';
import {
  getApplicationLoader,
  getApplicationService,
  setApplicationLoader,
  setApplicationService,
  setPortalApplicationData,
} from './global-planet';
import { PlanetApplication, PlanetOptions, PLANET_APPLICATIONS } from './planet.types';

@Injectable({
  providedIn: 'root',
})
export class Planet {
  private get planetApplicationLoader() {
    return getApplicationLoader();
  }

  private get planetApplicationService() {
    return getApplicationService();
  }

  public get loadingDone() {
    const pal: any = getApplicationLoader();
    return pal.loadingDone;
  }

  public get appStatusChange(): Observable<AppStatusChangeEvent> {
    const pal: any = getApplicationLoader();
    return pal.appStatusChange;
  }

  public get appsLoadingStart(): Observable<AppsLoadingStartEvent> {
    const pal: any = getApplicationLoader();
    return pal.appsLoadingStart;
  }

  constructor(
    private injector: Injector,
    private router: Router,
    @Inject(PLANET_APPLICATIONS) @Optional() planetApplications: PlanetApplication[],
  ) {
    if (!this.planetApplicationLoader) {
      setApplicationLoader(this.injector.get(PlanetApplicationLoader));
    }
    if (!this.planetApplicationService) {
      setApplicationService(this.injector.get(PlanetApplicationService));
    }

    if (planetApplications) {
      this.registerApps(planetApplications);
    }
  }

  setOptions(options: Partial<PlanetOptions>) {
    const pal: any = getApplicationLoader();
    pal.setOptions(options);
  }

  setPortalAppData<T>(data: T) {
    setPortalApplicationData(data);
  }

  registerApp<TExtra>(app: PlanetApplication<TExtra>) {
    const pas: any = getApplicationService();
    pas.register(app);
  }

  registerApps<TExtra>(apps: PlanetApplication<TExtra>[]) {
    const pas: any = getApplicationService();
    pas.register(apps);
  }

  unregisterApp(name: string) {
    const pas: any = getApplicationService();
    pas.unregister(name);
  }

  clear() {
    this.planetApplicationLoader?.clear();

    const apps = this.getApps();
    apps.forEach(app => {
      this.unregisterApp(app.name);
    });
  }

  getApps() {
    const pas: any = getApplicationService();
    return pas.getApps();
  }

  start() {
    this.router.events
      .pipe(
        filter((event: any) => {
          return event instanceof NavigationEnd;
        }),
        map((event: NavigationEnd) => {
          return event.url;
        }),
        startWith(location.pathname),
        distinctUntilChanged(),
      )
      .subscribe((url: string) => {
        const pal: any = getApplicationLoader();
        pal.reroute({
          url,
        });
      });
  }
}
