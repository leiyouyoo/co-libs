import { NgModule } from '@angular/core';

// #region all modules
import { CoDatePickerModule } from '@co/cbc/basic/date-picker';
import { CoDatetimeRangePickerModule } from '@co/cbc/basic/datetime-range-picker';
import { CoDelayModule } from '@co/cbc/basic/delay';
import { CoEditorModule } from '@co/cbc/basic/editor';
import { CoEllipsisModule } from '@co/cbc/basic/ellipsis';
import { CoImageModule } from '@co/cbc/basic/image';
import { CoLoadingModule } from '@co/cbc/basic/loading';
import { CoMasonryModule } from '@co/cbc/basic/masonry';
import { CoMouseFocusModule } from '@co/cbc/basic/mouse-focus';
import { CoNoticeIconModule } from '@co/cbc/basic/notice-icon';
import { CoScrollbarModule } from '@co/cbc/basic/scrollbar';
import { CoStatusLabelModule } from '@co/cbc/basic/status-label';

const MODULES = [
  CoImageModule,
  CoEllipsisModule,
  CoNoticeIconModule,
  CoDatePickerModule,
  CoLoadingModule,
  CoDatetimeRangePickerModule,
  CoDelayModule,
  CoMasonryModule,
  CoMouseFocusModule,
  CoScrollbarModule,
  CoEditorModule,
  CoStatusLabelModule,
];

/**
 * 基础组件模块
 */
@NgModule({ exports: MODULES })
export class CoBasicCompoentsModule {
  constructor() {}
}
