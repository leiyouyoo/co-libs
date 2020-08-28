import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeRoutingModule } from './theme-routing.module';
import { ThemeLayoutComponent } from './theme-layout.component';
import { ComponentStyleComponent } from './component-style/component-style.component';
import { NzRadioModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ThemeLayoutComponent, ComponentStyleComponent],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    NzRadioModule,
    FormsModule,
  ],
})
export class ThemeModule { }
