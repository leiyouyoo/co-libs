import { AfterViewInit, Directive, ElementRef, Input, NgZone, OnChanges, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { InputBoolean } from '@co/core';

declare var Masonry: any;

@Directive({
  selector: '[co-masonry]',
  exportAs: 'coMasonry',
})
export class CoMasonryDirective implements AfterViewInit, OnChanges, OnDestroy {
  private masonry: any;
  private observer: MutationObserver;
  private resize$: Subscription | null = null;

  @Input('co-masonry')
  options: any;

  @Input()
  @InputBoolean()
  disabled = false;

  constructor(private el: ElementRef, private zone: NgZone) { }

  private outsideRender(cb: () => void) {
    this.zone.runOutsideAngular(() => cb());
  }

  init() {
    this.destroy();
    this.outsideRender(() => {
      this.masonry = new Masonry(this.el.nativeElement, {
        originLeft: true,
        transitionDuration: '0.3s',
        itemSelector: '.co-masonry__thm',
        columnWidth: '.co-masonry__sizer',
        ...this.options,
      });
    });
  }

  reload() {
    this.outsideRender(() => {
      if (this.disabled) {
        return;
      }
      this.masonry.reloadItems();
      this.masonry.layout();
    });
  }

  private destroy() {
    this.zone.runOutsideAngular(() => {
      if (this.masonry) {
        this.masonry.destroy();
      }
    });
  }

  private initElChange() {
    if (this.observer || typeof MutationObserver === 'undefined') {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.observer = new MutationObserver(() => this.reload());
      this.observer.observe(this.el.nativeElement, {
        childList: true,
        subtree: true,
      });
    });
  }

  ngAfterViewInit() {
    this.initElChange();
    this.resize$ = fromEvent(window, 'resize')
      .pipe(debounceTime(50))
      .subscribe(() => this.reload());
  }

  ngOnChanges() {
    this.init();
  }

  ngOnDestroy() {
    this.destroy();
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.resize$) {
      this.resize$.unsubscribe();
    }
  }
}
