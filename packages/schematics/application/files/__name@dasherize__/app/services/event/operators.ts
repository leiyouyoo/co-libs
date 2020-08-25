import { MonoTypeOperatorFunction, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CoEvent, coEventType } from './types';
import { getEventService } from './event.service';

export const coEmit: <T>(eventType: coEventType) => MonoTypeOperatorFunction<T> = <T>(eventType: coEventType) => {
  return (source: Observable<T>) => {
    return source.pipe(tap({
      next: value => {
        getEventService().publish(new CoEvent(eventType, value));
      },
    }));
  };
};
