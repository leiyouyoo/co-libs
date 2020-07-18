import { Inject, Pipe, PipeTransform } from '@angular/core';
import { CoI18NService, CO_I18N_TOKEN } from '@co/core';

@Pipe({ name: 'i18n' })
export class I18nPipe implements PipeTransform {
  constructor(@Inject(CO_I18N_TOKEN) private i18n: CoI18NService) { }

  transform(key: string, interpolateParams?: {}, isSafe?: boolean): string {
    return this.i18n.fanyi(key, interpolateParams, isSafe);
  }
}
