import { NgModule } from '@angular/core';
import { RouterModule as NgRouterModule, Routes } from '@angular/router';

import { EmptyComponent } from '@co/cms';

import { DefaultLayoutComponent } from '../layout';
import { SharedModule } from '../shared';

const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

// TODO:自应用代码-路由按子应用规范配置
export const routers: Routes = [
  {
    path: '<%= name %>',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '**',
        component: EmptyComponent,
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then(mod => mod.DemoModule),

      },
    ],
  },
  {
    path: '**',
    component: EmptyComponent,
  },
];

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
