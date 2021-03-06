import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CoLocaleService, LocaleData } from '@co/common';
import { InputBoolean, InputNumber } from '@co/core';
import { Subscription } from 'rxjs';
import { NoticeIconSelect, NoticeItem } from './notice-icon.types';

@Component({
  selector: 'co-notice-icon',
  exportAs: 'coNoticeIcon',
  templateUrl: './notice-icon.component.html',
  host: { '[class.notice-icon__btn]': 'true' },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CoNoticeIconComponent implements OnInit, OnChanges, OnDestroy {
  private i18n$: Subscription;
  locale: LocaleData = {};

  @Input() data: NoticeItem[] = [];
  @Input() @InputNumber() count: number;
  @Input() @InputBoolean() loading = false;
  @Input() @InputBoolean() popoverVisible = false;
  @Input() btnClass = '';
  @Input() btnIconClass = '';
  @Output() readonly select = new EventEmitter<NoticeIconSelect>();
  @Output() readonly clear = new EventEmitter<string>();
  @Output() readonly popoverVisibleChange = new EventEmitter<boolean>();

  constructor(private i18n: CoLocaleService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.i18n$ = this.i18n.change.subscribe(() => {
      this.locale = this.i18n.getData('noticeIcon');
      this.cdr.markForCheck();
    });
  }

  ngOnChanges() {
    this.cdr.markForCheck();
  }

  ngOnDestroy() {
    this.i18n$.unsubscribe();
  }

  onVisibleChange(result: boolean) {
    this.popoverVisibleChange.emit(result);
  }

  onSelect(i: NoticeIconSelect) {
    this.select.emit(i);
  }

  onClear(title: string) {
    this.clear.emit(title);
  }
}
