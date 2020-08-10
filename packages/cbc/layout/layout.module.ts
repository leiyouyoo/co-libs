import { NgModule } from '@angular/core';
// #region all modules
import { FullContentModule } from '@co/cbc/layout/full-content';
import { PageHeaderModule } from '@co/cbc/layout/page-header';
import { PageLayoutModule } from '@co/cbc/layout/page-layout';
import { SearchAreaLayoutModule } from '@co/cbc/layout/search-area-layout';
import { SidebarNavModule } from '@co/cbc/layout/sidebar-nav';
import { ToolbarModule } from '@co/cbc/layout/toolbar';

const MODULES = [SidebarNavModule, PageHeaderModule, FullContentModule, PageLayoutModule, SearchAreaLayoutModule, ToolbarModule];

/**
 * 业务组件模块
 */
@NgModule({ exports: MODULES })
export class CoLayoutComponentsModule {
  constructor() {}
}
