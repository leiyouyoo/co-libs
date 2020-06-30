import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import { PageMainComponent } from './page-main.component';
import { PageSideComponent } from './page-side.component';


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
