import { NgModuleRef, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CmsComponentRef } from '../component/cms-component-ref';
import { CmsComponentConfig } from '../component/cms-component.config'
import { CmsPortalApplication } from './cms-portal-application';

export type BootstrapAppModule = (portalApp?: CmsPortalApplication) => Promise<NgModuleRef<any>>;

export type CmsComponentFactory = <TData>(
  componentName: string,
  config: CmsComponentConfig<TData>
) => CmsComponentRef<TData>;

export class CmsApplicationRef {
  public appModuleRef: NgModuleRef<any>;
  private name: string;
  private portalApp: CmsPortalApplication;
  private appModuleBootstrap: (app: CmsPortalApplication) => Promise<NgModuleRef<any>>;
  private componentFactory: CmsComponentFactory;

  constructor(name: string, appModuleBootstrap: (app: CmsPortalApplication) => Promise<NgModuleRef<any>>) {
    this.name = name;
    this.appModuleBootstrap = appModuleBootstrap;
  }

  // 子应用路由变化后同步修改 portal 的 Route
  private syncPortalRouteWhenNavigationEnd() {
    const router = this.appModuleRef.injector.get(Router);
    const ngZone = this.appModuleRef.injector.get(NgZone);
    if (router) {
      router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          ngZone.onStable
            .asObservable()
            .pipe(take(1))
            .subscribe(() => {
              this.portalApp.router.navigateByUrl(event.url);
            });
        }
      });
    }
  }

  bootstrap(app: CmsPortalApplication): Observable<this> {
    if (!this.appModuleBootstrap) {
      throw new Error(`${this.name} app is not define`);
    }
    this.portalApp = app;
    return from(
      this.appModuleBootstrap(app).then(appModuleRef => {
        this.appModuleRef = appModuleRef;
        this.appModuleRef.instance.appName = this.name;
        this.syncPortalRouteWhenNavigationEnd();
        return this;
      })
    );
  }

  getRouter() {
    return this.appModuleRef.injector.get(Router);
  }

  getCurrentRouterStateUrl() {
    return this.getRouter().routerState.snapshot.url;
  }

  navigateByUrl(url: string): void {
    const ngZone = this.appModuleRef.injector.get(NgZone);
    const router = this.getRouter();
    ngZone.run(() => {
      router.navigateByUrl(url);
    });
  }

  getComponentFactory() {
    return this.componentFactory;
  }

  registerComponentFactory(componentFactory: CmsComponentFactory) {
    this.componentFactory = componentFactory;
  }

  destroy(): void {
    if (this.appModuleRef) {
      const router = this.appModuleRef.injector.get(Router);
      if (router) {
        router.dispose();
      }
      this.appModuleRef.destroy();
      delete this.appModuleRef;
    }
  }
}
