import { Inject, Injectable } from '@angular/core';
import { ISessionService, Tenant, User } from '@co/core';
import * as _ from 'lodash';

@Injectable({ providedIn: 'platform' })
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
   * 获取令牌
   */
  get token(): string | any {
    return localStorage.getItem('token');
  }

  /**
   * 设置令牌
   */
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  /**
   * 用户信息
   */
  get user(): User | any {
    const user = _.get(this.data, 'session.user');
    return user;
  }

  /**
   * 租户信息
   */
  get tenant(): Tenant {
    const tenant = _.get(this.data, 'session.tenant');
    return tenant;
  }

  /**
   * 平台信息
   */
  get platform(): any {
    const tenant = _.get(this.data, 'session.platform');
    return tenant;
  }

  /**
   * 当前语言
   */
  get lang(): string {
    return _.get(this.data, 'localization.currentLanguage.name') || 'zh-CN';
  }

  /**
   * 用户自定义设置
   */
  get settings(): any {
    return _.get(this.data, 'setting.values');
  }
}
