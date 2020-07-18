import { Inject, Injectable } from '@angular/core';
import { ISessionService, User } from '@co/core';
import *  as _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class CoSessionService implements ISessionService {

  constructor() {

  }

  get data(): any {
    const c = localStorage.getItem("co.session");
    if (!_.isEmpty(c)) {
      const sessonJson = JSON.parse(c || '');
      return sessonJson;
    } else {
      return null;
    }
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
    const user = _.get(this.data, "session.user");
    return user;
  }

  /**
   * 当前语言
   */
  get lang(): string | any {
    return _.get(this.data, "localization.currentLanguage.name");
  }
}
