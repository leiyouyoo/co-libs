import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ToolbarItemComponent } from '@co/cbc/layout/toolbar/toolbar-item.component';


const COMPONENTS = [ToolbarComponent, ToolbarItemComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    NzFormModule,
  ],
  exports: [...COMPONENTS],
})
export class ToolbarModule {
}
