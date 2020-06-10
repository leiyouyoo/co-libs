import { Injectable, NgZone } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface MicroserviceDispatcherEvent {
  name: string;
  payload: any;
}

declare const window: any;
const CUSTOM_EVENT_NAME = 'CMS_EVENT_DISPATCHER';

@Injectable({
  providedIn: 'root'
})
export class CmsEventDispatcher {
  private subject$: Subject<MicroserviceDispatcherEvent> = new Subject();

  private hasAddGlobalEventListener = false;

  private subscriptionCount = 0;

  private globalEventListener = (event: CustomEvent) => {
    this.subject$.next(event.detail);
  };

  private addGlobalEventListener() {
    this.hasAddGlobalEventListener = true;
    window.addEventListener(CUSTOM_EVENT_NAME, this.globalEventListener);
  }

  private removeGlobalEventListener() {
    this.hasAddGlobalEventListener = false;
    window.removeEventListener(CUSTOM_EVENT_NAME, this.globalEventListener);
  }

  constructor(private ngZone: NgZone) { }

  dispatch<TPayload>(name: string, payload?: TPayload) {
    window.dispatchEvent(
      new CustomEvent(CUSTOM_EVENT_NAME, {
        detail: {
          name,
          payload
        }
      })
    );
  }

  register<T>(eventName: string): Observable<T> {
    return new Observable(observer => {
      if (!this.hasAddGlobalEventListener) {
        this.addGlobalEventListener();
      }
      this.subscriptionCount++;
      const subscription = this.subject$
        .pipe(
          filter(event => {
            return event.name === eventName;
          }),
          map(event => {
            return event.payload;
          })
        )
        .subscribe(payload => {
          this.ngZone.run(() => {
            observer.next(payload);
          });
        });
      return () => {
        this.subscriptionCount--;
        subscription.unsubscribe();
        if (!this.subscriptionCount) {
          this.removeGlobalEventListener();
        }
      };
    });
  }

  getSubscriptionCount() {
    return this.subscriptionCount;
  }
}
