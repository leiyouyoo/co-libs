import { ComponentPortal, ComponentType, DomPortalOutlet, PortalInjector } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ElementRef, Inject, Injectable, NgModuleRef, NgZone } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, finalize, map, shareReplay } from 'rxjs/operators';
import { CmsApplicationRef } from '../application/cms-application-ref';
import { coerceArray } from '../helpers';
import { getApplicationLoader, getApplicationService, cmsGlobalCache } from '../cms-global-cache';
import { CmsComponentRef } from './cms-component-ref';
import { CmsComponentConfig } from './cms-component.config';

const componentWrapperClass = 'cms-component-wrapper';

export interface CmsComponent<T = any> {
  name: string;
  component: ComponentType<T>;
}

@Injectable({
  providedIn: 'root'
})
export class CmsComponentLoader {
  private domPortalOutletCache = new WeakMap<any, DomPortalOutlet>();

  private get applicationLoader(): any {
    return getApplicationLoader();
  }

  private get applicationService() {
    return getApplicationService();
  }

  constructor(
    private applicationRef: ApplicationRef,
    private ngModuleRef: NgModuleRef<any>,
    private ngZone: NgZone,
    @Inject(DOCUMENT) private document: any
  ) { }

  private getAppRef(name: string): Observable<CmsApplicationRef> {
    if (cmsGlobalCache.apps[name] && cmsGlobalCache.apps[name].appModuleRef) {
      return of(cmsGlobalCache.apps[name]);
    } else {
      const app = this.applicationService && this.applicationService.getAppByName(name);
      return this.applicationLoader.preload(app).pipe(
        // Because register use 'setTimeout',so delay 50
        delay(50),
        map(() => {
          return cmsGlobalCache.apps[name];
        })
      );
    }
  }

  private createInjector<TData>(
    appModuleRef: NgModuleRef<any>,
    componentRef: CmsComponentRef<TData>
  ): PortalInjector {
    const injectionTokens = new WeakMap<any, any>([[CmsComponentRef, componentRef]]);
    const defaultInjector = appModuleRef.injector;
    return new PortalInjector(defaultInjector, injectionTokens);
  }

  private getContainerElement(config: CmsComponentConfig): HTMLElement {
    if (!config.container) {
      throw new Error(`config 'container' cannot be null`);
    } else {
      if ((config.container as ElementRef).nativeElement) {
        return (config.container as ElementRef).nativeElement;
      } else {
        return config.container as HTMLElement;
      }
    }
  }

  private createWrapperElement(config: CmsComponentConfig) {
    const container = this.getContainerElement(config);
    const element = this.document.createElement('div');
    element.classList.add(componentWrapperClass);
    if (config.wrapperClass) {
      element.classList.add(config.wrapperClass);
    }
    container.appendChild(element);
    return element;
  }

  private attachComponent<TData>(
    plantComponent: CmsComponent,
    appModuleRef: NgModuleRef<any>,
    config: CmsComponentConfig
  ): CmsComponentRef<TData> {
    const plantComponentRef = new CmsComponentRef();
    const componentFactoryResolver = appModuleRef.componentFactoryResolver;
    const appRef = this.applicationRef;
    const injector = this.createInjector<TData>(appModuleRef, plantComponentRef);
    const wrapper = this.createWrapperElement(config);
    let portalOutlet: DomPortalOutlet | undefined = this.domPortalOutletCache.get(wrapper);
    if (portalOutlet) {
      portalOutlet.detach();
    } else {
      portalOutlet = new DomPortalOutlet(wrapper, componentFactoryResolver, appRef, injector);
      this.domPortalOutletCache.set(wrapper, portalOutlet);
    }
    const componentPortal = new ComponentPortal(plantComponent.component, null);
    const componentRef = portalOutlet.attachComponentPortal<TData>(componentPortal);
    if (config.initialState) {
      Object.assign(componentRef.instance, config.initialState);
    }
    plantComponentRef.componentInstance = componentRef.instance;
    plantComponentRef.componentRef = componentRef;
    plantComponentRef.wrapperElement = wrapper;
    plantComponentRef.dispose = () => {
      this.domPortalOutletCache.delete(wrapper);
      if (portalOutlet) {
        portalOutlet.dispose();
      }
    };
    return plantComponentRef;
  }

  private registerComponentFactory(componentOrComponents: CmsComponent | CmsComponent[]) {
    const app = this.ngModuleRef.instance.appName;
    this.getAppRef(app).subscribe(appRef => {
      appRef.registerComponentFactory((componentName: string, config: CmsComponentConfig<any>) => {
        const components = coerceArray(componentOrComponents);
        const component = components.find(item => item.name === componentName);
        if (component) {
          return this.ngZone.run(() => {
            return this.attachComponent<any>(component, appRef.appModuleRef, config);
          });
        } else {
          throw Error(`unregistered component ${componentName} in app ${app}`);
        }
      });
    });
  }

  register(components: CmsComponent | CmsComponent[]) {
    setTimeout(() => {
      this.registerComponentFactory(components);
    });
  }

  load<TData = any>(app: string, componentName: string, config: CmsComponentConfig<TData>) {
    const result = this.getAppRef(app).pipe(
      map(appRef => {
        const componentFactory = appRef.getComponentFactory();
        if (componentFactory) {
          return componentFactory<TData>(componentName, config);
        } else {
          throw new Error(`${app} not registered components`);
        }
      }),
      finalize(() => {
        this.applicationRef.tick();
      }),
      shareReplay()
    );
    result.subscribe();
    return result;
  }
}
