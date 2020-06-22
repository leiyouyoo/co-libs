import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../../shared/shared.module';

import { NoticeIconBasicComponent } from './notice-icon-basic.component';
import { NoticeIconPopoverComponent } from './notice-icon-popover.component';

const COMPONENTS = [NoticeIconBasicComponent, NoticeIconPopoverComponent];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full',
  },
  { path: 'basic', component: NoticeIconBasicComponent },
  { path: 'popover', component: NoticeIconPopoverComponent },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: COMPONENTS,
})
export class NoticeIconDemoModule {}
