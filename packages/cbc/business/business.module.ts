import { NgModule } from '@angular/core';
import { CustomerPickerModule } from './customer-picker';
import { CdsModule } from '@co/cds';

const EXPORT_MODULES: any[] = [CustomerPickerModule];
const IMPORT_MODULES: any[] = [CdsModule];

/**
 * 业务组件模块
 */
@NgModule({ imports: IMPORT_MODULES, exports: EXPORT_MODULES })
export class CoBusinessComponentsModule {}
