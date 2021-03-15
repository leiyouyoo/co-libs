import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../../shared/shared.module';

import { OperationPortPickerMobileComponent } from './operation-port-picker-mobile.component';

const COMPONENTS = [OperationPortPickerMobileComponent];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full',
  },
  { path: 'operation-port', component: OperationPortPickerMobileComponent },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: COMPONENTS,
})
export class OperationPortPickerDemoModule {}
