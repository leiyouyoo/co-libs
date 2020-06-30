import { NgModule } from '@angular/core';
// #region all modules
import { FullContentModule } from './full-content';
import { PageHeaderModule } from './page-header';
import { SidebarNavModule } from './sidebar-nav';
import { ReuseTabModule } from './reuse-tab';
import { SearchAreaLayoutModule } from './search-area-layout';
import { ToolbarModule } from './toolbar';
import { PageLayoutModule } from './page-layout';

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
