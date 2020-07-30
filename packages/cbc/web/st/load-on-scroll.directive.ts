import { Directive, ElementRef, NgZone, OnInit } from '@angular/core';
import { STComponent } from './st.component';
import { interval } from 'rxjs';

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
            (<HTMLElement>this.el.nativeElement).querySelector('.ant-table-body');
          if (!tbodyContainer) return;
          sub$.unsubscribe();
          tbodyContainer.addEventListener('scroll', (e) => {
            console.log(e);
          });
          this.status = 'set';
        });
    });
  }
}
