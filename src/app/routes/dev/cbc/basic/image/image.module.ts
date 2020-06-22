import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../../shared/shared.module';

import { ImageBasicComponent } from './image-basic.component';
import { ImageErrorComponent } from './image-error.component';

const COMPONENTS = [ImageBasicComponent, ImageErrorComponent];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full',
  },
  { path: 'basic', component: ImageBasicComponent },
  { path: 'error', component: ImageErrorComponent },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: COMPONENTS,
})
export class ImageDemoModule {}
