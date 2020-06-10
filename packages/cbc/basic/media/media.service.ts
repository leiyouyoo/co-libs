import { Injectable } from '@angular/core';
import { CoConfigService, CoMediaConfig, LazyService } from '@co/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MediaService {
  private _cog: CoMediaConfig;
  private loaded = false;
  private notify$ = new Subject<void>();

  get cog(): CoMediaConfig {
    return this._cog;
  }
  set cog(val: CoMediaConfig) {
    this._cog = this.cogSrv.merge<CoMediaConfig, 'media'>(
      'media',
      {
        urls: ['https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.min.js', 'https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.css'],
      },
      val,
    );
  }

  constructor(private cogSrv: CoConfigService, private lazySrv: LazyService) { }

  load(): this {
    if (this.loaded) {
      this.notify$.next();
      return this;
    }
    this.loaded = true;
    this.lazySrv.load(this.cog.urls!).then(() => this.notify$.next());
    return this;
  }

  notify(): Observable<void> {
    return this.notify$.asObservable();
  }
}
