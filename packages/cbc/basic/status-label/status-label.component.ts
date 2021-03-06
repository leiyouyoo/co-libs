import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { InputBoolean } from '@co/core';

@Component({
  selector: 'co-status-label, [co-status-label]',
  template: ` <i *ngIf="icon" nz-icon class="pr-xs"></i>{{ text }}<ng-content></ng-content> `,
  host: {
    '[class.text-success]': `_t=='success'`,
    '[class.text-error]': `_t=='error'`,
    '[class.text-orange]': `_t=='warning'`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoStatusLabelComponent implements OnChanges {
  _t: string;

  iconType: string;

  @Input()
  set type(v: 'success' | 'error' | 'warning') {
    let iconType;
    switch (v) {
      case 'success':
        iconType = 'check-circle';
        break;
      case 'error':
        iconType = 'close-circle';
        break;
      case 'warning':
      default:
        iconType = 'exclamation-circle';
        break;
    }
    this._t = v;
    this.iconType = iconType;
  }

  @Input() @InputBoolean() icon = true;

  @Input() text: string;

  constructor(private cdr: ChangeDetectorRef) {
    this.type = 'success';
  }

  ngOnChanges() {
    this.cdr.detectChanges();
  }
}
