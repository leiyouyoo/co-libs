export default `import { NgModule } from '@angular/core';
// import { STWidgetRegistry } from '@co/cbc/basic/st';
import { SharedModule } from '../shared.module';

export const STWIDGET_COMPONENTS = [];

@NgModule({
  declarations: STWIDGET_COMPONENTS,
  imports: [SharedModule],
  exports: [...STWIDGET_COMPONENTS],
})
export class STWidgetModule {
  // constructor(widgetRegistry: STWidgetRegistry) {
  //   widgetRegistry.register(STImgWidget.KEY, STImgWidget);
  // }
}`;
