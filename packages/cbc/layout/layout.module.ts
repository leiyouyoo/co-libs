import { NgModule } from '@angular/core';

// #region all modules
import { FullContentModule } from '@co/cbc/layout/full-content';
import { PageHeaderModule } from '@co/cbc/layout/page-header';
import { SidebarNavModule } from '@co/cbc/layout/sidebar-nav';
import { ReuseTabModule } from '@co/cbc/layout/reuse-tab';

const MODULES = [SidebarNavModule, ReuseTabModule, PageHeaderModule, FullContentModule];

/**
 * 基础组件模块
 */
@NgModule({ exports: MODULES })
export class CoLayoutComponentsModule {
  constructor() {
    console.warn(
      "The `DeloncbcModule` has been deprecated and will be removed in 10.0.0. Please use secondary entry instead.\ne.g. `import { STModule } from 'ng-zorro-antd/st';`",
    );
  }
}
