import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorCollectModule } from '@co/cbc/basic/error-collect';
import { DelonUtilModule } from '@co/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { FooterToolbarComponent } from './footer-toolbar.component';

const COMPONENTS = [FooterToolbarComponent];

@NgModule({
  imports: [CommonModule, ErrorCollectModule, DelonUtilModule, NzOutletModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class FooterToolbarModule { }
