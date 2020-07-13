import { Injectable, Inject, Optional, Injector } from '@angular/core';
import { NavigationEnd, RouterEvent, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, startWith, distinctUntilChanged, map } from 'rxjs/operators';

import { PlanetOptions, PlanetApplication, PLANET_APPLICATIONS } from './planet.types';
import { PlanetApplicationService } from './application/planet-application.service';
import {
    PlanetApplicationLoader,
    AppsLoadingStartEvent,
    AppStatusChangeEvent
} from './application/planet-application-loader';
import {
    setPortalApplicationData,
    setApplicationLoader,
    setApplicationService,
    getApplicationLoader,
    getApplicationService
} from './global-planet';

@Injectable({
    providedIn: 'root'
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
        @Inject(PLANET_APPLICATIONS) @Optional() planetApplications: PlanetApplication[]
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
                distinctUntilChanged()
            )
            .subscribe((url: string) => {
                const pal: any = getApplicationLoader();
                pal.reroute({
                    url: url
                });
            });
    }
}
