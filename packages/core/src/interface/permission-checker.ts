export interface PermissionChecker {
  /**
   * 当前用户是否拥有角色
   * @param role 角色名
   */
  hasRole(role: string): boolean;

  /**
   * 当前用户是否拥有指定权限点
   *
   * @param permission 权限点
   */
  hasPermission(permission: string): boolean;

  /**
   * 当前用户是否拥有指定职务
   * @param role 职务名
   */
  hasJob(role: string): boolean;
}
