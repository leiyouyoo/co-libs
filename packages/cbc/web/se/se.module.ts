import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoUtilModule } from '@co/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SEContainerComponent } from './se-container.component';
import { SETitleComponent } from './se-title.component';
import { SEComponent } from './se.component';

const COMPONENTS = [SEContainerComponent, SEComponent, SETitleComponent];

@NgModule({
  imports: [CommonModule, CoUtilModule, NzToolTipModule, NzIconModule, NzOutletModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SEModule {}
