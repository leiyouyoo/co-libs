/**
 * 职位信息
 */
export class Position {
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
}
