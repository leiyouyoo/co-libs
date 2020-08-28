import { getPlatform, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CoEvent, coEventType } from './types';

export interface IEventService {
  onEvent<T = any>(eventType: coEventType): Observable<T>;

  publish<T>(eventType: coEventType, value?: T): void;

  publish<T>(event: CoEvent<T> | { type: coEventType; value: T }): void;
}

@Injectable({
  providedIn: 'platform',
})
export class EventService implements IEventService {
  private readonly subject = new Subject<CoEvent>();
  private readonly observable$ = this.subject.asObservable();

  constructor() {}

  onEvent<T = any>(eventType: coEventType): Observable<T> {
    return this.observable$.pipe(
      filter((event) => event.type === eventType),
      map((event) => <T>event.value),
    );
  }

  publish<T>(eventType: coEventType, value?: T): void;
  publish<T>(event: CoEvent<T> | { type: coEventType; value: T }): void;
  publish<T>(eventVar: any, value?: T): void {
    let event;
    if (typeof eventVar === 'object' && (eventVar instanceof CoEvent || Reflect.has(eventVar, 'type'))) {
      event = eventVar;
    } else {
      event = new CoEvent(eventVar, value);
    }
    this.subject.next(event);
  }
}

let eventService: EventService;
export const getEventService = () => {
  if (!eventService) {
    const platformRef = getPlatform();
    eventService = platformRef.injector.get(EventService);
    if (!eventService) {
      throw new Error('找不到EventService服务');
    }
  }
  return eventService;
};
