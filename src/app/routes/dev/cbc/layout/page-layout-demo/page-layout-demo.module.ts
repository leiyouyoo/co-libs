import { NgModule } from '@angular/core';
import { PageLayoutDemoComponent } from './page-layout-demo.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NzLayoutModule, NzPageHeaderModule } from 'ng-zorro-antd';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { RightSideDemoComponent } from './right-side-demo/right-side-demo.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MoreOutline } from '@ant-design/icons-angular/icons';


const routes: Routes = [
  {
    // dev/cbc/layout-demo
    path: '',
    component: PageLayoutDemoComponent,
  },
  {
    // dev/cbc/layout-demo/right-side
    path: 'right-side',
    component: RightSideDemoComponent,
  },
];

@NgModule({
  declarations: [PageLayoutDemoComponent, RightSideDemoComponent],
  imports: [
    SharedModule,
    NzIconModule.forRoot([MoreOutline]),
    RouterModule.forChild(routes),
    NzLayoutModule,
    NzPageHeaderModule,
    NzSpaceModule,
  ],
})
export class PageLayoutDemoModule {
}
