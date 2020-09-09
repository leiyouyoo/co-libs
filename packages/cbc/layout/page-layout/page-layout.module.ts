import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CaretLeftOutline, MoreOutline } from '@ant-design/icons-angular/icons';
import { NzOutletModule } from 'ng-zorro-antd';
import { PortalModule } from '@angular/cdk/portal';
import { PageLayoutComponent } from './page-layout.component';
import { PageMainComponent } from './page-main.component';
import { PageSideComponent } from './page-side.component';
import { PageSideResizeHandleComponent } from './page-side-resize-handle.component';
import { PageSideDrawerComponent } from './drawer/page-side-drawer.component';


const COMPONENTS = [PageLayoutComponent,
  PageMainComponent,
  PageSideComponent,
  PageSideResizeHandleComponent,
  PageSideDrawerComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    NzIconModule.forRoot([MoreOutline, CaretLeftOutline]),
    NzOutletModule,
    PortalModule,
  ],
  exports: [...COMPONENTS],
})
export class PageLayoutModule {
}
