import { NgModule } from '@angular/core';

// #region all modules
import { DatePickerModule } from '@co/cbc/basic/date-picker';
import { EllipsisModule } from '@co/cbc/basic/ellipsis';
import { ImageModule } from '@co/cbc/basic/image';
import { LoadingModule } from '@co/cbc/basic/loading';
import { NoticeIconModule } from '@co/cbc/basic/notice-icon';
import { DatetimeRangePickerModule } from '@co/cbc/basic/datetime-range-picker';

const MODULES = [ImageModule, EllipsisModule, NoticeIconModule, DatePickerModule, LoadingModule, DatetimeRangePickerModule];

/**
 * 基础组件模块
 */
@NgModule({ exports: MODULES })
export class CoBasicCompoentsModule {
  constructor() {
  }
}
