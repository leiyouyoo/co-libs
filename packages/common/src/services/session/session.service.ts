import { Inject, Injectable } from '@angular/core';
import { ISessionService, User } from '@co/core';
import * as _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class CoSessionService implements ISessionService {
  _data: any;
  constructor() {}

  get data(): any {
    if (this._data) {
      return this._data;
    }

    const c = localStorage.getItem('co.session');
    if (!_.isEmpty(c)) {
      return JSON.parse(c || '');
    } else {
      return null;
    }
  }

  /**
   * 设置会话信息
   *
   * @param data 会话数据
   */
  set(data) {
    this._data = data;
    localStorage.setItem('co.session', JSON.stringify(data));
  }

  /**
   * 令牌
   */
  get token(): string | any {
    return localStorage.getItem('token');
  }

  /**
   * 用户信息
   */
  get user(): User | any {
    const user = _.get(this.data, 'session.user');
    return user;
  }

  /**
   * 当前语言
   */
  get lang(): string | any {
    return _.get(this.data, 'localization.currentLanguage.name');
  }
}
