import { Injectable, InjectionToken } from '@angular/core';

/**
 * 用户信息
 */
export type User = {
  /**
   * id
   */
  id: string;

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
 * 用户信息
 */
export type Tenant = {
  /**
   * 账号
   */
  tenancyName?: string;

  /**
   * 名
   */
  name?: string;

  /**
   * 昵称
   */
  id?: string;
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
   * 当前语言
   */
  readonly lang?: string;

  /**
   * 获取令牌
   */
  readonly token: string;

  /**
   * 用户信息
   */
  readonly user: User | any;

  /**
   * 租户信息
   */
  readonly tenant: User | any;

  /**
   * 用户自定义设置
   */
  readonly settings: any;

  /**
   * 平台信息
   */
  readonly platform: any;

  /**
   * 设置令牌
   */
  setToken(token: string): void;

  /**
   * 设置会话信息
   *
   * @param data 会话数据
   */
  set(data): void;
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
   * 设置会话信息
   *
   * @param data 会话数据
   */
  set(data) {}

  /**
   * 获取令牌
   */
  get token(): string | any {
    return null;
  }

  /**
   * 设置令牌
   */
  setToken(token: string) {}

  /**
   * 用户信息
   */
  get user(): User | any {
    return null;
  }

  /**
   * 租户信息
   */
  get tenant(): User | any {
    return null;
  }

  /**
   * 平台信息
   */
  get platform(): any {
    return null;
  }

  /**
   * 当前语言
   */
  get lang(): string | any {
    return 'zh-CN';
  }

  /**
   * 用户自定义设置
   */
  get settings(): any {
    return null;
  }
}
