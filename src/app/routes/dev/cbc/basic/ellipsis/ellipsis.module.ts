import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../../shared/shared.module';

import { EllipsisLineComponent } from './ellipsis-line.component';
import { EllipsisNumberComponent } from './ellipsis-number.component';

const COMPONENTS = [EllipsisLineComponent, EllipsisNumberComponent];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'line',
    pathMatch: 'full',
  },
  { path: 'line', component: EllipsisLineComponent },
  { path: 'number', component: EllipsisNumberComponent },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: COMPONENTS,
})
export class EllipsisDemoModule {}
