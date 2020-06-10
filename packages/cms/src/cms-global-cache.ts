import { CmsApplicationLoader } from './application/cms-application-loader';
import { BootstrapAppModule, CmsApplicationRef } from './application/cms-application-ref';
import { CmsApplicationService } from './application/cms-application.service';
import { CmsPortalApplication } from './application/cms-portal-application';

declare const window: any;

export interface CmsGlobalCache {
  apps: { [key: string]: CmsApplicationRef };
  portalApplication?: CmsPortalApplication;
  applicationLoader?: CmsApplicationLoader;
  applicationService?: CmsApplicationService;
}

export const cmsGlobalCache: CmsGlobalCache = (window.microserviceGlobalCache = window.microserviceGlobalCache || {
  apps: {}
});

export function defineApplication(name: string, bootstrapModule: BootstrapAppModule) {
  if (cmsGlobalCache.apps[name]) {
    throw new Error(`${name} application has exist.`);
  }
  const appRef = new CmsApplicationRef(name, bootstrapModule);
  cmsGlobalCache.apps[name] = appRef;
}

export function getPlanetApplicationRef(appName: string): CmsApplicationRef | null {
  if (cmsGlobalCache && cmsGlobalCache.apps && cmsGlobalCache.apps[appName]) {
    return cmsGlobalCache.apps[appName];
  } else {
    return null;
  }
}

export function setPortalApplicationData<T>(data: T) {
  if (cmsGlobalCache.portalApplication) {
    cmsGlobalCache.portalApplication.data = data;
  }
}

export function getPortalApplicationData<TData>(): TData | null {
  if (cmsGlobalCache.portalApplication) {
    return cmsGlobalCache.portalApplication.data as TData;
  } else {
    return null;
  }
}

export function setApplicationLoader(loader: CmsApplicationLoader) {
  cmsGlobalCache.applicationLoader = loader;
}

export function getApplicationLoader() {
  return cmsGlobalCache.applicationLoader;
}

export function setApplicationService(service: CmsApplicationService) {
  cmsGlobalCache.applicationService = service;
}

export function getApplicationService() {
  return cmsGlobalCache.applicationService;
}

export function clearGlobalCms() {
  window.microserviceGlobalCache.apps = {};
  window.microserviceGlobalCache.portalApplication = null;
  window.microserviceGlobalCache.applicationLoader = null;
  window.microserviceGlobalCache.applicationService = null;
}
