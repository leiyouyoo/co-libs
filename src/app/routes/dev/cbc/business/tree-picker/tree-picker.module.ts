import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { TreePickerBasicComponent } from './tree-picker-basic.component';

const COMPONENTS = [
  TreePickerBasicComponent,
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full',
  },
  // dev/tree-picker/basic
  { path: 'basic', component: TreePickerBasicComponent },
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class TreePickerModule {
}
