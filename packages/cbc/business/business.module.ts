import { NgModule } from '@angular/core';
import { ChargingCodePickerModule } from './charging-code-picker';
import { CountyPickerModule } from './county-picker';
import { CurrencyPickerModule } from './currency-picker';
import { CustomerPickerModule } from './customer-picker';
import { CdsModule } from '@co/cds';
import { ShipnamePickerModule } from './shipname-picker';
import { ContainerPickerModule } from '@co/cbc/business/container-picker';
import { DataDictionaryPickerModule } from '@co/cbc/business/data-dictionary-picker';
import { YoyagePickerModule } from './voyage-picker';
import { ProductPickerModule } from './product-picker';

const EXPORT_MODULES: any[] = [
  CustomerPickerModule,
  ContainerPickerModule,
  DataDictionaryPickerModule,
  ChargingCodePickerModule,
  CountyPickerModule,
  CurrencyPickerModule,
  CustomerPickerModule,
  ShipnamePickerModule,
  YoyagePickerModule,
  ProductPickerModule
];
const IMPORT_MODULES: any[] = [CdsModule];

/**
 * 业务组件模块
 */
@NgModule({ imports: IMPORT_MODULES, exports: EXPORT_MODULES })
export class CoBusinessComponentsModule { }
