import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoUtilModule } from '@co/core';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CoEllipsisComponent } from './ellipsis.component';

const COMPONENTS = [CoEllipsisComponent];

/**
 * 文本过长自动处理省略号模块
 */
@NgModule({
  imports: [CommonModule, ObserversModule, CoUtilModule, NzToolTipModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class CoEllipsisModule { }
