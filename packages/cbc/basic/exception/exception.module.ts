import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DelonLocaleModule } from '@co/theme';
import { DelonUtilModule } from '@co/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { ExceptionComponent } from './exception.component';

const COMPONENTS = [ExceptionComponent];

@NgModule({
  imports: [CommonModule, RouterModule, DelonUtilModule, DelonLocaleModule, NzButtonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ExceptionModule { }
