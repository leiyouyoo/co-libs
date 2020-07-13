import { Inject, Injectable, Optional } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { CoConfig, CoConfigKey, CO_CONFIG } from './config.types';
import _ from 'lodash'
@Injectable({ providedIn: 'platform' })
export class CoConfigService {
  private config: CoConfig;

  constructor(@Optional() @Inject(CO_CONFIG) defaultConfig?: CoConfig) {
    this.config = defaultConfig || {};
  }

  update<R, T extends CoConfigKey>(componentName: T, newValues: R): void {
    this.config[componentName] = { ...this.config[componentName], ...newValues };
  }

  get<T extends CoConfigKey>(componentName: T, key?: string): CoConfig[T] {
    const res = ((this.config[componentName] as { [key: string]: NzSafeAny }) || {}) as NzSafeAny;
    return key ? { [key]: res[key] } : res;
  }

  merge<R, T extends CoConfigKey>(componentName: T, ...defaultValues: R[]): R {
    return _.extend({}, ...defaultValues, this.get(componentName));
  }

  attach<R, T extends CoConfigKey>(componentThis: NzSafeAny, componentName: T, defaultValues: R) {
    Object.assign(componentThis, this.merge(componentName, defaultValues));
  }

  attachKey<T extends CoConfigKey>(componentThis: NzSafeAny, componentName: T, key: string) {
    Object.assign(componentThis, this.get(componentName, key));
  }

  set<T extends CoConfigKey>(componentName: T, value: CoConfig[T]): void {
    this.config[componentName] = { ...this.config[componentName], ...value };
  }
}
