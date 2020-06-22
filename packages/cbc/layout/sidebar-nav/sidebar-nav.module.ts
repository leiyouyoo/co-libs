import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoUtilModule } from '@co/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SidebarNavComponent } from './sidebar-nav.component';

@NgModule({
  imports: [CommonModule, RouterModule, NzIconModule, NzToolTipModule, CoUtilModule],
  declarations: [SidebarNavComponent],
  exports: [SidebarNavComponent],
})
export class SidebarNavModule {}
