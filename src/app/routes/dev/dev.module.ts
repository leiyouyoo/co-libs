import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DevHomeComponent } from './home/home.component';
import { DevLayoutComponent } from './layout.component';
import { DevPageComponent } from './pages/page.component';

const COMPONENTS = [DevLayoutComponent, DevHomeComponent, DevPageComponent];

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'customer-picker', pathMatch: 'full' },
      {
        path: 'date-picker',
        loadChildren: () => import('./cbc/basic/date-picker/date-picker.module').then(m => m.DatePickerDemoModule),
      },
      {
        path: 'ellipsis',
        loadChildren: () => import('./cbc/basic/ellipsis/ellipsis.module').then(m => m.EllipsisDemoModule),
      },
      {
        path: 'image',
        loadChildren: () => import('./cbc/basic/image/image.module').then(m => m.ImageDemoModule),
      },
      {
        path: 'loading',
        loadChildren: () => import('./cbc/basic/loading/loading.module').then(m => m.LoadingDemoModule),
      },
      {
        path: 'notice-icon',
        loadChildren: () => import('./cbc/basic/notice-icon/notice-icon.module').then(m => m.NoticeIconDemoModule),
      },
      {
        path: 'customer-picker',
        loadChildren: () => import('./cbc/business/customer-picker/customer-picker.module').then(m => m.CustomerPickerDemoModule),
      },
      {
        path: 'place-picker',
        loadChildren: () => import('./cbc/business/place-picker/place-picker.module').then(m => m.PlacePickerDemoModule),
      },
      {
        path: 'acl',
        loadChildren: () => import('./acl/acl.module').then(m => m.AclDemoModule),
      },
      {
        path: 'container-picker',
        loadChildren: () => import('./cbc/business/container-picker/container-picker.module').then(m => m.ContainerPickerModule),
      },
      {
        path: 'layout-demo',
        loadChildren: () => import('./cbc/layout/page-layout-demo/page-layout-demo.module').then(m => m.PageLayoutDemoModule),
      },
      {
        path: 'report-viewer',
        loadChildren: () => import('./cbc/business/report-viewer/report-viewer.module').then(m => m.ReportViewerDemoModule),
      },
    ],
  },
  {
    path: '',
    component: DevLayoutComponent,
    children: [
      { path: '', component: DevHomeComponent },
      { path: 'page', component: DevPageComponent },
    ],
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: COMPONENTS,
})
export class DevTestModule {
}
