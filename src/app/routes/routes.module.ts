import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';
import { LayoutComponent } from '../layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './404/404.component';
import { HomeComponent } from './home/home.component';

const COMPONENTS = [HomeComponent, NotFoundComponent];

const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'zh', pathMatch: 'full' },
      { path: 'zh', component: HomeComponent, data: { titleI18n: 'slogan' } },
      { path: 'en', component: HomeComponent, data: { titleI18n: 'slogan' } },
      // #region region routers
      { path: 'docs', loadChildren: () => import('./gen/docs/docs.module').then(m => m.DocsModule) },
      {
        path: 'components',
        loadChildren: () => import('./gen/components/components.module').then(m => m.ComponentsModule),
      },
      { path: 'core', loadChildren: () => import('./gen/core/core.module').then(m => m.CoreModule) },
      { path: 'theme', loadChildren: () => import('./gen/theme/theme.module').then(m => m.ThemeModule) },
      { path: 'auth', loadChildren: () => import('./gen/auth/auth.module').then(m => m.AuthModule) },
      { path: 'acl', loadChildren: () => import('./gen/acl/acl.module').then(m => m.AclModule) },
      { path: 'cache', loadChildren: () => import('./gen/cache/cache.module').then(m => m.CacheModule) },
      { path: 'mock', loadChildren: () => import('./gen/mock/mock.module').then(m => m.MockModule) },
      { path: 'chart', loadChildren: () => import('./gen/chart/chart.module').then(m => m.ChartModule) },
      { path: 'form', loadChildren: () => import('./gen/form/form.module').then(m => m.FormModule) },
      { path: 'cds', loadChildren: () => import('./gen/cds/cds.module').then(m => m.CdsModule) },
      {
        path: 'form-pages',
        loadChildren: () => import('./form-pages/form-pages.module').then(m => m.FormPagesModule),
      },
      { path: 'cli', loadChildren: () => import('./gen/cli/cli.module').then(m => m.CliModule) },
      { path: 'im', loadChildren: () => import('./gen/im/im.module').then(m => m.ImModule) },
      { path: 'map', loadChildren: () => import('./gen/map/map.module').then(m => m.MapModule) },
      { path: 'apm', loadChildren: () => import('./gen/apm/apm.module').then(m => m.ApmModule) },
      { path: 'cms', loadChildren: () => import('./gen/cms/cms.module').then(m => m.CmsModule) },

      // #endregion
    ],
  },
  {
    path: 'dev',
    loadChildren: () => import('./dev/dev.module').then(m => m.DevTestModule),
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(routes, environment.production ? {} : { useHash: false })],
  declarations: [...COMPONENTS],
})
export class RoutesModule { }
