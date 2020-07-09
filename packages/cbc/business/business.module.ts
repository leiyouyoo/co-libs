import { NgModule } from '@angular/core';
import { ContainerPickerModule } from '@co/cbc/business/container-picker';
import { DataDictionaryPickerModule } from '@co/cbc/business/data-dictionary-picker';
import { CdsModule } from '@co/cds';
import { ChargingCodePickerModule } from './charging-code-picker';
import { CountyPickerModule } from './county-picker';
import { CurrencyPickerModule } from './currency-picker';
import { CustomerPickerModule } from './customer-picker';
import { FlightPickerModule } from './flight-picker';
import { PlacePickerModule } from './place-picker';
import { AreaPickerModule } from './area-picker';
import { RegionPickerModule } from './region-picker';
import { PortPickerModule } from './port-picker';
import { ProductPickerModule } from './product-picker';
import { ShipnamePickerModule } from './shipname-picker';
import { YoyagePickerModule } from './voyage-picker';
import { BillReportModule } from './bill-report';

const EXPORT_MODULES: any[] = [
  CustomerPickerModule,
  ContainerPickerModule,
  DataDictionaryPickerModule,
  ChargingCodePickerModule,
  CountyPickerModule,
  CurrencyPickerModule,
  ShipnamePickerModule,
  YoyagePickerModule,
  FlightPickerModule,
  ProductPickerModule,
  PlacePickerModule,
  AreaPickerModule,
  RegionPickerModule,
  PortPickerModule,
  BillReportModule,
];
const IMPORT_MODULES: any[] = [CdsModule];

/**
 * 业务组件模块
 */
@NgModule({ imports: IMPORT_MODULES, exports: EXPORT_MODULES })
export class CoBusinessComponentsModule {
}
