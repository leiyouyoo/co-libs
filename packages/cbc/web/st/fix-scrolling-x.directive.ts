import { AfterViewInit, Directive, Input, OnDestroy } from '@angular/core';
import { NzTableComponent, NzTableInnerScrollComponent } from 'ng-zorro-antd';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { debounce } from '@co/core';
import { filter, takeUntil } from 'rxjs/operators';

@Directive({
  selector: 'nz-table[fixScrollingX]',
})
export class FixScrollingXDirective implements OnDestroy {
  @Input() set nzData(val: any[]) {
    this.setListener();
  }

  scrollSubscription: Subscription;
  destroy$ = new Subject();

  constructor(private nzTableComponent: NzTableComponent,
  ) {
  }

  @debounce(50)
  setListener() {
    this.scrollSubscription?.unsubscribe();
    const scrollComponent: NzTableInnerScrollComponent
      = this.nzTableComponent.nzTableInnerScrollComponent;
    const tbodyEl = scrollComponent?.tableBodyElement?.nativeElement;
    if (tbodyEl) {
      const scrollEvent$ = fromEvent<MouseEvent>(tbodyEl, 'scroll').pipe(takeUntil(this.destroy$));
      const scrollY$ = scrollEvent$.pipe(filter(() => !!scrollComponent.scrollY));
      this.scrollSubscription = scrollY$.subscribe(() => (scrollComponent.tableHeaderElement.nativeElement.scrollLeft = tbodyEl.scrollLeft));
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
