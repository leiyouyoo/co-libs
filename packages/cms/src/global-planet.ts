import { PlanetApplicationRef, BootstrapAppModule } from './application/planet-application-ref';
import { PlanetPortalApplication } from './application/portal-application';
import { PlanetApplicationLoader } from './application/planet-application-loader';
import { PlanetApplicationService } from './application/planet-application.service';

declare const window: any;

export interface GlobalPlanet {
    apps: { [key: string]: PlanetApplicationRef };
    portalApplication?: PlanetPortalApplication;
    applicationLoader?: PlanetApplicationLoader;
    applicationService?: PlanetApplicationService;
}

export const globalPlanet: GlobalPlanet = (window.planet = window.planet || {
    apps: {}
});

export function defineApplication(name: string, version: string, bootstrapModule: BootstrapAppModule) {
    if (globalPlanet.apps[name]) {
        throw new Error(`${name} application has exist.`);
    }
    const appRef = new PlanetApplicationRef(name, version, bootstrapModule);
    globalPlanet.apps[name] = appRef;
}

export function getPlanetApplicationRef(appName: string): PlanetApplicationRef {
    if (globalPlanet && globalPlanet.apps && globalPlanet.apps[appName]) {
        return globalPlanet.apps[appName];
    } else {
        return null as any;
    }
}

export function setPortalApplicationData<T>(data: T) {
    if (globalPlanet && globalPlanet.portalApplication) {
        globalPlanet.portalApplication.data = data;
    }
}

export function getPortalApplicationData<TData>(): TData {
    if (globalPlanet && globalPlanet.portalApplication) {
        return globalPlanet.portalApplication.data as TData;
    } else {
        return null as any;
    }
}

export function setApplicationLoader(loader: PlanetApplicationLoader) {
    globalPlanet.applicationLoader = loader;
}

export function getApplicationLoader() {
    return globalPlanet.applicationLoader;
}

export function setApplicationService(service: PlanetApplicationService) {
    globalPlanet.applicationService = service;
}

export function getApplicationService() {
    return globalPlanet.applicationService;
}

export function clearGlobalPlanet() {
    window.planet.apps = {};
    window.planet.portalApplication = null;
    window.planet.applicationLoader = null;
    window.planet.applicationService = null;
}
