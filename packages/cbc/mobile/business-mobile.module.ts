import { NgModule } from '@angular/core';
import { CdsModule } from '@co/cds';
import { CustomerPickerMobileModule } from '@co/cbc/mobile/customer-picker-mobile';

const EXPORT_MODULES: any[] = [CustomerPickerMobileModule];
const IMPORT_MODULES: any[] = [CdsModule];

/**
 * 业务组件模块
 */
@NgModule({ imports: IMPORT_MODULES, exports: EXPORT_MODULES })
export class CoMobileBusinessComponentsModule {}