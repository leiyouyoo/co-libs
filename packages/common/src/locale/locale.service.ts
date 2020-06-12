import { Inject, Injectable, Optional, Provider, SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import zhCN from './languages/zh-CN';
import { CO_LOCALE } from './locale.tokens';
import { FullLocaleData, LocaleData } from './locale.types';

@Injectable()
export class CoLocaleService {
  private _locale: FullLocaleData;
  private change$ = new BehaviorSubject<FullLocaleData>(this._locale);

  constructor(@Inject(CO_LOCALE) locale: FullLocaleData | null) {
    this.setLocale(locale || zhCN);
  }

  get change(): Observable<FullLocaleData> {
    return this.change$.asObservable();
  }

  setLocale(locale: FullLocaleData): void {
    if (this._locale && this._locale.abbr === locale.abbr) {
      return;
    }
    this._locale = locale;
    this.change$.next(locale);
  }

  get locale(): FullLocaleData {
    return this._locale;
  }

  getData(path: keyof FullLocaleData): LocaleData {
    return (this._locale[path] || {}) as LocaleData;
  }
}

export function CO_LOCALE_SERVICE_PROVIDER_FACTORY(exist: CoLocaleService, locale: FullLocaleData): CoLocaleService {
  return exist || new CoLocaleService(locale);
}

export const CO_LOCALE_SERVICE_PROVIDER: Provider = {
  provide: CoLocaleService,
  useFactory: CO_LOCALE_SERVICE_PROVIDER_FACTORY,
  deps: [[new Optional(), new SkipSelf(), CoLocaleService], CO_LOCALE],
};
