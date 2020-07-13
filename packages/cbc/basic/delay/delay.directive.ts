import { AfterViewInit, ContentChild, Directive, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { InputBoolean, InputNumber } from '@co/core';

@Directive({
  selector: '[coDelay]:not([coNoDelay])',
  exportAs: 'coDelay',
})
export class CoDelayDirective implements AfterViewInit, OnDestroy {
  private data$: Subscription | undefined;
  private firstEmit: boolean;

  @ContentChild(NgModel, { static: false }) private readonly ngModel!: NgModel;

  @Input() @InputNumber() delayTime = 500;
  @Input() @InputBoolean() delayFirstEmit = false;
  @Output() readonly delayChange = new EventEmitter<any>();

  ngAfterViewInit(): void {
    const { ngModel, delayFirstEmit, delayTime, delayChange } = this;
    if (ngModel == null) {
      return;
    }

    this.firstEmit = delayFirstEmit;
    this.data$ = ngModel.valueChanges?.pipe(debounceTime(delayTime), distinctUntilChanged()).subscribe((res) => {
      if (this.firstEmit === false) {
        this.firstEmit = true;
        return;
      }
      delayChange.emit(res);
    });
  }

  ngOnDestroy(): void {
    if (this.data$) {
      this.data$.unsubscribe();
    }
  }
}
