import { Injectable, InjectionToken } from '@angular/core';


export interface ITitleService {
  /** 设置分隔符 */
  separator(value: string);

  /** 设置前缀 */
  prefix(value: string);

  /** 设置后缀 */
  suffix(value: string);

  /** 设置是否反转 */
  reverse(value: boolean);

  /**
   * Set the document title, will be delay `25ms`, pls refer to [#1261](https://github.com/ng-alain/ng-alain/issues/1261)
   */
  setTitle(title?: string | string[]);

  /**
   * Set i18n key of the document title
   */
  setTitleByI18n(key: string, params?: {});
}



export const CO_TITLE_TOKEN = new InjectionToken<ITitleService>('coTitleToken', {
  providedIn: 'root',
  factory: CO_TITLE_TOKEN_FACTORY,
});

export function CO_TITLE_TOKEN_FACTORY() {
  return new CoTitleServiceFake();
}

@Injectable({ providedIn: 'root' })
export class CoTitleServiceFake implements ITitleService {
  /** 设置分隔符 */
  separator(value: string) {
  }

  /** 设置前缀 */
  prefix(value: string) {

  }

  /** 设置后缀 */
  suffix(value: string) {

  }

  /** 设置是否反转 */
  reverse(value: boolean) {

  }

  /**
   * Set the document title, will be delay `25ms`, pls refer to [#1261](https://github.com/ng-alain/ng-alain/issues/1261)
   */
  setTitle(title?: string | string[]) {

  }

  /**
   * Set i18n key of the document title
   */
  setTitleByI18n(key: string, params?: {}) {

  }
}
