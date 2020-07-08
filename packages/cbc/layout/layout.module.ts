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
  }
}
