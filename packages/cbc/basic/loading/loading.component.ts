import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { LoadingShowOptions } from './loading.types';

@Component({
  selector: 'co-loading-default',
  templateUrl: './loading.component.html',
  host: {
    '[class.co-loading-default]': 'true',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LoadingDefaultComponent {
  options: LoadingShowOptions;

  get icon() {
    return this.options.icon!;
  }

  get custom() {
    return this.options.custom!;
  }
}
