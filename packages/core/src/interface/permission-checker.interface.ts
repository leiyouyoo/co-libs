import { Injectable, InjectionToken } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface PermissionType {
  /**
   * 角色
   */
  roles?: string[];

  /**
  * 职务
  */
  jobs?: string[];

  /**
   * 职位
   */
  positions?: string[];

  /**
   * 所在部门
   */
  organizationUnits?: string[];

  /**
   * 权限点
   */
  abilities?: number[] | string[];

  /**
   * 校验模式，默认：`oneOf`
   * - `allOf` 表示必须满足所有角色或权限点数组算有效
   * - `oneOf` 表示只须满足角色或权限点数组中的一项算有效
   */
  mode?: 'allOf' | 'oneOf';

  /**
   * 是否取反，即结果为 `true` 时表示未授权
   */
  except?: boolean;

  [key: string]: NzSafeAny;
}

export type PermissionCanType = string | string[] | PermissionType;


/**
 * 对话框辅助类
 */

export interface IPermissionCheckerService {

  /**
   * 当前用户是否有对应角色，其实 `number` 表示Ability
   *
   * - 当 `full: true` 或参数 `null` 时返回 `true`
   * - 若使用 `ACLType` 参数，可以指定 `mode` 校验模式
   */
  can(permissions: PermissionCanType | null): boolean;
}


export const CO_PERMISSIONCHECKER_TOKEN = new InjectionToken<IPermissionCheckerService>('coPermissionCheckerServiceToken', {
  providedIn: 'root',
  factory: CO_PERMISSIONCHEKER_TOKEN_FACTORY,
});

export function CO_PERMISSIONCHEKER_TOKEN_FACTORY() {
  return new CoPermissionCheckerServiceFake();
}


@Injectable({ providedIn: 'root' })
export class CoPermissionCheckerServiceFake implements IPermissionCheckerService {

  can(permissions: PermissionCanType | null): boolean {
    return true;
  }
}
