import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ContainerPickerBasicComponent } from './container-picker-basic.component';

const COMPONENTS = [
  ContainerPickerBasicComponent,
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full',
  },
  // dev/cbc/container-picker/basic
  { path: 'basic', component: ContainerPickerBasicComponent },
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class ContainerPickerModule {
}
