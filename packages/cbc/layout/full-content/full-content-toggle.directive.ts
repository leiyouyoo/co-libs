import { Directive } from '@angular/core';
import { FullContentComponent } from './full-content.component';

@Directive({
  selector: '[co-full-toggle]',
  exportAs: 'coFullToggle',
  host: {
    '(click)': 'onClick()',
  },
})
export class FullContentToggleDirective {
  constructor(private parent: FullContentComponent) {}

  onClick() {
    this.parent.toggle();
  }
}
