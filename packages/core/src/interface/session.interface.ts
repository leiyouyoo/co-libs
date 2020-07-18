import { Injectable, InjectionToken } from '@angular/core';
import { ModalOptions, NzModalService } from 'ng-zorro-antd/modal';
import { Observable, Observer, BehaviorSubject } from 'rxjs';

/**
 * 用户信息
 */
export type User = {
  /**
   * 账号
   */
  userName?: string;

  /**
   * 姓
   */
  surname?: string;

  /**
   * 名
   */
  name?: string;

  /**
   * 昵称
   */
  displayName?: string;

  /**
   * 邮箱
   */
  email?: string;

  /**
   * 电话
   */
  phoneNumber?: string;

  /**
   * 归属公司名
   */
  companyName?: string;

  /**
   * 职位
   */
  positions?: Position[];

  /**
   * 角色集合
   */
  roles?: Role[];
};

/**
 * 角色信息
 */
export type Role = {
  /**
   * id
   */
  id: string;

  /**
   * 名
   */
  name: string;

  /**
   * 昵称
   */
  displayName: string;

  /**
   * 是否默认
   */
  isDefault: boolean;
};

/**
 * 职位信息
 */
export type Position = {
  /**
   * id
   */
  id: string;

  /**
   * 名
   */
  name: string;

  /**
   * 昵称
   */
  displayName: string;

  /**
   * 是否默认
   */
  isDefault: boolean;

  /**
   * 部门名
   */
  organizationUnitName?: string;

  /**
   * 部门全称
   */
  organizationUnitFullName?: string;
};


/**
 * 对话框辅助类
 */

export interface ISessionService {

  /**
   * 令牌
   */
  readonly token?: string;

  /**
   * 姓
   */
  readonly user?: User;

  /**
   * 当前语言
   */
  readonly lang?: string;
}

export const CO_SESSIONSERVICE_TOKEN = new InjectionToken<ISessionService>('coSessionServiceToken', {
  providedIn: 'root',
  factory: CO_SESSIONSERVICE_TOKEN_FACTORY,
});

export function CO_SESSIONSERVICE_TOKEN_FACTORY() {
  return new CoSessionServiceFake();
}


@Injectable({ providedIn: 'root' })
export class CoSessionServiceFake implements ISessionService {

  /**
  * 令牌
  */
  get token(): string | undefined {
    return undefined;
  }

  /**
   * 用户信息
   */
  get user(): User | undefined {
    return undefined;
  }

  /**
   * 当前语言
   */
  get lang(): string | undefined {
    return 'zh-CN';
  }
}
