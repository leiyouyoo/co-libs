import { NgModule } from '@angular/core';
import { ChargingCodePickerModule } from './charging-code-picker';
import { CountyPickerModule } from './county-picker';
import { CurrencyPickerModule } from './currency-picker';
import { CustomerPickerModule } from './customer-picker';
import { CdsModule } from '@co/cds';

const EXPORT_MODULES: any[] = [
  ChargingCodePickerModule,
  CountyPickerModule,
  CurrencyPickerModule,
  CustomerPickerModule,
];
const IMPORT_MODULES: any[] = [CdsModule];

/**
 * 业务组件模块
 */
@NgModule({ imports: IMPORT_MODULES, exports: EXPORT_MODULES })
export class CoBusinessComponentsModule {}
