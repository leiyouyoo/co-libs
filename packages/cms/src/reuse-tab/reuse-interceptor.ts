import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Planet } from '../planet';
import { ReuseTabService } from './reuse-tab.service';

@Injectable()
export class ReuseTabInterceptor implements HttpInterceptor {
  constructor(private planet: Planet, private reuseTabService: ReuseTabService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          if (evt.body && evt.body.success) {
          }
        }
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.reuseTabService.clear(true);
            this.planet.clear();
          }
        }
        return throwError(err);
      }),
    );
  }
}
