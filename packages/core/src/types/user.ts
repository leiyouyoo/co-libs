import { Role } from './role';
import { Position } from './position';

/**
 * 用户信息
 */
export class User {
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
   * 职位
   */
  positions?: Position[];

  /**
   * 角色集合
   */
  roles?: Role[];
}
