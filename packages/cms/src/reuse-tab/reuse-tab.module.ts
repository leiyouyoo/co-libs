import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoLocaleModule } from '@co/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ReuseTabInterceptor } from './reuse-interceptor';
import { ReuseTabContextMenuComponent } from './reuse-tab-context-menu.component';
import { ReuseTabContextComponent } from './reuse-tab-context.component';
import { ReuseTabContextDirective } from './reuse-tab-context.directive';
import { ReuseTabComponent } from './reuse-tab.component';

const COMPONENTS = [ReuseTabComponent];
const NOEXPORTS = [ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective];
const INTERCEPTOR_PROVIDES = [{ provide: HTTP_INTERCEPTORS, useClass: ReuseTabInterceptor, multi: true }];
@NgModule({
  imports: [CommonModule, RouterModule, CoLocaleModule, NzMenuModule, NzTabsModule, NzIconModule, OverlayModule],
  declarations: [...COMPONENTS, ...NOEXPORTS],
  exports: [...COMPONENTS],
  providers: [INTERCEPTOR_PROVIDES],
})
export class ReuseTabModule {}
