import { NgModule } from '@angular/core';
import { CdsModule } from '@co/cds';
import { CustomerPickerMobileModule } from '@co/cbc/mobile/customer-picker-mobile';
import { CustomerServicePickerMobileModule } from './customer-service-picker-mobile';
import { OperationPortPickerModule } from './operation-port-picker-mobile';
import { PortPickerMobileModule } from './port-picker-mobile';
import { CommodityPickerMobileModule } from './commodity-picker-mobile';

const EXPORT_MODULES: any[] = [
  CustomerPickerMobileModule,
  CustomerServicePickerMobileModule,
  CustomerPickerMobileModule,
  CommodityPickerMobileModule,
  OperationPortPickerModule,
  PortPickerMobileModule,
];
const IMPORT_MODULES: any[] = [CdsModule];

/**
 * 业务组件模块
 */
@NgModule({ imports: IMPORT_MODULES, exports: EXPORT_MODULES })
export class CoMobileBusinessComponentsModule {}
