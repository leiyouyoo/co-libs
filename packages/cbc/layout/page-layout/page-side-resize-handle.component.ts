import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Host, HostListener, Inject, Input, OnInit, Optional, Renderer2, ViewEncapsulation } from '@angular/core';

import { getEventWithPoint } from 'ng-zorro-antd/resizable';
import { ensureInBounds } from 'ng-zorro-antd';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
import { PageSideComponent } from './page-side.component';

@Component({
  selector: 'co-page-side-resize-handle',
  template: `
    <i nz-icon nzType="caret-left" nzTheme="outline" class="co-page-side-resize-handle-pointer"></i>
  `,
  host: {
    '[class.co-page-side-resize-handle]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PageSideResizeHandleComponent implements OnInit, AfterViewInit {

  @Input() coMaxHeight?: number;
  @Input() coMaxWidth?: number;
  @Input() coMinHeight: number = 10;
  @Input() coMinWidth: number = 10;

  handleMouseDown$ = new Subject<MouseEvent>();
  resizing = false;
  private HostEl!: HTMLElement;
  private elRect!: ClientRect | DOMRect;
  private currentHandleEvent: MouseEvent | null = null;
  private handleId = -1;

  constructor(@Optional() @Host() private parent: PageSideComponent, private renderer: Renderer2,
              private elementRef: ElementRef<HTMLElement>, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.HostEl = this.parent.elementRef.nativeElement;
    this.initHostElStyle();
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(mouseEvent) {
    this.resizing = true;
    this.currentHandleEvent = mouseEvent;
    this.elRect = this.HostEl.getBoundingClientRect();
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseup(mouseEvent) {
    this.resizing = false;
    this.currentHandleEvent = null;
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove(mouseEvent) {
    if (!this.resizing) {
      return;
    }
    let newWidth: number;
    let newHeight: number;
    let maxWidth: number;
    let maxHeight: number;

    let minWidth = this.coMinWidth;
    let boundWidth = Infinity;
    let boundHeight = Infinity;
    const parent = this.renderer.parentNode(this.HostEl);
    if (parent instanceof HTMLElement) {
      const parentRect = parent.getBoundingClientRect();
      boundWidth = parentRect.width;
      boundHeight = parentRect.height;
    }
    maxWidth = ensureInBounds(this.coMaxWidth!, boundWidth);
    maxHeight = ensureInBounds(this.coMaxHeight!, boundHeight);

    const elRect = this.elRect;
    const resizeEvent = getEventWithPoint(mouseEvent);
    const handleEvent = getEventWithPoint(this.currentHandleEvent!);
    let width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
    let height = elRect.height;
    newWidth = Math.min(Math.max(width, minWidth), maxWidth);
    newHeight = Math.min(Math.max(height, this.coMinHeight), maxHeight);
    // console.log(newWidth);
    cancelAnimationFrame(this.handleId);
    this.handleId = requestAnimationFrame(() => {
      this.parent.width = newWidth!;
      // this.parent.height = newHeight!;
    });
  }

  private initHostElStyle(): void {
    this.renderer.setStyle(this.HostEl, 'flex-shrink', '0');
    const computedStyle = getComputedStyle(this.HostEl);
    if (computedStyle.position === 'static' || !computedStyle.position) {
      this.renderer.setStyle(this.HostEl, 'position', 'relative');
    }
    const rect = this.HostEl.getBoundingClientRect();
    if (rect.width === 0) {
      this.parent.width = this.coMinWidth;
    }
  }

}
