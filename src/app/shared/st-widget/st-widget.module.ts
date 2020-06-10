import { NgModule } from '@angular/core';
import { STWidgetRegistry } from '@co/cbc';
import { SharedModule } from '../shared.module';
import { STImgWidget } from './img.widget';

export const STWIDGET_COMPONENTS = [STImgWidget];

@NgModule({
  declarations: STWIDGET_COMPONENTS,
  imports: [SharedModule],
  exports: [...STWIDGET_COMPONENTS],
})
export class STWidgetModule {
  constructor(widgetRegistry: STWidgetRegistry) {
    widgetRegistry.register(STImgWidget.KEY, STImgWidget);
  }
}
