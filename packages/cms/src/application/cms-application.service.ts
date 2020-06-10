import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { coerceArray } from '../helpers';
import { getApplicationService } from '../cms-global-cache';
import { CmsApplication } from '../cms-options';

@Injectable({
  providedIn: 'root'
})
export class CmsApplicationService {
  private apps: CmsApplication[] = [];

  private appsMap: { [key: string]: CmsApplication } = {};

  constructor(private http: HttpClient) {
    if (getApplicationService()) {
      throw new Error(
        'PlanetApplicationService has been injected in the portal, repeated injection is not allowed'
      );
    }
  }

  register<TExtra>(appOrApps: CmsApplication<TExtra> | CmsApplication<TExtra>[]) {
    const apps = coerceArray(appOrApps);
    apps.forEach(app => {
      if (this.appsMap[app.name]) {
        throw new Error(`${app.name} has be registered.`);
      }
      this.apps.push(app);
      this.appsMap[app.name] = app;
    });
  }

  registerByUrl(url: string): Observable<void> {
    const result = this.http.get(`${url}`).pipe(
      map(apps => {
        if (apps && Array.isArray(apps)) {
          this.register(apps);
        } else {
          this.register(apps as CmsApplication);
        }
      }),
      shareReplay()
    );
    result.subscribe();
    return result;
  }

  unregister(name: string) {
    if (this.appsMap[name]) {
      delete this.appsMap[name];
      this.apps = this.apps.filter(app => {
        return app.name !== name;
      });
    }
  }

  getAppsByMatchedUrl<TExtra>(url: string): CmsApplication<TExtra>[] {
    return this.getApps().filter(app => {
      if (app.routerPathPrefix instanceof RegExp) {
        return app.routerPathPrefix.test(url);
      } else {
        return url.startsWith(app.routerPathPrefix);
      }
    });
  }

  getAppByName(name: string) {
    return this.appsMap[name];
  }

  getAppByMatchedUrl<TExtra>(url: string): CmsApplication<TExtra> | undefined {
    return this.getApps().find((app: any) => {
      if (app.routerPathPrefix instanceof RegExp) {
        return app.routerPathPrefix.test(url);
      } else {
        return url.startsWith(app.routerPathPrefix);
      }
    });
  }

  getAppsToPreload(excludeAppNames?: string[]) {
    return this.getApps().filter(app => {
      if (excludeAppNames) {
        return app.preload && !excludeAppNames.includes(app.name);
      } else {
        return app.preload;
      }
    });
  }

  getApps() {
    return this.apps;
  }
}
