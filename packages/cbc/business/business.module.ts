import { NgModule } from '@angular/core';
import { CdsModule } from '@co/cds';
import { AreaPickerModule } from './area-picker';
import { CarrierPickerModule } from './carrier-picker';
import { ChargingCodePickerModule } from './charging-code-picker';
import { CommodityPickerModule } from './commodity-picker';
import { ContainerPickerModule } from './container-picker';
import { CountyPickerModule } from './county-picker';
import { CurrencyPickerModule } from './currency-picker';
import { CustomerPickerModule } from './customer-picker';
import { DataDictionaryPickerModule } from './data-dictionary-picker';
import { FlightPickerModule } from './flight-picker';
import { OrganizationCascaderModule } from './organization-cascader';
import { PlacePickerModule } from './place-picker';
import { PortOfficePickerModule } from './port-office-picker';
import { PortPickerModule } from './port-picker';
import { RegionPickerModule } from './region-picker';
import { ReportViewerModule } from './report-viewer';
import { SalespersonPickerModule } from './salesperson-picker';
import { ShipnamePickerModule } from './shipname-picker';
import { ShippingLinePickerModule } from './shipping-line-picker';
import { YoyagePickerModule } from './voyage-picker';

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
  CommodityPickerModule,
  PlacePickerModule,
  AreaPickerModule,
  RegionPickerModule,
  PortPickerModule,
  ReportViewerModule,
  OrganizationCascaderModule,
  PortOfficePickerModule,
  SalespersonPickerModule,
  CarrierPickerModule,
  ShippingLinePickerModule,
];
const IMPORT_MODULES: any[] = [CdsModule];

/**
 * 业务组件模块
 */
@NgModule({ imports: IMPORT_MODULES, exports: EXPORT_MODULES })
export class CoBusinessComponentsModule {}
