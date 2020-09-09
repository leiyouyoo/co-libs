import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd';
import { PortalModule } from '@angular/cdk/portal';
import { PageLayoutComponent } from './page-layout.component';
import { PageMainComponent } from './page-main.component';
import { PageSideComponent } from './page-side.component';
import { PageSideResizeHandleComponent } from './page-side-resize-handle.component';
import { PageSideDrawerComponent } from './drawer/page-side-drawer.component';


const COMPONENTS = [
  PageLayoutComponent,
  PageMainComponent,
  PageSideComponent,
  PageSideResizeHandleComponent,
  PageSideDrawerComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    NzOutletModule,
    PortalModule,
  ],
  exports: [...COMPONENTS],
})
export class PageLayoutModule {
}
