import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoUtilModule } from '@co/core';

import { G2TagCloudComponent } from './tag-cloud.component';

const COMPONENTS = [G2TagCloudComponent];

@NgModule({
  imports: [CommonModule, CoUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2TagCloudModule {}
