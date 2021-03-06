import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule, NzOutletModule } from 'ng-zorro-antd';
import { PortalModule } from '@angular/cdk/portal';
import { PageLayoutComponent } from './page-layout.component';
import { PageMainComponent } from './page-main.component';
import { PageSideComponent } from './page-side.component';
import { PageSideResizeHandleComponent } from './page-side-resize-handle.component';
import { CoDrawerFooterDirective, CoDrawerTitleDirective, PageSideDrawerComponent } from './drawer/page-side-drawer.component';


const COMPONENTS = [
  PageLayoutComponent,
  PageMainComponent,
  PageSideComponent,
  PageSideResizeHandleComponent,
  PageSideDrawerComponent,
];

@NgModule({
  declarations: [...COMPONENTS, CoDrawerFooterDirective, CoDrawerTitleDirective],
  imports: [
    CommonModule,
    NzIconModule,
    NzOutletModule,
    PortalModule,
  ],
  exports: [...COMPONENTS, CoDrawerFooterDirective, CoDrawerTitleDirective],
})
export class PageLayoutModule {
}
