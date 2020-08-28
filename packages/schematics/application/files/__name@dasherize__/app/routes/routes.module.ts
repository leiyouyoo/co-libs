import { NgModule } from '@angular/core';
import { RouterModule as NgRouterModule, Routes } from '@angular/router';

import { EmptyComponent } from '@co/cms';

import { SharedModule } from '../shared';
import { DefaultLayoutComponent } from '../layout';

const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

//TODO:子应用代码-路由按子应用规范配置
export const routers: Routes = [
  {
    path: '<%= name %>',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'demos',
        pathMatch: 'full',
      },
      {
        path: 'demos',
        loadChildren: () => import(/* webpackChunkName: "platform-position" */ './demo/demo.module').then((mod) => mod.DemoModule),
      },
      {
        path: '**',
        component: EmptyComponent,
      },
    ],
  },
  {
    path: '**',
    component: EmptyComponent,
  },
];

/**
 * 平台管理路由模块
 */
@NgModule({
  imports: [
    SharedModule,
    NgRouterModule.forRoot(routers, {
      useHash: true,
      paramsInheritanceStrategy: 'always',
    }),
  ],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class RoutesModule {}
