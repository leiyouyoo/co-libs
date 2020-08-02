import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, forkJoin, merge, Observable, Observer, of } from 'rxjs';
import { concatAll, concatMap, map, reduce, scan, shareReplay, switchAll, switchMap, tap } from 'rxjs/operators';

import { getScriptsAndStylesFullPaths, hashCode, isEmpty } from './helpers';
import { PlanetApplication } from './planet.types';

export interface AssetsLoadResult {
  src: string;
  hashCode: number;
  loaded: boolean;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class AssetsLoader {
  private loadedSources: number[] = [];

  constructor(private http: HttpClient) {}

  loadScript(src: string): Observable<AssetsLoadResult> {
    const id = hashCode(src);
    if (this.loadedSources.includes(id)) {
      return of({
        src,
        hashCode: id,
        loaded: true,
        status: 'Loaded',
      });
    }
    return new Observable((observer: Observer<AssetsLoadResult>) => {
      const script: any = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      script.async = true;
      if (script.readyState) {
        // IE
        script.onreadystatechange = () => {
          if (script.readyState === 'loaded' || script.readyState === 'complete') {
            script.onreadystatechange = null;
            observer.next({
              src,
              hashCode: id,
              loaded: true,
              status: 'Loaded',
            });
            observer.complete();
            this.loadedSources.push(id);
          }
        };
      } else {
        // Others
        script.onload = () => {
          observer.next({
            src,
            hashCode: id,
            loaded: true,
            status: 'Loaded',
          });
          observer.complete();
          this.loadedSources.push(id);
        };
      }
      script.onerror = error => {
        observer.error({
          src,
          hashCode: id,
          loaded: false,
          status: 'Error',
          error,
        });
        observer.complete();
      };
      document.body.appendChild(script);
    });
  }

  loadStyle(src: string): Observable<AssetsLoadResult> {
    const id = hashCode(src);
    if (this.loadedSources.includes(id)) {
      return of({
        src,
        hashCode: id,
        loaded: true,
        status: 'Loaded',
      });
    }
    return new Observable((observer: Observer<AssetsLoadResult>) => {
      const head = document.getElementsByTagName('head')[0];
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = src;
      link.media = 'all';
      link.onload = () => {
        observer.next({
          src,
          hashCode: id,
          loaded: true,
          status: 'Loaded',
        });
        observer.complete();
        this.loadedSources.push(id);
      };
      link.onerror = error => {
        observer.error({
          src,
          hashCode: id,
          loaded: true,
          status: 'Loaded',
          error,
        });
        observer.complete();
      };
      head.appendChild(link);
    });
  }

  loadScripts(sources: string[], serial = false): Observable<AssetsLoadResult[]> {
    if (isEmpty(sources)) {
      return of(null as any);
    }
    const observables = sources.map(src => {
      return this.loadScript(src);
    });
    if (serial) {
      const a = concat(...observables).pipe(
        map(item => {
          return of([item]);
        }),
        concatAll(),
      );
      return a;
    } else {
      return forkJoin(observables).pipe();
    }
  }

  loadStyles(sources: string[]): Observable<AssetsLoadResult[]> {
    if (isEmpty(sources)) {
      return of(null as any);
    }
    return forkJoin(
      sources.map(src => {
        return this.loadStyle(src);
      }),
    );
  }

  loadScriptsAndStyles(scripts: string[] = [], styles: string[] = [], serial = false): any {
    return forkJoin(this.loadScripts(scripts, serial), this.loadStyles(styles));
  }

  loadAppAssets(app: PlanetApplication) {
    if (app.manifest) {
      return this.loadManifest(`${app.manifest}?t=${new Date().getTime()}`).pipe(
        switchMap(manifestResult => {
          const { scripts, styles } = getScriptsAndStylesFullPaths(app, manifestResult);
          return this.loadScriptsAndStyles(scripts, styles, app.loadSerial);
        }),
      );
    } else {
      const { scripts, styles } = getScriptsAndStylesFullPaths(app);
      return this.loadScriptsAndStyles(scripts, styles, app.loadSerial);
    }
  }

  loadManifest(url: string): Observable<{ [key: string]: string }> {
    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      }),
    );
  }
}
