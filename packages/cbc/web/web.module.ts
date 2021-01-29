import { NgModule } from '@angular/core';
import { CoNzSelectExtraModule } from '@co/cbc/web/nz-select-extra';
import { CoNzSelectCellTitleModule } from '@co/cbc/web/nz-select-cell-title';
import { SEModule } from '@co/cbc/web/se';
import { CoSTModule } from '@co/cbc/web/st';
import { CoWidgetGridModule } from '@co/cbc/web/widget-grid';
import { NgxWidgetGridModule } from '@co/cbc/web/ngx-widget-grid';
import { NzSpinIconModule } from '@co/cbc/web/nz-spin-icon';

const MODULES: any[] = [
  CoSTModule, SEModule, CoNzSelectExtraModule,
  CoNzSelectCellTitleModule, CoWidgetGridModule, NgxWidgetGridModule,
  NzSpinIconModule,
];

@NgModule({ exports: MODULES })
export class CbcWebComponentsModule {
  constructor() {}
}
