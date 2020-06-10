import { NgModule } from '@angular/core';
import { warnDeprecation } from '@co/core';

// #region all modules
import { AvatarListModule } from '@co/cbc/basic/avatar-list';
import { CountDownModule } from '@co/cbc/basic/count-down';
import { DatePickerModule } from '@co/cbc/basic/date-picker';
import { DownFileModule } from '@co/cbc/basic/down-file';
import { EllipsisModule } from '@co/cbc/basic/ellipsis';
import { ErrorCollectModule } from '@co/cbc/basic/error-collect';
import { ExceptionModule } from '@co/cbc/basic/exception';
import { FooterToolbarModule } from '@co/cbc/basic/footer-toolbar';
import { FullContentModule } from '@co/cbc/basic/full-content';
import { GlobalFooterModule } from '@co/cbc/basic/global-footer';
import { ImageModule } from '@co/cbc/basic/image';
import { LoadingModule } from '@co/cbc/basic/loading';
import { LodopModule } from '@co/cbc/basic/lodop';
import { MediaModule } from '@co/cbc/basic/media';
import { NoticeIconModule } from '@co/cbc/basic/notice-icon';
import { NumberToChineseModule } from '@co/cbc/basic/number-to-chinese';
import { PageHeaderModule } from '@co/cbc/basic/page-header';
import { QRModule } from '@co/cbc/basic/qr';
import { QuickMenuModule } from '@co/cbc/basic/quick-menu';
import { ResultModule } from '@co/cbc/basic/result';
import { ReuseTabModule } from '@co/cbc/basic/reuse-tab';
import { SEModule } from '@co/cbc/basic/se';
import { SGModule } from '@co/cbc/basic/sg';
import { SidebarNavModule } from '@co/cbc/basic/sidebar-nav';
import { STModule } from '@co/cbc/basic/st';
import { SVModule } from '@co/cbc/basic/sv';
import { TagSelectModule } from '@co/cbc/basic/tag-select';
import { XlsxModule } from '@co/cbc/basic/xlsx';
import { ZipModule } from '@co/cbc/basic/zip';

const MODULES = [
  ErrorCollectModule,
  FooterToolbarModule,
  SidebarNavModule,
  DownFileModule,
  ImageModule,
  AvatarListModule,
  EllipsisModule,
  GlobalFooterModule,
  ExceptionModule,
  NoticeIconModule,
  PageHeaderModule,
  ResultModule,
  TagSelectModule,
  CountDownModule,
  STModule,
  ReuseTabModule,
  FullContentModule,
  XlsxModule,
  ZipModule,
  NumberToChineseModule,
  LodopModule,
  QuickMenuModule,
  QRModule,
  SVModule,
  SEModule,
  SGModule,
  DatePickerModule,
  LoadingModule,
  MediaModule,
];

/**
 * @deprecated Use secondary entry eg: `import { STModule } from 'ng-zorro-antd/st';`.
 */
@NgModule({ exports: MODULES })
export class CoBasicCompoentsModule {
  constructor() {
    warnDeprecation(
      "The `DeloncbcModule` has been deprecated and will be removed in 10.0.0. Please use secondary entry instead.\ne.g. `import { STModule } from 'ng-zorro-antd/st';`",
    );
  }
}
