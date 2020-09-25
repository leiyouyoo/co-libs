import { Directive, Host, OnInit, Input, HostListener, NgZone, ElementRef } from '@angular/core';
import { STComponent } from './st.component';
import { STData } from './st.interfaces';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[stRowSelected]',
  host: {
    '[class.st-row-selected]': `data.checked || isRowActivated(data, index)`,
  },
})
export class StRowSelectedDirective implements OnInit {
  @Input('stRowSelected') data: STData;
  @Input('stRowSelectedIndex') index: number;

  get activatedRowKey() {
    return this.stComponent.activatedRowKey
  }

  get activatedRowValue(): any {
    return this.stComponent.activatedRowValue;
  }
  set activatedRowValue(value: any) {
    this.stComponent.activatedRowValue = value;
  }

  constructor(@Host() private stComponent: STComponent,
              private zone: NgZone,
              private elementRef: ElementRef,
              ) { }

  ngOnInit(): void {
    const el = this.elementRef.nativeElement as HTMLTableRowElement;
    this.zone.runOutsideAngular(() => {
      fromEvent<MouseEvent>(el, 'click', { capture: true, })
        .subscribe((event) => {
          if (event.shiftKey) {
            document.getSelection()?.removeAllRanges()
            event.stopPropagation();
            this.shiftClickSelectRange();
          } else {
            this.setRowActivatedValue()
          }
        })
    })
  }

  setRowActivatedValue() {
    const { data, index } = this
    const key = this.activatedRowKey;
    if (key === 'index') {
      this.activatedRowValue = index;
    } else if (data[key]) {
      this.activatedRowValue = data[key];
    }
  }

  shiftClickSelectRange() {
    const { _data: stData } = this.stComponent
    const { data, index, activatedRowKey: key, activatedRowValue } = this
    let activatedIndex!: number
    if (key === 'index') {
      if (typeof activatedRowValue !== 'number') return;
      activatedIndex = activatedRowValue;
    } else if (data[key]) {
      activatedIndex = stData.findIndex(o => o[key] === activatedRowValue)
    }
    if (!(activatedIndex >= 0)) return;

    /* may be 0, but doesn't matter */
    const step = this.index > activatedIndex ? 1 : -1;
    for (let i = 0; Math.abs(i) <= Math.abs(this.index - activatedIndex);) {
      stData[activatedIndex + i].checked = true;
      i += step;
    }
    this.zone.run(() => {
      this.stComponent._refCheck();
    })
  }

  isRowActivated(data: STData, index: number): boolean {
    const key = this.activatedRowKey;
    const value = this.activatedRowValue;
    if (key === 'index') {
      return index === value;
    } else {
      return !!data[key] && data[key] === value;
    }
  }
}
