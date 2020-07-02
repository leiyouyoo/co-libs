import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoLocaleModule } from './locale/locale.module';

import { DrawerHelper } from './services/drawer/drawer.helper';
import { ModalHelper } from './services/modal/modal.helper';

// pipes
import { COMMON_DIRECTIVES } from './directives';
import { COMMON_PIPES } from './pipes';
import { I18nPipe } from './services/i18n/i18n.pipe';

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
      providers: [ModalHelper, DrawerHelper, { provide: ENVIRONMENT, useValue: config.environment }],
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: CoCommonModule,
      providers: [ModalHelper, DrawerHelper],
    };
  }
}
