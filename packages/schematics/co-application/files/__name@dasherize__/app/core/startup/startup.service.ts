import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ACLService, ACLType } from '@co/acl';
import { CoConfigManager, CO_I18N_TOKEN } from '@co/core';

import { I18NService } from '../i18n/i18n.service';

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
  constructor(
    private iconSrv: NzIconService,
    private translate: TranslateService,
    private aclService: ACLService,
    @Inject(CO_I18N_TOKEN) private i18n: I18NService,
    private httpClient: HttpClient,
  ) {
    this.iconSrv.fetchFromIconfont({
      scriptUrl: CoConfigManager.getValue('iconSrv'),
    });
  }

  load(): Promise<any> {
    // TODO:子应用代码-加载指定子应用语言文件
    return new Promise(resolve => {
      zip(this.httpClient.get(`./apps/<%= name %>/assets/i18n/${this.i18n.defaultLang}.json`))
        .pipe(
          // 接收其他拦截器后产生的异常消息
          catchError(res => {
            window.localStorage.removeItem('_token');
            console.warn(`StartupService.load: Network request failed`, res);
            resolve(null);
            return [];
          }),
        )
        .subscribe(
          ([langData, appData]) => {
            // setting language data
            this.translate.setTranslation(this.i18n.defaultLang, langData);
            this.translate.use(this.i18n.defaultLang);
            this.translate.setDefaultLang(this.i18n.defaultLang);
          },
          () => {},
          () => {
            resolve(null);
          },
        );
    });
  }
}
