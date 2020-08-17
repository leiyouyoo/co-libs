import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Injector } from '@angular/core';
import { _HttpClient, CoAuthService, TitleService } from '@co/common';
import { NzIconService } from 'ng-zorro-antd/icon';
import { ICONS } from '../../style-icons';
import { CO_SESSIONSERVICE_TOKEN, ISessionService } from '@co/core';
import { set as _Set } from 'lodash';
import { finalize } from 'rxjs/operators';

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
