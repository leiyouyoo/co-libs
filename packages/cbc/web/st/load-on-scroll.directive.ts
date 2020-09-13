import { Directive, ElementRef, Input, NgZone, OnInit } from '@angular/core';
import { STComponent } from './st.component';
import { fromEvent, interval, merge } from 'rxjs';
import { debounceTime, startWith } from 'rxjs/operators';

@Directive({
  selector: 'co-st[loadOnScroll]',
})
export class LoadOnScrollDirective implements OnInit {
  @Input() distance = 80;
  status: 'unset' | 'trying' | 'set' = 'unset';

  constructor(private st: STComponent,
              private el: ElementRef,
              private ngZone: NgZone,
  ) {
  }

  ngOnInit() {
    this.setListener();
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
              console.log(loadMore);
              if (!loadMore) return;
              await this.st.loadPageData({ singleLoading: true, appendData: true });
            })
          this.status = 'set';
        });
    });
  }
}
