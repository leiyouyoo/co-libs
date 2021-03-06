import { NgModule } from '@angular/core';
import { CdsModule } from '@co/cds';
import { AreaPickerModule } from '@co/cbc/business/area-picker';
import { CarrierPickerModule } from '@co/cbc/business/carrier-picker';
import { ChargingCodePickerModule } from '@co/cbc/business/charging-code-picker';
import { CommodityPickerModule } from '@co/cbc/business/commodity-picker';
import { ContainerPickerModule } from '@co/cbc/business/container-picker';
import { CountyPickerModule } from '@co/cbc/business/county-picker';
import { CurrencyPickerModule } from '@co/cbc/business/currency-picker';
import { CustomerPickerModule } from '@co/cbc/business/customer-picker';
import { DataDictionaryPickerModule } from '@co/cbc/business/data-dictionary-picker';
import { FlightPickerModule } from '@co/cbc/business/flight-picker';
import { OrganizationCascaderModule } from '@co/cbc/business/organization-cascader';
import { PlacePickerModule } from '@co/cbc/business/place-picker';
import { PortOfficePickerModule } from '@co/cbc/business/port-office-picker';
import { PortPickerModule } from '@co/cbc/business/port-picker';
import { RegionPickerModule } from '@co/cbc/business/region-picker';
import { ReportViewerModule } from '@co/cbc/business/report-viewer';
import { SalespersonPickerModule } from '@co/cbc/business/salesperson-picker';
import { ShipnamePickerModule } from '@co/cbc/business/shipname-picker';
import { ShippingLinePickerModule } from '@co/cbc/business/shipping-line-picker';
import { YoyagePickerModule } from '@co/cbc/business/voyage-picker';
import { PlaceAllPickerModule } from '@co/cbc/business/place-all-picker';
import { ServiceUserPickerModule } from '@co/cbc/business/service-user-picker';
import { TreePickerModule } from '@co/cbc/business/tree-picker';
import { CoCascaderModule } from '@co/cbc/business/co-cascader';

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
  PlaceAllPickerModule,
  ServiceUserPickerModule,
  TreePickerModule,
  CoCascaderModule,
];
const IMPORT_MODULES: any[] = [CdsModule];

/**
 * ??????????????????
 */
@NgModule({ imports: IMPORT_MODULES, exports: EXPORT_MODULES })
export class CoBusinessComponentsModule {}
