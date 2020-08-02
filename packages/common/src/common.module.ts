import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CO_LOGGER_TOKEN, CO_MODALHELPER_TOKEN, CO_SESSIONSERVICE_TOKEN, CO_TITLE_TOKEN } from '@co/core';

import { CoLocaleModule } from './locale/locale.module';

import { CoDrawerHelper } from './services/drawer/drawer.helper';
import { ModalHelper } from './services/modal/modal.helper';

// pipes
import { COMMON_DIRECTIVES } from './directives';
import { COMMON_PIPES } from './pipes';
import { I18nPipe } from './services/i18n/i18n.pipe';

import { CoLogger } from './services/logger/logger';
import { CoSessionService } from './services/session/session.service';
import { TitleService } from './services/title/title.service';

import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { Environment, ENVIRONMENT } from './services/http/environment';

@NgModule({
  imports: [CommonModule, RouterModule, OverlayModule, NzI18nModule, CoLocaleModule],
  declarations: [COMMON_DIRECTIVES, COMMON_PIPES, I18nPipe],
  exports: [COMMON_DIRECTIVES, COMMON_PIPES, CoLocaleModule, I18nPipe],
})
export class CoCommonModule {
  static forRoot(config: { environment: Environment }): ModuleWithProviders {
    return {
      ngModule: CoCommonModule,
      providers: [
        CoDrawerHelper,
        { provide: ENVIRONMENT, useValue: config.environment },
        { provide: CO_TITLE_TOKEN, useClass: TitleService, multi: false },
        { provide: CO_SESSIONSERVICE_TOKEN, useClass: CoSessionService, multi: false },
        { provide: CO_MODALHELPER_TOKEN, useClass: ModalHelper, multi: false },
        { provide: CO_LOGGER_TOKEN, useClass: CoLogger, multi: false },
      ],
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: CoCommonModule,
      providers: [ModalHelper, CoDrawerHelper, { provide: CO_TITLE_TOKEN, useClass: TitleService, multi: false }],
    };
  }
}
