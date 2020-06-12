import { NgModule } from '@angular/core';

import zhCN from './languages/zh-CN';

import { CO_LOCALE_SERVICE_PROVIDER } from './locale.service';
import { CO_LOCALE } from './locale.tokens';

@NgModule({
  providers: [{ provide: CO_LOCALE, useValue: zhCN }, CO_LOCALE_SERVICE_PROVIDER],
})
export class CoLocaleModule {}
