import { Injector, Optional } from '@angular/core';

import { Session } from './types';
import { PermissionChecker } from '../interface/permission-checker';
import { Logger } from '../interface/logger';

/**
 * 业务组件基类
 */
export abstract class CoComponentBase {
  constructor(@Optional() protected injector: Injector) {}

  /**
   * 会话信息
   */
  protected session: Session;

  /**
   * 权限检查器
   */
  protected permissionChecker: PermissionChecker;

  /**
   * 日志记录器
   */
  protected logger: Logger;
}
