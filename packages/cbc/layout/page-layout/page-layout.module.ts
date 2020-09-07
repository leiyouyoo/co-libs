import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MoreOutline } from '@ant-design/icons-angular/icons';
import { PageLayoutComponent } from './page-layout.component';
import { PageMainComponent } from './page-main.component';
import { PageSideComponent } from './page-side.component';
import { PageSideResizeHandleComponent } from './page-side-resize-handle.component';


const COMPONENTS = [PageLayoutComponent, PageMainComponent, PageSideComponent, PageSideResizeHandleComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    NzIconModule.forRoot([MoreOutline]),
  ],
  exports: [...COMPONENTS],
})
export class PageLayoutModule {
}
