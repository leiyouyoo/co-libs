import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppService } from '@core/app.service';
import { copy, deepCopy, CO_I18N_TOKEN } from '@co/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { CodeService } from '../../../core/code/code.service';
import { I18NService } from './../../../core/i18n/service';

@Component({
  selector: 'code-box',
  templateUrl: './code-box.component.html',
  host: {
    '[class.code-box]': 'true',
    '[class.expand]': 'expand',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeBoxComponent implements OnDestroy {
  private _item: any;
  private _orgItem: any;
  private destroy$ = new Subject();
  copied = false;
  theme = 'default';

  @Input()
  set item(value: any) {
    if (!this._orgItem) {
      this._orgItem = deepCopy(value);
    }
    const ret: any = {
      meta: value.meta,
      code: value.code.trim(),
      title: this.i18n.get(value.meta.title),
      summary: this.sanitizer.bypassSecurityTrustHtml(this.i18n.get(value.summary)),
      browser: +value.meta.browser > 0 ? +value.meta.browser : null,
      bg: value.meta.bg,
      urls: value.urls,
    };
    this._item = ret;
  }
  get item() {
    return this._item;
  }

  @Input() expand: boolean = false;

  constructor(
    private appService: AppService,
    @Inject(CO_I18N_TOKEN) private i18n: I18NService,
    private msg: NzMessageService,
    private codeSrv: CodeService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef,
  ) {
    this.appService.theme$.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.theme = data;
      this.check();
    });
    this.i18n.change
      .pipe(
        filter(() => !!this._orgItem),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        this.item.title = this.i18n.get(this._orgItem.meta.title);
        this.item.summary = this.i18n.get(this._orgItem.summary);
        this.check();
      });
  }

  check(): void {
    this.cdr.markForCheck();
  }

  handle() {
    this.expand = !this.expand;
    this.check();
  }

  openOnlineIDE(ide: 'StackBlitz' | 'CodeSandbox' = 'StackBlitz'): void {
    if (ide === 'StackBlitz') {
      this.codeSrv.openOnStackBlitz(this.item.code);
    } else {
      this.codeSrv.openOnCodeSandbox(this.item.code);
    }
  }

  onCopy(value: string) {
    copy(value).then(() => {
      this.msg.success(this.i18n.fanyi('app.demo.copied'));
      this.copied = true;
      this.check();
      setTimeout(() => {
        this.copied = false;
        this.check();
      }, 1000);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
