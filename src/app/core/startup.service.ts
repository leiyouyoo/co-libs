import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Injector } from '@angular/core';
import { CoAuthService, TitleService, _HttpClient } from '@co/common';
import { CO_SESSIONSERVICE_TOKEN, ISessionService } from '@co/core';
import { set as _Set } from 'lodash';
import { NzIconService } from 'ng-zorro-antd/icon';
import { finalize } from 'rxjs/operators';
import { ICONS } from '../../style-icons';

@Injectable()
export class StartupService {
  constructor(private injector: Injector,
              iconSrv: NzIconService,
              @Inject(DOCUMENT) private doc: Document,
              @Inject(CO_SESSIONSERVICE_TOKEN) private sessionService: ISessionService,
              private http: _HttpClient,
              private authService: CoAuthService,
  ) {
    iconSrv.addIcon(...ICONS);
  }

  load(): Promise<any> {
    // api auth
    this.authService.login('sarafu', 'co@123');

    return new Promise(resolve => {
      this.doc.querySelector('#_slow')!.remove();
      this.injector.get(TitleService).suffix = 'CO Libs';

      this.http.get('/platform/Session/GetCurrentUserConfiguration')
        .pipe(
          finalize(() => resolve())
        )
        .subscribe(data => {
          this.sessionService.set(data);
        })
    });
  }
}
