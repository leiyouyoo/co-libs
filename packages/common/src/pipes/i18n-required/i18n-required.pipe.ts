import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'i18nRequired'
})
export class I18nRequiredPipe implements PipeTransform {
  constructor(private translateService: TranslateService,
  ) {
  }

  transform(key: string, ...args: unknown[]): string {
    switch (this.translateService.currentLang) {
      case 'zh-CN':
        return `“${this.translateService.instant(key)}”为必填项`;
      default:
        return `${key} is required`;
    }
  }

}
