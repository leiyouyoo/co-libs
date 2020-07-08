import { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface ACLType {
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

export type ACLCanType = string | string[] | ACLType;


export type ACLControlType = "readonly" | "disabled" | "visibled";
