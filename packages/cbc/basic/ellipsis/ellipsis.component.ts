import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  NgZone,
  OnChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { take } from 'rxjs/operators';

import { InputBoolean, InputNumber } from '@co/core';

/**
 * 文本过长自动处理省略号组件
 */
@Component({
  selector: 'co-ellipsis',
  exportAs: 'coEllipsis',
  templateUrl: './ellipsis.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CoEllipsisComponent implements AfterViewInit, OnChanges {
  //#region 私有变量

  // tslint:disable-next-line:no-string-literal
  private isSupportLineClamp = this.doc.body.style['webkitLineClamp'] !== undefined;
  @ViewChild('orgEl', { static: false }) private orgEl: ElementRef;
  @ViewChild('shadowOrgEl', { static: false }) private shadowOrgEl: ElementRef;
  @ViewChild('shadowTextEl', { static: false }) private shadowTextEl: ElementRef;
  private inited = false;
  orgHtml: SafeHtml;
  type = 'default';
  cls = {};
  text = '';
  targetCount = 0;

  //#endregion

  // #region 输入输出参数

  @Input() @InputBoolean() tooltip = false;
  @Input() @InputNumber(null) length: number;
  @Input() @InputNumber(null) lines: number;
  @Input() @InputBoolean() fullWidthRecognition = false;
  @Input() tail = '...';

  // #endregion

  constructor(
    private el: ElementRef,
    private ngZone: NgZone,
    private dom: DomSanitizer,
    @Inject(DOCUMENT) private doc: Document,
    private cdr: ChangeDetectorRef,
  ) { }

  //#region 生命周期钩子

  ngAfterViewInit(): void {
    this.inited = true;
    this.refresh();
  }

  ngOnChanges(): void {
    if (this.inited) {
      this.refresh();
    }
  }

  //#endregion

  //#region 公共属性方法

  get linsWord(): string {
    const { targetCount, text, tail } = this;
    return (targetCount > 0 ? text.substring(0, targetCount) : '') + (targetCount > 0 && targetCount < text.length ? tail : '');
  }

  refresh(): void {
    this.genType();
    const { type, dom, orgEl, cdr } = this;
    const html = orgEl.nativeElement.innerHTML;
    this.orgHtml = dom.bypassSecurityTrustHtml(html);
    cdr.detectChanges();
    this.executeOnStable(() => {
      this.gen();
      if (type !== 'line') {
        const el = this.getEl('.co-ellipsis');
        if (el) {
          el.innerHTML = html;
        }
      }
    });
  }

  //#endregion

  //#region 私有方法

  private getStrFullLength(str: string): number {
    return str.split('').reduce((pre, cur) => {
      const charCode = cur.charCodeAt(0);
      if (charCode >= 0 && charCode <= 128) {
        return pre + 1;
      }
      return pre + 2;
    }, 0);
  }

  private cutStrByFullLength(str: string, maxLength: number) {
    let showLength = 0;
    return str.split('').reduce((pre, cur) => {
      const charCode = cur.charCodeAt(0);
      if (charCode >= 0 && charCode <= 128) {
        showLength += 1;
      } else {
        showLength += 2;
      }
      if (showLength <= maxLength) {
        return pre + cur;
      }
      return pre;
    }, '');
  }

  private bisection(targetHeight: number, mid: number, begin: number, end: number, text: string, node: HTMLElement): number {
    const suffix = this.tail;
    node.innerHTML = text.substring(0, mid) + suffix;
    let sh = node.offsetHeight;

    if (sh <= targetHeight) {
      node.innerHTML = text.substring(0, mid + 1) + suffix;
      sh = node.offsetHeight;
      if (sh > targetHeight || mid === begin) {
        return mid;
      }
      begin = mid;
      mid = end - begin === 1 ? begin + 1 : Math.floor((end - begin) / 2) + begin;
      return this.bisection(targetHeight, mid, begin, end, text, node);
    }
    if (mid - 1 < 0) {
      return mid;
    }
    node.innerHTML = text.substring(0, mid - 1) + suffix;
    sh = node.offsetHeight;
    if (sh <= targetHeight) {
      return mid - 1;
    }
    end = mid;
    mid = Math.floor((end - begin) / 2) + begin;
    return this.bisection(targetHeight, mid, begin, end, text, node);
  }

  private genType() {
    const { lines, length, isSupportLineClamp } = this;
    this.cls = {
      ellipsis: true,
      ellipsis__lines: lines && !isSupportLineClamp,
      'co-ellipsis__line-clamp': lines && isSupportLineClamp,
    };
    if (!lines && !length) {
      this.type = 'default';
    } else if (!lines) {
      this.type = 'length';
    } else if (isSupportLineClamp) {
      this.type = 'line-clamp';
    } else {
      this.type = 'line';
    }
  }

  private gen() {
    const { type, lines, length, fullWidthRecognition, tail, orgEl, cdr, ngZone } = this;
    if (type === 'length') {
      const el = orgEl.nativeElement as HTMLElement;
      if (el.children.length > 0) {
        throw new Error('Ellipsis content must be string.');
      }
      const lengthText = el.textContent!;
      const textLength = fullWidthRecognition ? this.getStrFullLength(lengthText) : lengthText.length;
      if (textLength <= length || length < 0) {
        this.text = lengthText;
      } else {
        let displayText: string;
        if (length - tail.length <= 0) {
          displayText = '';
        } else {
          displayText = fullWidthRecognition ? this.cutStrByFullLength(lengthText, length) : lengthText.slice(0, length);
        }
        this.text = displayText + tail;
      }
      ngZone.run(() => cdr.detectChanges());
    } else if (type === 'line') {
      const { shadowOrgEl, shadowTextEl } = this;
      const orgNode = shadowOrgEl.nativeElement as HTMLElement;
      const lineText = orgNode.innerText || orgNode.textContent!;
      const lineHeight = parseInt(getComputedStyle(this.getEl('.co-ellipsis')).lineHeight!, 10);
      const targetHeight = lines * lineHeight;
      this.getEl('.co-ellipsis__handle').style.height = `${targetHeight}px`;

      if (orgNode.offsetHeight <= targetHeight) {
        this.text = lineText;
        this.targetCount = lineText.length;
      } else {
        // bisection
        const len = lineText.length;
        const mid = Math.ceil(len / 2);

        const count = this.bisection(targetHeight, mid, 0, len, lineText, shadowTextEl.nativeElement.firstChild);
        this.text = lineText;
        this.targetCount = count;
      }
      ngZone.run(() => cdr.detectChanges());
    }
  }

  private getEl(cls: string): HTMLElement {
    return this.el.nativeElement.querySelector(cls);
  }

  private executeOnStable(fn: () => void): void {
    if (this.ngZone.isStable) {
      fn();
    } else {
      this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(fn);
    }
  }

  //#endregion
}
