import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../../shared/shared.module';

import { LoaddingBasicComponent } from './loading-basic.component';
import { LoadingCustomComponent } from './loading-custom.component';
import { LoadingDelayComponent } from './loading-delay.component';

const COMPONENTS = [LoaddingBasicComponent, LoadingCustomComponent, LoadingDelayComponent];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full',
  },
  { path: 'basic', component: LoaddingBasicComponent },
  { path: 'custom', component: LoadingCustomComponent },
  { path: 'delay', component: LoadingDelayComponent },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: COMPONENTS,
})
export class LoadingDemoModule {}
