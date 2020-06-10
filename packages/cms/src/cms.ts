import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, startWith } from 'rxjs/operators';
import {
  AppsLoadingStartEvent,
  AppStatusChangeEvent,
  CmsApplicationLoader
} from './application/cms-application-loader';
import { CmsApplicationService } from './application/cms-application.service';
import {
  getApplicationLoader,
  getApplicationService,
  setApplicationLoader,
  setApplicationService,
  setPortalApplicationData
} from './cms-global-cache';
import { CmsApplication, CmsOptions, CMS_APPLICATIONS } from './cms-options';


@Injectable({
  providedIn: 'root'
})
export class Microservice {
  private get applicationLoader() {
    return getApplicationLoader();
  }

  private get applicationService() {
    return getApplicationService();
  }

  public get loadingDone(): any {
    if (this.applicationLoader) {
      return this.applicationLoader.loadingDone;
    } else {
      return null;
    }
  }

  public get appStatusChange(): Observable<AppStatusChangeEvent> | null {
    if (this.applicationLoader) {
      return this.applicationLoader.appStatusChange;
    } else {
      return null;
    }
  }

  public get appsLoadingStart(): Observable<AppsLoadingStartEvent> | null {
    if (this.applicationLoader) {
      return this.applicationLoader.appsLoadingStart;
    } else {
      return null;
    }

  }

  constructor(
    private injector: Injector,
    private router: Router,
    @Inject(CMS_APPLICATIONS) @Optional() applications: CmsApplication[]
  ) {
    if (!this.applicationLoader) {
      setApplicationLoader(this.injector.get(CmsApplicationLoader));
    }
    if (!this.applicationService) {
      setApplicationService(this.injector.get(CmsApplicationService));
    }

    if (applications) {
      this.registerApps(applications);
    }
  }

  setOptions(options: Partial<CmsOptions>) {
    if (this.applicationLoader) {

      this.applicationLoader.setOptions(options);
    }
  }

  setPortalAppData<T>(data: T) {
    setPortalApplicationData(data);
  }

  registerApp<TExtra>(app: CmsApplication<TExtra>) {
    if (this.applicationService) {
      this.applicationService.register(app);
    }
  }

  registerApps<TExtra>(apps: CmsApplication<TExtra>[]) {
    if (this.applicationService) {
      this.applicationService.register(apps);
    }
  }

  unregisterApp(name: string) {
    if (this.applicationService) {
      this.applicationService.unregister(name);
    }
  }

  getApps() {
    if (this.applicationService) {
      return this.applicationService.getApps();
    } else {
      return null;
    }
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
        distinctUntilChanged()
      )
      .subscribe((url: string) => {
        if (this.applicationLoader) {
          this.applicationLoader.reroute({
            url
          });
        }
      });
  }
}
