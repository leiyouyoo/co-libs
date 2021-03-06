import { Directive, DoCheck, ElementRef, Host, Input, OnInit, Renderer2 } from '@angular/core';
import { getBottomEmptyRow } from './utils';
import { NgxWidgetGridComponent } from '@co/cbc/web/ngx-widget-grid';

@Directive({
  selector: 'ngx-widget-grid',
  host: {
  },
})
export class WidgetGridResizeDirective implements OnInit, DoCheck {
  @Input() set showGrid(val: boolean) {
    const obstructions = this.host.gridRenderer.obstructions;
    if (val) {
      // this.host.rows++;
      // this.host.rows++;
    } else {
      const emptyRow = getBottomEmptyRow(this.host)
      if ((this.host.rows - emptyRow) > 0) {
        this.host.rows = this.host.rows - emptyRow;
      }
    }
  }
  el: HTMLElement;

  constructor(@Host() public host: NgxWidgetGridComponent,
              public elRef: ElementRef,
              private renderer2: Renderer2,
              ) {
    this.el = this.elRef.nativeElement;
    this.host.rows = 4;
  }

  ngOnInit(): void {
    console.log(this.host);
    console.log(this.el);
  }

  ngDoCheck() {
    this.renderer2.setStyle(this.el, 'height', (this.el.clientWidth / 4) * this.host.rows + 'px')
  }
}
