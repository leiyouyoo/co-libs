import { ChangeDetectionStrategy, Component, ElementRef, Host, OnInit, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { SEContainerComponent } from './se-container.component';

@Component({
  selector: 'co-se-title, [co-se-title]',
  exportAs: 'soSeTitle',
  template: '<ng-content></ng-content>',
  host: {
    '[class.se__title]': 'true',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SETitleComponent implements OnInit {
  private el: HTMLElement;
  constructor(
    @Host()
    @Optional()
    private parent: SEContainerComponent,
    el: ElementRef,
    private ren: Renderer2,
  ) {
    if (parent == null) {
      throw new Error(`[co-se-title] must include 'co-se-container' component`);
    }
    this.el = el.nativeElement;
  }

  private setClass() {
    const { gutter } = this.parent;
    const { el } = this;
    this.ren.setStyle(el, 'padding-left', `${gutter / 2}px`);
    this.ren.setStyle(el, 'padding-right', `${gutter / 2}px`);
  }

  ngOnInit() {
    this.setClass();
  }
}
