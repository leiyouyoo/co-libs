export default `import { NgModule } from '@angular/core';

// #region all modules
import { AvatarListModule } from '@co/cbc/avatar-list';
import { CountDownModule } from '@co/cbc/count-down';
import { DatePickerModule } from '@co/cbc/date-picker';
import { DownFileModule } from '@co/cbc/down-file';
import { EllipsisModule } from '@co/cbc/ellipsis';
import { ErrorCollectModule } from '@co/cbc/error-collect';
import { ExceptionModule } from '@co/cbc/exception';
import { FooterToolbarModule } from '@co/cbc/footer-toolbar';
import { FullContentModule } from '@co/cbc/full-content';
import { GlobalFooterModule } from '@co/cbc/global-footer';
import { ImageModule } from '@co/cbc/image';
import { LoadingModule } from '@co/cbc/basic/loading';
import { LodopModule } from '@co/cbc/basic/lodop';
import { NoticeIconModule } from '@co/cbc/basic/notice-icon';
import { NumberToChineseModule } from '@co/cbc/number-to-chinese';
import { PageHeaderModule } from '@co/cbc/page-header';
import { QRModule } from '@co/cbc/qr';
import { QuickMenuModule } from '@co/cbc/quick-menu';
import { ResultModule } from '@co/cbc/result';
import { ReuseTabModule } from '@co/cbc/reuse-tab';
import { SEModule } from '@co/cbc/basic/se';
import { SGModule } from '@co/cbc/sg';
import { SidebarNavModule } from '@co/cbc/sidebar-nav';
import { STModule } from '@co/cbc/basic/st';
import { SVModule } from '@co/cbc/sv';
import { TagSelectModule } from '@co/cbc/tag-select';
import { MediaModule } from '@co/cbc/basic/media';
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

@NgModule({ exports: MODULES })
export class DemoDelonABCModule {}
`;
