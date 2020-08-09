import { NgModule } from '@angular/core';
// #region all modules
import { FullContentModule } from './full-content';
import { PageHeaderModule } from './page-header';
import { PageLayoutModule } from './page-layout';
import { SearchAreaLayoutModule } from './search-area-layout';
import { SidebarNavModule } from './sidebar-nav';
import { ToolbarModule } from './toolbar';

const MODULES = [SidebarNavModule, PageHeaderModule, FullContentModule, PageLayoutModule, SearchAreaLayoutModule, ToolbarModule];

/**
 * 业务组件模块
 */
@NgModule({ exports: MODULES })
export class CoLayoutComponentsModule {
  constructor() {}
}
