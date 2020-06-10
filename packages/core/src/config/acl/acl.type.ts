import { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface CoACLConfig {
  /**
   * Router URL when guard fail, default: `/403`
   */
  guard_url?: string;

  /**
   * `can` before execution callback
   */
  preCan?: ((roleOrAbility: number | number[] | string | string[] | CoACLType) => CoACLType | null) | null;
}

export interface CoACLType {
  /**
   * 角色
   */
  role?: string[];
  /**
   * 权限点
   */
  ability?: number[] | string[];

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
