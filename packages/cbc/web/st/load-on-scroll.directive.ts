import { Directive, ElementRef, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { STComponent } from './st.component';
import { STChange } from './st.interfaces';
import { fromEvent, interval, merge, Subject } from 'rxjs';
import { debounceTime, startWith, takeUntil } from 'rxjs/operators';

@Directive({
  selector: 'co-st[loadOnScroll]',
})
export class LoadOnScrollDirective implements OnInit, OnDestroy {
  @Input() distance = 80;
  status: 'unset' | 'trying' | 'set' = 'unset';
  lastScroll = {
    scrollTop: 0,
    scrollLeft: 0,
  }
  private destroy$ = new Subject();

  constructor(private st: STComponent,
              private el: ElementRef,
              private ngZone: NgZone,
  ) {
  }

  ngOnInit() {
    this.setListener();
    this.setStLoadListener();
  }

  setStLoadListener() {
    this.st.change.pipe(takeUntil(this.destroy$)).subscribe((event: STChange) => {
      if (event.type === 'loaded' && !event.loaded?.length) {
        this.resetListener()
      }
    })
  }

  resetListener() {
    if (this.status !== 'set') return;
    this.status = 'unset';
    this.setListener()
  }

  setListener() {
    if (this.status !== 'unset') return;
    this.status = 'trying';
    this.ngZone.runOutsideAngular(() => {
      const sub$ = interval(5e2)
        .subscribe(() => {
          const tbodyContainer =
            (<HTMLElement>this.el.nativeElement).querySelector('.cdk-virtual-scroll-viewport');
          if (!tbodyContainer) return;
          sub$.unsubscribe();
          merge(
            fromEvent(tbodyContainer, 'scroll'),
            fromEvent(tbodyContainer, 'wheel'),
          ).pipe(
              debounceTime(100),
            )
            .subscribe(async (e: Event) => {
              const element = tbodyContainer;
              const loadMore = element.scrollHeight - element.clientHeight - element.scrollTop <= this.distance;
              const isScrollX = element.scrollLeft !== this.lastScroll.scrollLeft;
              this.lastScroll.scrollLeft = element.scrollLeft
              this.lastScroll.scrollTop = element.scrollTop
              if (!loadMore) return;
              if (isScrollX) return;
              await this.st.loadPageData({ singleLoading: true, appendData: true });
            })
          this.status = 'set';
        });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
