import { Injector, Optional } from '@angular/core';

import { IPermissionCheckerService, CO_PERMISSIONCHECKER_TOKEN } from '../interface/permission-checker.interface';
import { ILogger, CO_LOGGER_TOKEN } from '../interface/logger.interface';
import { ISessionService, CO_SESSIONSERVICE_TOKEN } from '../interface/session.interface';
import { IModalHelper, CO_MODALHELPER_TOKEN } from '../interface/modal.interface';
import { ITitleService, CO_TITLE_TOKEN } from '../interface/title.interface';
import { CoI18NService, CO_I18N_TOKEN } from '../interface/i18n.interface';
import { LifeCycleComponent } from './life-cycle-component';

/**
 * 业务组件基类
 */
export abstract class CoComponentBase extends LifeCycleComponent {
  protected $i18n: CoI18NService;
  protected $session: ISessionService;
  protected $permissionChecker: IPermissionCheckerService;
  protected $modalHelper: IModalHelper;
  protected $titleSrvice: ITitleService;
  protected $logger: ILogger;


  protected constructor(@Optional() protected injector: Injector) {
    super();
    this.$permissionChecker = injector.get(CO_PERMISSIONCHECKER_TOKEN);
    this.$session = injector.get(CO_SESSIONSERVICE_TOKEN);
    this.$modalHelper = injector.get(CO_MODALHELPER_TOKEN);
    this.$titleSrvice = injector.get(CO_TITLE_TOKEN);
    this.$logger = injector.get(CO_LOGGER_TOKEN);
    this.$i18n = injector.get(CO_I18N_TOKEN);
  }

  public $L(key: string, params?: {}, isSafe?: boolean) {
    return this.$i18n.fanyi(key, params, isSafe);
  }
}
