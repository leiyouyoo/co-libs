import { NgModule } from '@angular/core';
import { ContainerPickerModule } from '@co/cbc/business/container-picker';
import { DataDictionaryPickerModule } from '@co/cbc/business/data-dictionary-picker';
import { CdsModule } from '@co/cds';
import { ChargingCodePickerModule } from '@co/cbc/business/charging-code-picker';
import { CountyPickerModule } from '@co/cbc/business/county-picker';
import { CurrencyPickerModule } from '@co/cbc/business/currency-picker';
import { CustomerPickerModule } from '@co/cbc/business/customer-picker';
import { FlightPickerModule } from '@co/cbc/business/flight-picker';
import { PlacePickerModule } from '@co/cbc/business/place-picker';
import { AreaPickerModule } from '@co/cbc/business/area-picker';
import { RegionPickerModule } from '@co/cbc/business/region-picker';
import { PortPickerModule } from '@co/cbc/business/port-picker';
import { CommodityPickerModule } from '@co/cbc/business/commodity-picker';
import { ShipnamePickerModule } from '@co/cbc/business/shipname-picker';
import { YoyagePickerModule } from '@co/cbc/business/voyage-picker';
import { ReportViewerModule } from '@co/cbc/business/report-viewer';
import { OrganizationCascaderModule } from '@co/cbc/business/organization-cascader';
import { PortOfficePickerModule } from '@co/cbc/business/port-office-picker';
import { SalespersonPickerModule } from '@co/cbc/business/salesperson-picker';
import { CarrierPickerModule } from '@co/cbc/business/carrier-picker';
import { ShippingLinePickerModule } from '@co/cbc/business/shipping-line-picker';

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
export class CoBusinessComponentsModule { }
