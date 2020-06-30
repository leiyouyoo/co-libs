import { NgModule } from '@angular/core';
// #region all modules
import { FullContentModule } from '@co/cbc/layout/full-content';
import { PageHeaderModule } from '@co/cbc/layout/page-header';
import { SidebarNavModule } from '@co/cbc/layout/sidebar-nav';
import { ReuseTabModule } from '@co/cbc/layout/reuse-tab';
import { SearchAreaLayoutModule } from '@co/cbc/layout/search-area-layout';
import { ToolbarModule } from '@co/cbc/layout/toolbar';
import { PageLayoutModule } from '@co/cbc/layout/page-layout';

const MODULES = [SidebarNavModule, ReuseTabModule, PageHeaderModule, FullContentModule, PageLayoutModule, SearchAreaLayoutModule, ToolbarModule];


/**
 * 业务组件模块
 */
@NgModule({ exports: MODULES })
export class CoLayoutComponentsModule {
  constructor() {
    console.warn(
      'The `DeloncbcModule` has been deprecated and will be removed in 10.0.0. Please use secondary entry instead.\ne.g. `import { STModule } from \'ng-zorro-antd/st\';`',
    );
  }
}
