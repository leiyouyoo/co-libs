export default `import { NgModule } from '@angular/core';

// #region all modules
import { DatePickerModule } from '@co/cbc/date-picker';
import { EllipsisModule } from '@co/cbc/ellipsis';
import { FullContentModule } from '@co/cbc/full-content';
import { ImageModule } from '@co/cbc/image';
import { LoadingModule } from '@co/cbc/basic/loading';
import { NoticeIconModule } from '@co/cbc/basic/notice-icon';
import { PageHeaderModule } from '@co/cbc/page-header';
import { ReuseTabModule } from '@co/cbc/reuse-tab';
import { SidebarNavModule } from '@co/cbc/sidebar-nav';
import { SVModule } from '@co/cbc/sv';
import { TagSelectModule } from '@co/cbc/tag-select';
import { MediaModule } from '@co/cbc/basic/media';
import { XlsxModule } from '@co/cbc/basic/xlsx';
import { ZipModule } from '@co/cbc/basic/zip';

const MODULES = [
  SidebarNavModule,
  ImageModule,
  EllipsisModule,
  NoticeIconModule,
  PageHeaderModule,
  ReuseTabModule,
  FullContentModule,
  DatePickerModule,
  LoadingModule
];

@NgModule({ exports: MODULES })
export class DemoDelonABCModule {}
`;
