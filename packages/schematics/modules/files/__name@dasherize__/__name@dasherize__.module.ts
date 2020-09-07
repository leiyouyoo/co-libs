import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared';
import {  <%= classify(name) %>ListComponent } from './<%= name %>-list.component';
import {  <%= classify(name) %>DetailComponent } from '../<%= name %>/component/detail/<%= name %>-detail.component';

const COMPONENTS = [ <%= classify(name) %>ListComponent,  <%= classify(name) %>DetailComponent];
const COMPONENTS_NOROUNT = [];

/**
 * 示例路由配置
 */
const routes: Routes = [{ path: '', component:  <%= classify(name) %>ListComponent, data: { titleI18n: '<%= name %>:<%= name %>List', reuse: true } }];

/**
 * 示例特性模块
 */
@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class <%= classify(name) %>Module {}
