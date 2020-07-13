import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoLocaleModule } from '@co/common';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CoNoticeIconTabComponent } from './notice-icon-tab.component';
import { CoNoticeIconComponent } from './notice-icon.component';

const COMPONENTS = [CoNoticeIconComponent, CoNoticeIconTabComponent];

@NgModule({
  imports: [
    CommonModule,
    CoLocaleModule,
    NzBadgeModule,
    NzDropDownModule,
    NzIconModule,
    NzListModule,
    NzSpinModule,
    NzTabsModule,
    NzTagModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class CoNoticeIconModule { }
