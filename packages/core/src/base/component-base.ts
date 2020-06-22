import { Injector, Optional } from '@angular/core';

import { Session } from '../types';
import { PermissionChecker } from '../interface/permission-checker';
import { Logger } from '../interface/logger';

/**
 * 业务组件基类
 */
export abstract class CoComponentBase {
  localization: LocalizationService;
  permission: PermissionService;
  feature: FeatureCheckerService;
  notify: NotifyService;
  setting: SettingService;
  message: MessageService;
  multiTenancy: AbpMultiTenancyService;
  appSession: AppSessionService;
  elementRef: ElementRef;
  modalHelper: ModalHelper;
  titleSrvice: TitleService;

  constructor(@Optional() protected injector: Injector) {
    this.localization = injector.get<LocalizationService>(ALAIN_I18N_TOKEN);
    this.permission = injector.get(PermissionService);
    this.feature = injector.get(FeatureCheckerService);
    this.notify = injector.get(NotifyService);
    this.setting = injector.get(SettingService);
    this.message = injector.get(MessageService);
    this.multiTenancy = injector.get(AbpMultiTenancyService);
    this.appSession = injector.get(AppSessionService);
    this.elementRef = injector.get(ElementRef);
    this.modalHelper = injector.get(ModalHelper);
    this.titleSrvice = injector.get(TitleService);
  }

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
