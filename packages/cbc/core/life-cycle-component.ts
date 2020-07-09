import {Observable, Subject} from "rxjs";
import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	DoCheck,
	OnChanges,
	OnDestroy,
	OnInit,
	SimpleChanges
} from "@angular/core";
import {take, takeUntil} from "rxjs/operators";

const onChangesKey = Symbol('onChanges');
const onInitKey = Symbol('onInit');
const doCheckKey = Symbol('doCheck');
const afterContentInitKey = Symbol('afterContentInit');
const afterContentCheckedKey = Symbol('afterContentChecked');
const afterViewInitKey = Symbol('afterViewInit');
const afterViewCheckedKey = Symbol('afterViewChecked');
const onDestroyKey = Symbol('onDestroy');

export abstract class LifeCycleComponent implements OnChanges, OnInit, DoCheck,
	AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
	// 所有observables将在组件销毁时完成
	protected get onChanges$(): Observable<SimpleChanges> {
		return this.getObservable(onChangesKey).pipe(takeUntil(this.onDestroy$));
	}

	protected get onInit$(): Observable<void> {
		return this.getObservable(onInitKey).pipe(takeUntil(this.onDestroy$), take(1));
	}

	protected get doCheck$(): Observable<void> {
		return this.getObservable(doCheckKey).pipe(takeUntil(this.onDestroy$));
	}

	protected get afterContentInit$(): Observable<void> {
		return this.getObservable(afterContentInitKey).pipe(takeUntil(this.onDestroy$), take(1));
	}

	protected get afterContentChecked$(): Observable<void> {
		return this.getObservable(afterContentCheckedKey).pipe(takeUntil(this.onDestroy$));
	}

	protected get afterViewInit$(): Observable<void> {
		return this.getObservable(afterViewInitKey).pipe(takeUntil(this.onDestroy$), take(1));
	}

	protected get afterViewChecked$(): Observable<void> {
		return this.getObservable(afterViewCheckedKey).pipe(takeUntil(this.onDestroy$));
	}

	protected get onDestroy$(): Observable<void> {
		return this.getObservable(onDestroyKey).pipe(take(1));
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.emit(onChangesKey, changes);
	}

	ngOnInit(): void {
		this.emit(onInitKey);
	}

	ngDoCheck(): void {
		this.emit(doCheckKey);
	}

	ngAfterContentInit(): void {
		this.emit(afterContentInitKey);
	}

	ngAfterContentChecked(): void {
		this.emit(afterContentCheckedKey);
	}

	ngAfterViewInit(): void {
		this.emit(afterViewInitKey);
	}

	ngAfterViewChecked(): void {
		this.emit(afterViewCheckedKey);
	}

	ngOnDestroy(): void {
		this.emit(onDestroyKey);
	}

	private getObservable(key: symbol): Observable<any> {
		return (this[key] || (this[key] = new Subject<any>())).asObservable();
	}

	private emit(key: symbol, value?: any): void {
		const subject = this[key];
		if (!subject) {
			return;
		}
		subject.next(value);
	}
}
