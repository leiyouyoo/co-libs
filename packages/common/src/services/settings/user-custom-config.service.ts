import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { _HttpClient } from '../http/http.client';
import { deepGet, deepMergeKey } from '@co/core';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { set as _Set, cloneDeep } from 'lodash';

@Injectable({ providedIn: 'root' })
export class UserCustomConfigService {
  configKey = `PageSets.FCM.Page1`;
  value: any = void 0;

  constructor(private http: _HttpClient,
              private activatedRoute: ActivatedRoute,
              private router: Router,
  ) {
  }

  getByPath(path: string | string[], defaultValue?: any): any {
    return deepGet(this.value, this.pathFactory(path), defaultValue);
  }

  getCurrentUserSetting(): Promise<any> {
    return this.http.get('/platform/Setting/getCurrentUserSetting', { key: this.configKey })
      .pipe(
        map(data => {
          try {
            this.value = JSON.parse(data);
          } catch (e) {
            this.value = null;
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

    return this.http.post('/platform/Setting/setCurrentUserSetting', { name: this.configKey, value: JSON.stringify(mergedValue) } )
      .pipe(
        tap(() => {
          this.value = mergedValue;
        })
      ).toPromise()
  }

  pathFactory(path: string | string[]): string[] {
    path = Array.isArray(path) ? path : (path as string).split('.') ;
    return [this.router.url.split('#')[0], ...(path as string[])];
  }
}
