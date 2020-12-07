import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetGridComponent } from './widget-grid.component';
import { NzButtonModule, NzIconModule, NzSpinModule } from 'ng-zorro-antd';
import { AddWidgetPanelComponent } from './add-widget-panel/add-widget-panel.component';
import { WidgetGridResizeDirective } from './widget-grid-resize.directive';
import { CoWidgetItemDirective } from './widget-item.directive';
import { NgxWidgetGridModule } from '@co/cbc/web/ngx-widget-grid';



@NgModule({
  declarations: [
    WidgetGridComponent, AddWidgetPanelComponent, WidgetGridResizeDirective,
    CoWidgetItemDirective,
  ],
  imports: [
    CommonModule,
    NgxWidgetGridModule,
    NzButtonModule,
    NzIconModule,
    NzSpinModule,
  ],
  exports: [
    NgxWidgetGridModule,
    WidgetGridComponent,
    CoWidgetItemDirective
  ],
})
export class CoWidgetGridModule { }
