import { Inject, Optional, Pipe, PipeTransform } from '@angular/core';
import { CO_I18N_TOKEN, CoI18NService } from '@co/core';

const i18n = {
  'zh-CN':{
    'Columns': '列数',
    'stSetting': '设置列表内容',
    'Save':'保存',
    'Cancel':'取消',
    'Recover': '恢复',
    'Loading': '加载中',
    'Reset': '重置',
  },
  'en-US':{
    'stSetting': 'Settings',
  },
}

@Pipe({
  name: 'internalI18n'
})
export class InternalI18nPipe implements PipeTransform {

  constructor(    @Optional() @Inject(CO_I18N_TOKEN) private i18nSrv: CoI18NService,
  ) {
  }

  transform(value: string, ...args: unknown[]): string {
    const currentLang = this.i18nSrv?.currentLang
    if (!currentLang) return value;

    return i18n[currentLang][value] || value;
  }
}
