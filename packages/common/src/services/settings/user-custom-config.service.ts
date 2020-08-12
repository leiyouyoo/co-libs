import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _HttpClient } from '../http/http.client';
import { CO_SESSIONSERVICE_TOKEN, deepGet, deepMergeKey, ISessionService } from '@co/core';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { set as _Set, cloneDeep } from 'lodash';

@Injectable({ providedIn: 'root' })
export class UserCustomConfigService {
  get value(): string {
    return this.sessionService.settings[this.currentRouteUrl];
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
    const config: string = this.value;
    if (config) {
      return deepGet(JSON.parse(config), this.pathFactory(path), defaultValue);
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

    return this.http.post('/platform/Setting/setCurrentUserSetting', { name: this.currentRouteUrl, value: JSON.stringify(mergedValue) } )
      .pipe(
        tap(() => {
          this.sessionService.settings[this.currentRouteUrl] = mergedValue;
        })
      ).toPromise()
  }

  pathFactory(path: string | string[]): string[] {
    path = Array.isArray(path) ? path : (path as string).split('.') ;
    return [...(path as string[])];
  }
}
