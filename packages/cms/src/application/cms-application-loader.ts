import { ApplicationRef, Injectable, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, from, Observable, of, Subject } from 'rxjs';
import { catchError, distinctUntilChanged, filter, map, share, switchMap, take, tap } from 'rxjs/operators';
import { coerceArray, getHTMLElement } from '../helpers';
import { CmsAssetsLoader } from '../cms-assets-loader'
import { CmsEventDispatcher } from '../cms-event-dispatcher'
import { getApplicationLoader, getPlanetApplicationRef, cmsGlobalCache } from '../cms-global-cache';
import { CmsApplication, CmsModes, CmsOptions, CmsRouterEvent } from '../cms-options';
import { CmsApplicationRef } from './cms-application-ref';
import { CmsApplicationService } from './cms-application.service';
import { CmsPortalApplication } from './cms-portal-application';

export enum ApplicationStatus {
  assetsLoading = 1,
  assetsLoaded = 2,
  bootstrapping = 3,
  bootstrapped = 4,
  active = 5,
  loadError = 10
}

export interface AppsLoadingStartEvent {
  shouldLoadApps: CmsApplication[];
  shouldUnloadApps: CmsApplication[];
}

export interface AppStatusChangeEvent {
  app: CmsApplication;
  status: ApplicationStatus;
}

@Injectable({
  providedIn: 'root'
})
export class CmsApplicationLoader {
  private firstLoad = true;

  private startRouteChangeEvent: CmsRouterEvent;

  private options: CmsOptions;

  private inProgressAppAssetsLoads = new Map<string, Observable<CmsApplication>>();

  private appsStatus = new Map<CmsApplication, ApplicationStatus>();

  private portalApp = new CmsPortalApplication();

  private routeChange$ = new Subject<CmsRouterEvent>();

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
    private assetsLoader: CmsAssetsLoader,
    private planetApplicationService: CmsApplicationService,
    private ngZone: NgZone,
    router: Router,
    injector: Injector,
    applicationRef: ApplicationRef
  ) {
    if (getApplicationLoader()) {
      throw new Error(
        'PlanetApplicationLoader has been injected in the portal, repeated injection is not allowed'
      );
    }

    this.options = {
      switchMode: CmsModes.default,
      errorHandler: (error: Error) => {
        console.error(error);
      }
    };
    this.portalApp.ngZone = ngZone;
    this.portalApp.applicationRef = applicationRef;
    this.portalApp.router = router;
    this.portalApp.injector = injector;
    this.portalApp.globalEventDispatcher = injector.get(CmsEventDispatcher);
    cmsGlobalCache.portalApplication = this.portalApp;
    this.setupRouteChange();
  }

  private setAppStatus(app: CmsApplication, status: ApplicationStatus) {
    this.appStatusChange$.next({
      app,
      status
    });
    this.appsStatus.set(app, status);
  }

  private switchModeIsCoexist(app: CmsApplication) {
    if (app && app.switchMode) {
      return app.switchMode === CmsModes.coexist;
    } else {
      return this.options.switchMode === CmsModes.coexist;
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
                shouldUnloadApps
              });
              this.unloadApps(shouldUnloadApps, event);
              return shouldLoadApps;
            }),
            // Load app assets (static resources)
            switchMap(shouldLoadApps => {
              const loadApps$ = shouldLoadApps.map(app => {
                const appStatus = this.appsStatus.get(app);
                if (
                  !appStatus ||
                  appStatus === ApplicationStatus.assetsLoading ||
                  appStatus === ApplicationStatus.loadError
                ) {
                  return this.ngZone.runOutsideAngular(() => {
                    return this.startLoadAppAssets(app);
                  });
                } else {
                  return of(app);
                }
              });
              return loadApps$.length > 0 ? forkJoin(loadApps$) : of([] as CmsApplication[]);
            }),
            // Bootstrap or show apps
            map(apps => {
              const apps$: Observable<CmsApplication>[] = [];
              apps.forEach(app => {
                const appStatus = this.appsStatus.get(app);
                if (appStatus === ApplicationStatus.bootstrapped) {
                  apps$.push(
                    of(app).pipe(
                      tap(() => {
                        this.showApp(app);
                        const appRef = getPlanetApplicationRef(app.name);
                        if (appRef) {
                          appRef.navigateByUrl(event.url);
                        }
                        this.setAppStatus(app, ApplicationStatus.active);
                        this.setLoadingDone();
                      })
                    )
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
                          })
                        );
                      })
                    )
                  );
                } else if (appStatus === ApplicationStatus.active) {
                  apps$.push(
                    of(app).pipe(
                      tap(() => {
                        const appRef = getPlanetApplicationRef(app.name);
                        if (appRef) {
                          // Backwards compatibility sub app use old version which has not getCurrentRouterStateUrl
                          const currentUrl = appRef.getCurrentRouterStateUrl
                            ? appRef.getCurrentRouterStateUrl()
                            : '';
                          if (currentUrl !== event.url) {
                            appRef.navigateByUrl(event.url);
                          }
                        }
                      })
                    )
                  );
                } else {
                  throw new Error(
                    `app(${app.name})'s status is ${appStatus}, can't be show or bootstrap`
                  );
                }
              });

              if (apps$.length > 0) {
                // 切换到应用后会有闪烁现象，所以使用 setTimeout 后启动应用
                // If app's route has redirect, it doesn't work, it ok just in setTimeout, I don't know why.
                setTimeout(() => {
                  // 此处判断是因为如果静态资源加载完毕还未启动被取消，还是会启动之前的应用，虽然可能性比较小，但是无法排除这种可能性，所以只有当 Event 是最后一个才会启动
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
            })
          );
        })
      )
      .subscribe();
  }

  private startLoadAppAssets(app: CmsApplication) {
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
        share()
      );
      this.inProgressAppAssetsLoads.set(app.name, loadApp$);
      this.setAppStatus(app, ApplicationStatus.assetsLoading);
      return loadApp$;
    }
  }

  private hideApp(planetApp: CmsApplication) {
    const appRootElement = document.querySelector(planetApp.selector);
    if (appRootElement) {
      appRootElement.setAttribute('style', 'display:none;');
    }
  }

  private showApp(planetApp: CmsApplication) {
    const appRootElement = document.querySelector(planetApp.selector);
    if (appRootElement) {
      appRootElement.setAttribute('style', '');
    }
  }

  private destroyApp(planetApp: CmsApplication) {
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

  private bootstrapApp(
    app: CmsApplication,
    defaultStatus: 'hidden' | 'display' = 'display'
  ): Observable<CmsApplicationRef | null> {
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
        result = from(result) as Observable<CmsApplicationRef>;
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
        })
      );
    }
    return of(null);
  }

  private getUnloadApps(activeApps: CmsApplication[]) {
    const unloadApps: CmsApplication[] = [];
    this.appsStatus.forEach((value, app) => {
      if (value === ApplicationStatus.active && !activeApps.find(item => item.name === app.name)) {
        unloadApps.push(app);
      }
    });
    return unloadApps;
  }

  private unloadApps(shouldUnloadApps: CmsApplication[], event: CmsRouterEvent) {
    const hideApps: CmsApplication[] = [];
    const destroyApps: CmsApplication[] = [];
    shouldUnloadApps.forEach(app => {
      if (this.switchModeIsCoexist(app)) {
        hideApps.push(app);
        this.hideApp(app);
        this.setAppStatus(app, ApplicationStatus.bootstrapped);
      } else {
        destroyApps.push(app);
        // 销毁之前先隐藏，否则会出现闪烁，因为 destroy 是延迟执行的
        // 如果销毁不延迟执行，会出现切换到主应用的时候会有视图卡顿现象
        this.hideApp(app);
        this.setAppStatus(app, ApplicationStatus.assetsLoaded);
      }
    });

    if (hideApps.length > 0 || destroyApps.length > 0) {
      // 从其他应用切换到主应用的时候会有视图卡顿现象，所以先等主应用渲染完毕后再加载其他应用
      // 此处尝试使用 this.ngZone.onStable.pipe(take(1)) 应用之间的切换会出现闪烁
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

  private preloadApps(activeApps?: CmsApplication[]) {
    setTimeout(() => {
      const toPreloadApps = this.planetApplicationService.getAppsToPreload(
        activeApps ? activeApps.map(item => item.name) : undefined
      );
      const loadApps$ = toPreloadApps.map(preloadApp => {
        return this.preload(preloadApp);
      });

      forkJoin(loadApps$).subscribe({
        error: error => this.errorHandler(error)
      });
    });
  }

  private ensurePreloadApps(activeApps?: CmsApplication[]) {
    // Start preload apps
    // Start preload when first time app loaded
    if (this.firstLoad) {
      this.preloadApps(activeApps);
      this.firstLoad = false;
    }
  }

  setOptions(options: Partial<CmsOptions>) {
    this.options = {
      ...this.options,
      ...options
    };
  }

  /**
   * reset route by current router
   */
  reroute(event: CmsRouterEvent) {
    this.routeChange$.next(event);
  }

  /**
   * Preload planet application
   * @param app app
   */
  preload(app: CmsApplication): Observable<CmsApplicationRef | null> {
    const status = this.appsStatus.get(app);
    if (!status || status === ApplicationStatus.loadError) {
      const loadAssets$: any = this.startLoadAppAssets(app);
      return loadAssets$.pipe(
        switchMap(() => {
          return this.ngZone.runOutsideAngular(() => {
            return this.takeOneStable().pipe(
              tap(() => {
                this.bootstrapApp(app, 'hidden').subscribe();
              }),
              map(() => {
                return getPlanetApplicationRef(app.name);
              })
            );
          });
        })
      );
    } else if (status === ApplicationStatus.assetsLoading || status === ApplicationStatus.bootstrapping) {

      return this.appStatusChange.pipe(
        filter(event => {
          return event.app === app && event.status === ApplicationStatus.bootstrapped;
        }),
        take(1),
        map(() => {
          return getPlanetApplicationRef(app.name);
        })
      );
    } else {
      return of(getPlanetApplicationRef(app.name));
    }
  }
}
