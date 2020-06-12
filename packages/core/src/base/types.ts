/**
 * 用户会话信息
 */
export type Session = {
  /**
   * 令牌
   */
  token?: string;

  /**
   * 姓
   */
  user?: User;

  /**
   * 当前语言
   */
  lang: string;

  /**
   * 会话创建时间
   */
  createTime: Date;
};

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
