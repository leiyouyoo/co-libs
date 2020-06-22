import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../../shared/shared.module';

import { CustomerPickerBasicComponent } from './customer-picker-basic.component';
import { CustomerPickerDropdownPositionComponent } from './customer-picker-dropdownposition.component';
import { CustomerPickerDropdownTableComponent } from './customer-picker-dropdowntable.component';
import { CustomerPickerEventsComponent } from './customer-picker-events.component';
import { CustomerPickerItemTemplateComponent } from './customer-picker-itemtemplate.component';
import { CustomerPickerMethodsComponent } from './customer-picker-methods.component';
import { CustomerPickerMultipleComponent } from './customer-picker-multiple.component';
import { CustomerPickerSizeComponent } from './customer-picker-size.component';

const COMPONENTS = [
  CustomerPickerBasicComponent,
  CustomerPickerDropdownPositionComponent,
  CustomerPickerEventsComponent,
  CustomerPickerItemTemplateComponent,
  CustomerPickerMethodsComponent,
  CustomerPickerMethodsComponent,
  CustomerPickerMultipleComponent,
  CustomerPickerSizeComponent,
  CustomerPickerDropdownTableComponent,
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full',
  },
  { path: 'basic', component: CustomerPickerBasicComponent },
  { path: 'dropdownposition', component: CustomerPickerDropdownPositionComponent },
  { path: 'dropdowntable', component: CustomerPickerDropdownTableComponent },
  { path: 'events', component: CustomerPickerEventsComponent },
  { path: 'itemtemplate', component: CustomerPickerItemTemplateComponent },
  { path: 'methods', component: CustomerPickerMethodsComponent },
  { path: 'multiple', component: CustomerPickerMultipleComponent },
  { path: 'size', component: CustomerPickerSizeComponent },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: COMPONENTS,
})
export class CustomerPickerDemoModule {}
