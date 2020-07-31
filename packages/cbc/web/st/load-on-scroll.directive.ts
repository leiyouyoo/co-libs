import { Directive, ElementRef, NgZone, OnInit } from '@angular/core';
import { STComponent } from './st.component';
import { fromEvent, interval } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: 'co-st[loadOnScroll]',
})
export class LoadOnScrollDirective implements OnInit {
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
          fromEvent(tbodyContainer, 'scroll')
            .pipe(
              debounceTime(50),
            )
            .subscribe(e => {
              console.log(e);
            })
          this.status = 'set';
        });
    });
  }
}
