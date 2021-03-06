import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CoLoadingDefaultComponent } from './loading.component';

/**
 * 加载中指示器模块
 */
@NgModule({
  imports: [CommonModule, OverlayModule, PortalModule, NzIconModule, NzSpinModule],
  declarations: [CoLoadingDefaultComponent],
  exports: [CoLoadingDefaultComponent],
})
export class CoLoadingModule { }
