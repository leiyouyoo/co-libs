import { NgModule } from '@angular/core';

// #region all modules
import { CoDatePickerModule } from './date-picker';
import { CoDatetimeRangePickerModule } from './datetime-range-picker';
import { CoDelayModule } from './delay';
import { CoEllipsisModule } from './ellipsis';
import { CoImageModule } from './image';
import { CoLoadingModule } from './loading';
import { CoMasonryModule } from './masonry';
import { CoMouseFocusModule } from './mouse-focus';
import { CoNoticeIconModule } from './notice-icon';
import { CoScrollbarModule } from './scrollbar';
import { CoStatusLabelModule } from './status-label';

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
  CoStatusLabelModule,
];

/**
 * 基础组件模块
 */
@NgModule({ exports: MODULES })
export class CoBasicCompoentsModule {
  constructor() {}
}
