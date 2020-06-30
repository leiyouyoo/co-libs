import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import { PageMainComponent } from '@co/cbc/layout/page-layout/page-main.component';
import { PageSideComponent } from '@co/cbc/layout/page-layout/page-side.component';


const COMPONENTS = [PageLayoutComponent, PageMainComponent, PageSideComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
  ],
  exports: [...COMPONENTS],
})
export class PageLayoutModule {
}
