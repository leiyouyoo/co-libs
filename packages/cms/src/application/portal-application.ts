import { ApplicationRef, Injector, NgZone } from '@angular/core';
import { NavigationExtras, Router, UrlTree } from '@angular/router';
import { GlobalEventDispatcher } from '../global-event-dispatcher';

export class PlanetPortalApplication<TData = any> {
  applicationRef: ApplicationRef;
  injector: Injector;
  router: Router;
  ngZone: NgZone;
  globalEventDispatcher: GlobalEventDispatcher;
  data: TData;

  navigateByUrl(url: string | UrlTree, extras?: NavigationExtras): Promise<boolean> {
    return this.ngZone.run(() => {
      return this.router.navigateByUrl(url, extras);
    });
  }

  navigate(commands: any[], extras?: NavigationExtras): Promise<boolean> {
    return this.ngZone.run(() => {
      return this.router.navigate(commands, extras);
    });
  }

  run<T>(fn: (...args: any[]) => T): T {
    return this.ngZone.run<T>(() => {
      return fn();
    });
  }

  tick() {
    this.applicationRef.tick();
  }
}
