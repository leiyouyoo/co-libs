import { ApplicationRef, Injectable, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, from, Observable, of, Subject } from 'rxjs';
import { catchError, distinctUntilChanged, filter, map, share, switchMap, take, tap } from 'rxjs/operators';

import { AssetsLoader } from '../assets-loader';
import { GlobalEventDispatcher } from '../global-event-dispatcher';
import { getApplicationLoader, getPlanetApplicationRef, globalPlanet } from '../global-planet';
import { coerceArray, getHTMLElement } from '../helpers';
import { PlanetApplication, PlanetOptions, PlanetRouterEvent, SwitchModes } from '../planet.types';
import { PlanetApplicationRef } from './planet-application-ref';
import { PlanetApplicationService } from './planet-application.service';
import { PlanetPortalApplication } from './portal-application';

export enum ApplicationStatus {
  assetsLoading = 1,
  assetsLoaded = 2,
  bootstrapping = 3,
  bootstrapped = 4,
  active = 5,
  loadError = 10,
}

export interface AppsLoadingStartEvent {
  shouldLoadApps: PlanetApplication[];
  shouldUnloadApps: PlanetApplication[];
}

export interface AppStatusChangeEvent {
  app: PlanetApplication;
  status: ApplicationStatus;
}

@Injectable({
  providedIn: 'root',
})
export class PlanetApplicationLoader {
  private firstLoad = true;

  private startRouteChangeEvent: PlanetRouterEvent;

  private options: PlanetOptions;

  private inProgressAppAssetsLoads = new Map<string, Observable<PlanetApplication>>();

  private appsStatus = new Map<PlanetApplication, ApplicationStatus>();

  private portalApp = new PlanetPortalApplication();

  private routeChange$ = new Subject<PlanetRouterEvent>();

  private appStatusChange$ = new Subject<AppStatusChangeEvent>();

  private appsLoadingStart$ = new Subject<AppsLoadingStartEvent>();

  public get appStatusChange(): Observable<AppStatusChangeEvent> {
    return this.appStatusChange$.asObservable();
  }

  public get appsLoadingStart(): Observable<AppsLoadingStartEvent> {
    return this.appsLoadingStart$.asObservable();
  }

  public loadingDone = false;

  constructor(
    private assetsLoader: AssetsLoader,
    private planetApplicationService: PlanetApplicationService,
    private ngZone: NgZone,
    router: Router,
    injector: Injector,
    applicationRef: ApplicationRef,
  ) {
    if (getApplicationLoader()) {
      throw new Error('PlanetApplicationLoader has been injected in the portal, repeated injection is not allowed');
    }

    this.options = {
      switchMode: SwitchModes.default,
      errorHandler: (error: Error) => {
        console.error(error);
      },
    };
    this.portalApp.ngZone = ngZone;
    this.portalApp.applicationRef = applicationRef;
    this.portalApp.router = router;
    this.portalApp.injector = injector;
    this.portalApp.globalEventDispatcher = injector.get(GlobalEventDispatcher);
    globalPlanet.portalApplication = this.portalApp;
    this.setupRouteChange();
  }

  private setAppStatus(app: PlanetApplication, status: ApplicationStatus) {
    this.appStatusChange$.next({
      app,
      status,
    });
    this.appsStatus.set(app, status);
  }

  private switchModeIsCoexist(app: PlanetApplication) {
    if (app && app.switchMode) {
      return app.switchMode === SwitchModes.coexist;
    } else {
      return this.options.switchMode === SwitchModes.coexist;
    }
  }

  private errorHandler(error: Error) {
    this.ngZone.run(() => {
      this.options.errorHandler(error);
    });
  }

  private takeOneStable() {
    return this.ngZone.onStable.asObservable().pipe(take(1));
  }

  private setLoadingDone() {
    this.ngZone.run(() => {
      this.loadingDone = true;
    });
  }

  private setupRouteChange() {
    this.routeChange$
      .pipe(
        distinctUntilChanged((x, y) => {
          return (x && x.url) === (y && y.url);
        }),
        // Using switchMap so we cancel executing loading when a new one comes in
        switchMap(event => {
          // Return new observable use of and catchError,
          // in order to prevent routeChange$ completed which never trigger new route change
          return of(event).pipe(
            // unload apps and return should load apps
            map(() => {
              this.loadingDone = false;
              this.startRouteChangeEvent = event;
              const shouldLoadApps = this.planetApplicationService.getAppsByMatchedUrl(event.url);
              const shouldUnloadApps = this.getUnloadApps(shouldLoadApps);
              this.appsLoadingStart$.next({
                shouldLoadApps,
                shouldUnloadApps,
              });
              this.unloadApps(shouldUnloadApps, event);
              return shouldLoadApps;
            }),
            // Load app assets (static resources)
            switchMap(shouldLoadApps => {
              const loadApps$ = shouldLoadApps.map(app => {
                const appStatus = this.appsStatus.get(app);
                if (!appStatus || appStatus === ApplicationStatus.assetsLoading || appStatus === ApplicationStatus.loadError) {
                  return this.ngZone.runOutsideAngular(() => {
                    return this.startLoadAppAssets(app);
                  });
                } else {
                  return of(app);
                }
              });
              return loadApps$.length > 0 ? forkJoin(loadApps$) : of([] as PlanetApplication[]);
            }),
            // Bootstrap or show apps
            map((apps: any) => {
              const apps$: Observable<PlanetApplication>[] = [];
              apps.forEach((app: any) => {
                const appStatus = this.appsStatus.get(app);
                if (appStatus === ApplicationStatus.bootstrapped) {
                  apps$.push(
                    of(app).pipe(
                      tap(() => {
                        this.showApp(app);
                        const appRef = getPlanetApplicationRef(app.name);
                        appRef.navigateByUrl(event.url);
                        this.setAppStatus(app, ApplicationStatus.active);
                        this.setLoadingDone();
                      }),
                    ),
                  );
                } else if (appStatus === ApplicationStatus.assetsLoaded) {
                  apps$.push(
                    of(app).pipe(
                      switchMap(() => {
                        return this.bootstrapApp(app).pipe(
                          map(() => {
                            this.setAppStatus(app, ApplicationStatus.active);
                            this.setLoadingDone();
                            return app;
                          }),
                        );
                      }),
                    ),
                  );
                } else if (appStatus === ApplicationStatus.active) {
                  apps$.push(
                    of(app).pipe(
                      tap(() => {
                        const appRef = getPlanetApplicationRef(app.name);
                        // Backwards compatibility sub app use old version which has not getCurrentRouterStateUrl
                        const currentUrl = appRef.getCurrentRouterStateUrl ? appRef.getCurrentRouterStateUrl() : '';
                        if (currentUrl !== event.url) {
                          appRef.navigateByUrl(event.url);
                        }
                      }),
                    ),
                  );
                } else {
                  throw new Error(`app(${app.name})'s status is ${appStatus}, can't be show or bootstrap`);
                }
              });

              if (apps$.length > 0) {
                // ??????????????????????????????????????????????????? setTimeout ???????????????
                // If app's route has redirect, it doesn't work, it ok just in setTimeout, I don't know why.
                setTimeout(() => {
                  // ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? Event ???????????????????????????
                  if (this.startRouteChangeEvent === event) {
                    this.ngZone.runOutsideAngular(() => {
                      forkJoin(apps$).subscribe(() => {
                        this.setLoadingDone();
                        this.ensurePreloadApps(apps);
                      });
                    });
                  }
                });
              } else {
                this.ensurePreloadApps(apps);
                this.setLoadingDone();
              }
            }),
            // Error handler
            catchError(error => {
              this.errorHandler(error);
              return [];
            }),
          );
        }),
      )
      .subscribe();
  }

  private startLoadAppAssets(app: PlanetApplication) {
    if (this.inProgressAppAssetsLoads.get(app.name)) {
      return this.inProgressAppAssetsLoads.get(app.name);
    } else {
      const loadApp$ = this.assetsLoader.loadAppAssets(app).pipe(
        tap(() => {
          this.inProgressAppAssetsLoads.delete(app.name);
          this.setAppStatus(app, ApplicationStatus.assetsLoaded);
        }),
        map(() => {
          return app;
        }),
        catchError(error => {
          this.inProgressAppAssetsLoads.delete(app.name);
          this.setAppStatus(app, ApplicationStatus.loadError);
          throw error;
        }),
        share(),
      );
      this.inProgressAppAssetsLoads.set(app.name, loadApp$);
      this.setAppStatus(app, ApplicationStatus.assetsLoading);
      return loadApp$;
    }
  }

  private hideApp(planetApp: PlanetApplication) {
    const appRootElement = document.querySelector(planetApp.selector);
    if (appRootElement) {
      appRootElement.setAttribute('style', 'display:none;');
    }
  }

  private showApp(planetApp: PlanetApplication) {
    const appRootElement = document.querySelector(planetApp.selector);
    if (appRootElement) {
      appRootElement.setAttribute('style', '');
    }
  }

  private destroyApp(planetApp: PlanetApplication) {
    const appRef = getPlanetApplicationRef(planetApp.name);
    if (appRef) {
      appRef.destroy();
    }
    const container = getHTMLElement(planetApp.hostParent);
    const appRootElement = container.querySelector(planetApp.selector);
    if (appRootElement) {
      container.removeChild(appRootElement);
    }
  }

  private bootstrapApp(app: PlanetApplication, defaultStatus: 'hidden' | 'display' = 'display'): Observable<PlanetApplicationRef> {
    this.setAppStatus(app, ApplicationStatus.bootstrapping);
    const appRef = getPlanetApplicationRef(app.name);
    if (appRef && appRef.bootstrap) {
      const container = getHTMLElement(app.hostParent);
      let appRootElement: HTMLElement | null;
      if (container) {
        appRootElement = container.querySelector(app.selector);
        if (!appRootElement) {
          appRootElement = document.createElement(app.selector);
          appRootElement.setAttribute('style', 'display:none;');
          if (app.hostClass) {
            appRootElement.classList.add(...coerceArray(app.hostClass));
          }
          container.appendChild(appRootElement);
        }
      }
      let result: any = appRef.bootstrap(this.portalApp);
      // Backwards compatibility promise for bootstrap
      if (result.then) {
        result = from(result) as Observable<PlanetApplicationRef>;
      }
      return result.pipe(
        tap(() => {
          this.setAppStatus(app, ApplicationStatus.bootstrapped);
          if (defaultStatus === 'display' && appRootElement) {
            appRootElement.removeAttribute('style');
          }
        }),
        map(() => {
          return appRef;
        }),
      );
    }
    return of(null as any);
  }

  private getUnloadApps(activeApps: PlanetApplication[]) {
    const unloadApps: PlanetApplication[] = [];
    this.appsStatus.forEach((value, app) => {
      if (value === ApplicationStatus.active && !activeApps.find(item => item.name === app.name)) {
        unloadApps.push(app);
      }
    });
    return unloadApps;
  }

  private unloadApps(shouldUnloadApps: PlanetApplication[], event: PlanetRouterEvent) {
    const hideApps: PlanetApplication[] = [];
    const destroyApps: PlanetApplication[] = [];
    shouldUnloadApps.forEach(app => {
      if (this.switchModeIsCoexist(app)) {
        hideApps.push(app);
        this.hideApp(app);
        this.setAppStatus(app, ApplicationStatus.bootstrapped);
      } else {
        destroyApps.push(app);
        // ?????????????????????????????????????????????????????? destroy ??????????????????
        // ??????????????????????????????????????????????????????????????????????????????????????????
        this.hideApp(app);
        this.setAppStatus(app, ApplicationStatus.assetsLoaded);
      }
    });

    if (hideApps.length > 0 || destroyApps.length > 0) {
      // ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
      // ?????????????????? this.ngZone.onStable.pipe(take(1)) ????????????????????????????????????
      setTimeout(() => {
        hideApps.forEach(app => {
          const appRef = getPlanetApplicationRef(app.name);
          if (appRef) {
            appRef.navigateByUrl(event.url);
          }
        });
        destroyApps.forEach(app => {
          this.destroyApp(app);
        });
      });
    }
  }

  private preloadApps(activeApps?: PlanetApplication[]) {
    setTimeout(() => {
      const toPreloadApps = this.planetApplicationService.getAppsToPreload(activeApps ? activeApps.map(item => item.name) : undefined);
      const loadApps$ = toPreloadApps.map(preloadApp => {
        return this.preload(preloadApp);
      });

      forkJoin(loadApps$).subscribe({
        error: error => this.errorHandler(error),
      });
    });
  }

  private ensurePreloadApps(activeApps?: PlanetApplication[]) {
    // Start preload apps
    // Start preload when first time app loaded
    if (this.firstLoad) {
      this.preloadApps(activeApps);
      this.firstLoad = false;
    }
  }

  setOptions(options: Partial<PlanetOptions>) {
    this.options = {
      ...this.options,
      ...options,
    };
  }

  /**
   * reset route by current router
   */
  reroute(event: PlanetRouterEvent) {
    this.routeChange$.next(event);
  }

  /**
   * Preload planet application
   * @param app app
   */
  preload(app: PlanetApplication): Observable<PlanetApplicationRef> {
    const status = this.appsStatus.get(app);
    if (!status || status === ApplicationStatus.loadError) {
      return (this.startLoadAppAssets(app) as any).pipe(
        switchMap(() => {
          return this.ngZone.runOutsideAngular(() => {
            return this.takeOneStable().pipe(
              tap(() => {
                this.bootstrapApp(app, 'hidden').subscribe();
              }),
              map(() => {
                return getPlanetApplicationRef(app.name);
              }),
            );
          });
        }),
      );
    } else if (status === ApplicationStatus.assetsLoading || status === ApplicationStatus.bootstrapping) {
      return this.appStatusChange.pipe(
        filter(event => {
          return event.app === app && event.status === ApplicationStatus.bootstrapped;
        }),
        take(1),
        map(() => {
          return getPlanetApplicationRef(app.name);
        }),
      );
    } else {
      return of(getPlanetApplicationRef(app.name));
    }
  }

  clear() {
    this.appsStatus.clear();
  }
}
