import {CoEvent, coEventType} from './types';
import {getEventService} from './event.service';
import {merge, Observable} from 'rxjs';
import "reflect-metadata";
import {coEmit} from './operators';
import {CO_EMITTER, CO_EVENT_PROPS_METADATA, CO_PUBLISHER, CO_SUBSCRIBER} from './constants';


export const CoSubscriber = (eventType: coEventType): MethodDecorator => {
	return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
		const subscribers: any[] = Reflect.getMetadata(CO_SUBSCRIBER, target, CO_EVENT_PROPS_METADATA) ?? [];
		subscribers.push({propertyKey, eventType});
		Reflect.defineMetadata(CO_SUBSCRIBER, subscribers, target, CO_EVENT_PROPS_METADATA);
		return descriptor;
	};
};

export const CoPublisher = (eventType: coEventType): MethodDecorator => {
	return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
		const publishers: any[] = Reflect.getMetadata(CO_PUBLISHER, target, CO_EVENT_PROPS_METADATA) ?? [];
		publishers.push({propertyKey, eventType});
		Reflect.defineMetadata(CO_PUBLISHER, publishers, target, CO_EVENT_PROPS_METADATA);
		return descriptor;
	};
};

export const CoEmitter = (eventType: coEventType | coEventType[]): PropertyDecorator => {
	return (target: any, propertyKey: string) => {
		const emitters: any[] = Reflect.getMetadata(CO_EMITTER, target, CO_EVENT_PROPS_METADATA) ?? [];
		const eventTypes = Array.isArray(eventType) ? eventType : [eventType];
		emitters.push(...(eventTypes.map(eventType => ({propertyKey, eventType}))));
		Reflect.defineMetadata(CO_EMITTER, emitters, target, CO_EVENT_PROPS_METADATA);
	};
};

export const CoEventHandler = (): <TFunction extends { new(...args: any[]): any }>(target: TFunction) => TFunction | void => {
	return <T extends { new(...args: any[]): any }>(constructor: T) => {
		const subscriptionsKey = Symbol('subscriptions');
		constructor.prototype[subscriptionsKey] = [];
		const ngOnInit = constructor.prototype.ngOnInit;
		constructor.prototype.ngOnInit = function () {
			const coEventService = getEventService();
			const publishers: any[] = Reflect.getMetadata(CO_PUBLISHER, this, CO_EVENT_PROPS_METADATA) ?? [];
			const subscribers: any[] = Reflect.getMetadata(CO_SUBSCRIBER, this, CO_EVENT_PROPS_METADATA) ?? [];
			const emitters: any[] = Reflect.getMetadata(CO_EMITTER, this, CO_EVENT_PROPS_METADATA) ?? [];
			publishers.forEach(({propertyKey, eventType}) => {
				const publisher: Function = this[propertyKey];
				this[propertyKey] = function (...args) {
					let result = publisher.call(this, ...args);
					if (result instanceof Observable) {
						result = result.pipe(coEmit(eventType));
					} else if (result instanceof Promise) {
						result = new Promise(resolve => {
							result.then(value => {
								resolve(value);
								coEventService.publish(new CoEvent(eventType, value));
							});
						});
					} else {
						coEventService.publish(new CoEvent(eventType, result));
					}
					return result;
				};
			});
			subscribers.forEach(({propertyKey, eventType}) => {
				const subscriber: Function = this[propertyKey];
				const subscription = coEventService.onEvent(eventType).subscribe(value => {
					if (Array.isArray(value)) {
						subscriber.call(this, ...value);
					} else {
						subscriber.call(this, value);
					}
				});
				this[subscriptionsKey].push(subscription);
			});
			emitters.forEach(({propertyKey, eventType}) => {
				const event = coEventService.onEvent(eventType);
				const emitter = Reflect.get(this, propertyKey);
				const ob = new Observable(subscriber => {
					this[subscriptionsKey].push(subscriber);
					return event.subscribe(subscriber);
				});
				if (emitter instanceof Observable) {
					Reflect.set(this, propertyKey, merge(emitter, ob));
				} else {
					Reflect.set(this, propertyKey, ob);
				}
			});
			ngOnInit && ngOnInit.call(this);
		};
		const ngOnDestroy = constructor.prototype.ngOnDestroy;
		constructor.prototype.ngOnDestroy = function () {
			ngOnDestroy && ngOnDestroy.call(this);
			this[subscriptionsKey].forEach(subscription => {
				if (typeof subscription === 'function') {
					subscription.call(this);
				} else if (typeof subscription === 'object' &&
					Reflect.has(subscription, 'unsubscribe') &&
					typeof subscription.unsubscribe === 'function') {
					subscription.unsubscribe();
				}
			});
		};
		return constructor;
	};
};
