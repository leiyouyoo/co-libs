import { Injector, NgZone, Optional } from '@angular/core';
import { NavigationExtras } from '@angular/router';

import { CoI18NService, CO_I18N_TOKEN } from '../interface/i18n.interface';
import { CO_LOGGER_TOKEN, ILogger } from '../interface/logger.interface';
import { CO_MODALHELPER_TOKEN, IModalHelper } from '../interface/modal.interface';
import { CO_PERMISSIONCHECKER_TOKEN, IPermissionCheckerService } from '../interface/permission-checker.interface';
import { CO_SESSIONSERVICE_TOKEN, ISessionService } from '../interface/session.interface';
import { CO_TITLE_TOKEN, ITitleService } from '../interface/title.interface';
import { LifeCycleComponent } from './life-cycle-component';

declare var window: any;
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

  public $navigate(commands: any[], extras?: NavigationExtras): void {
    const ngZone = this.injector.get(NgZone);
    window.planet.portalApplication.navigate(commands, extras);
  }
}
