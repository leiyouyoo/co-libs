import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';

export interface MouseFocusOptions {
  delay?: number;
  itemSelector?: string;
  actionClassName?: string;
}

@Directive({
  selector: `[co-mouse-focus]`,
  exportAs: `coMouseFocus`,
})
export class CoMouseFocusDirective implements AfterViewInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  private _cog: MouseFocusOptions;
  private _curEl: HTMLElement | null = null;

  @Input('co-mouse-focus')
  set config(value: MouseFocusOptions) {
    this._cog = {
      delay: 250,
      itemSelector: 'li',
      actionClassName: 'active',
      ...value,
    };
  }

  constructor(private el: ElementRef) {
    this.config = {};
  }

  ngAfterViewInit(): void {
    const { el, unsubscribe$, _cog } = this;
    let { _curEl } = this;
    const parentEl = el.nativeElement as HTMLElement;
    fromEvent(parentEl, 'mouseover')
      .pipe(takeUntil(unsubscribe$), auditTime(_cog.delay || 0))
      .subscribe((e: any) => {
        const target = (e.target as HTMLElement).closest(_cog.itemSelector || 'select') as HTMLElement;
        if (!target || !parentEl.contains(target)) {
          return;
        }

        if (_curEl) {
          _curEl.classList.remove(_cog.actionClassName || '');
        }
        target.classList.add(_cog.actionClassName || '');
        _curEl = target;
      });
    _curEl = parentEl.querySelector('.' + _cog.actionClassName) || null;
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
