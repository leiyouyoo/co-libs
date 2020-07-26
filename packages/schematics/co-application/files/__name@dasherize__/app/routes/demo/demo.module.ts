import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@platform-shared';
import { DemoListComponent } from './demo-list.component';
import { DemoNewComponent } from './demo-new/demo-new.component';

const COMPONENTS = [
  DemoListComponent,
  DemoNewComponent,
];

const COMPONENTS_NOROUNT = [];


const routes: Routes = [
  {
    path: '', component: DemoListComponent, data: { reuse: true },
  },
];


@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class DemoModule {
}
