import { ExceptionModule } from '@co/cbc/basic/exception';
import { GlobalFooterModule } from '@co/cbc/basic/global-footer';
import { NoticeIconModule } from '@co/cbc/basic/notice-icon';
import { PageHeaderModule } from '@co/cbc/page-header';
import { ResultModule } from '@co/cbc/basic/result';
// import { ReuseTabModule } from '@co/cbc/reuse-tab';
import { SEModule } from '@co/cbc/basic/se';
import { SidebarNavModule } from '@co/cbc/basic/sidebar-nav';
import { STModule } from '@co/cbc/basic/st';
import { SVModule } from '@co/cbc/basic/sv';

export const SHARED_DELON_MODULES = [
  PageHeaderModule,
  ResultModule,
  ExceptionModule,
  NoticeIconModule,
  SidebarNavModule,
  GlobalFooterModule,
  STModule,
  SEModule,
  SVModule,
  // ReuseTabModule,
];
