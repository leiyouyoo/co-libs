import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { LocaleData } from '@co/common';
import { NoticeIconSelect, NoticeItem } from './notice-icon.types';

@Component({
  selector: 'co-notice-icon-tab',
  exportAs: 'coNoticeIconTab',
  templateUrl: './notice-icon-tab.component.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class CoNoticeIconTabComponent {
  @Input() locale: LocaleData = {};
  @Input() data: NoticeItem;
  @Output() readonly select = new EventEmitter<NoticeIconSelect>();
  @Output() readonly clear = new EventEmitter<string>();

  onClick(item: NoticeItem) {
    this.select.emit({ title: this.data.title, item });
  }

  onClear() {
    this.clear.emit(this.data.title);
  }
}
