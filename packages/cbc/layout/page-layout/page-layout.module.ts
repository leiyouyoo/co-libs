import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';


const COMPONENTS = [PageLayoutComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
  ],
  exports: [...COMPONENTS],
})
export class PageLayoutModule {
}
