import { User } from './user';

/**
 * 用户会话信息
 */
export class Session {
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
}
