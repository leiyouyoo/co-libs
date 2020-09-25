import { Directive, Host, OnInit } from '@angular/core';
import { NzResizableDirective } from 'ng-zorro-antd/resizable';

@Directive({
  selector: 'th[nz-resizable]',
})
export class FixNzResizableDirective implements OnInit {

  constructor(@Host() private nzResizableDirective: NzResizableDirective,
  ) {
  }

  ngOnInit() {
    this.nzResizableDirective.setPosition = () => {
      const nzResizableDirective: any = this.nzResizableDirective;
      const position = nzResizableDirective.el.style.position || getComputedStyle(nzResizableDirective.el).position;
      if (position === 'static' || !position) {
        nzResizableDirective.renderer.setStyle(nzResizableDirective.el, 'position', 'relative');
      }
    }
  }
}
