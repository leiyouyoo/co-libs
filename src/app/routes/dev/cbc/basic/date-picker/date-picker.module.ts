import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../../shared/shared.module';

import { DatePickerBasicComponent } from './date-picker-basic.component';
import { DatePickerShortcutComponent } from './date-picker-shortcut.component';

const COMPONENTS = [DatePickerBasicComponent, DatePickerShortcutComponent];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full',
  },
  { path: 'basic', component: DatePickerBasicComponent },
  { path: 'shortcut', component: DatePickerShortcutComponent },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: COMPONENTS,
})
export class DatePickerDemoModule {}
