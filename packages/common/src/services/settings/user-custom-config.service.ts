import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _HttpClient } from '../http/http.client';
import { CO_SESSIONSERVICE_TOKEN, deepGet, deepMergeKey, ISessionService } from '@co/core';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { set as _Set, cloneDeep } from 'lodash';

@Injectable({ providedIn: 'root' })
export class UserCustomConfigService {
  get value(): object {
    try {
      return JSON.parse(this.sessionService.settings[this.currentRouteUrl]);
    }catch (e) {
      return {};
    }
  }
  get currentRouteUrl() {
    return this.router.url.split('#')[0];
  }

  constructor(private http: _HttpClient,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              @Inject(CO_SESSIONSERVICE_TOKEN) private sessionService: ISessionService,
  ) {
  }

  getByPath(path: string | string[], defaultValue?: any): any {
    const config: object = this.value;
    if (config) {
      return deepGet(config, this.pathFactory(path), defaultValue);
    } else {
      return defaultValue;
    }
  }

  private getCurrentUserSetting(key?: string): Promise<any> {
    return this.http.get('/platform/Setting/getCurrentUserSetting', { key: key || this.currentRouteUrl })
      .pipe(
        map(data => {
          try {
            // this.value = JSON.parse(data);
          } catch (e) {
            console.error(e);
          }
          return this.value;
        }),
      ).toPromise()
  }

  setCurrentUserSetting(path: string | string[], value: any): Promise<any> {
    path = this.pathFactory(path);

    const preValue = cloneDeep(this.value);
    const mergedValue = deepMergeKey(preValue || {}, true, _Set({}, path, value));
    const mergedValueStr = JSON.stringify(mergedValue);

    return this.http.post('/platform/Setting/setCurrentUserSetting', { name: this.currentRouteUrl, value: mergedValueStr } )
      .pipe(
        tap(() => {
          this.sessionService.settings[this.currentRouteUrl] = mergedValueStr;
        })
      ).toPromise()
  }

  pathFactory(path: string | string[]): string[] {
    path = Array.isArray(path) ? path : (path as string).split('.') ;
    return [...(path as string[])];
  }
}
