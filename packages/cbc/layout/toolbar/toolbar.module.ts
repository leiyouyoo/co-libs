import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarItemComponent } from './toolbar-item.component';


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
