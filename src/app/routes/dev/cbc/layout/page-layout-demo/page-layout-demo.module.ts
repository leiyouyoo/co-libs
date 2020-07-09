import { NgModule } from '@angular/core';
import { PageLayoutDemoComponent } from './page-layout-demo.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NzLayoutModule, NzPageHeaderModule } from 'ng-zorro-antd';
import { NzSpaceModule } from 'ng-zorro-antd/space';


const routes: Routes = [
  {
    // dev/cbc/layout-demo
    path: '',
    component: PageLayoutDemoComponent,
  },
];

@NgModule({
  declarations: [PageLayoutDemoComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    NzLayoutModule,
    NzPageHeaderModule,
    NzSpaceModule,
  ],
})
export class PageLayoutDemoModule {
}
