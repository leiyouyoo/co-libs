import { LayoutModule as CDKLayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { DefaultLayoutComponent } from './default/default-layout.component';


@NgModule({
  imports: [
    SharedModule,
    CDKLayoutModule
  ],
  declarations: [DefaultLayoutComponent],
  exports: [DefaultLayoutComponent],
})
export class LayoutModule { }
