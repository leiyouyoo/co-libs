import { ApplicationRef, Injector, NgZone } from '@angular/core';
import { NavigationExtras, Router, UrlTree } from '@angular/router';
import { CmsEventDispatcher } from '../cms-event-dispatcher';

export class CmsPortalApplication<TData = any> {
  applicationRef: ApplicationRef;
  injector: Injector;
  router: Router;
  ngZone: NgZone;
  globalEventDispatcher: CmsEventDispatcher;
  data: TData;

  navigateByUrl(url: string | UrlTree, extras?: NavigationExtras): Promise<boolean> {
    return this.ngZone.run(() => {
      return this.router.navigateByUrl(url, extras);
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
