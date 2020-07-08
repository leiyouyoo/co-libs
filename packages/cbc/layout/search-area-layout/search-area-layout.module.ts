import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { SearchAreaLayoutComponent } from './search-area-layout.component';
import { SearchAreaItemComponent } from './search-area-item.component';
import { FlexRowBreakerComponent } from './flex-row-breaker.component';
import { SearchAreaExtraComponent } from './search-area-extra.component';
import { NzButtonModule, NzIconModule } from 'ng-zorro-antd';


const COMPONENTS = [
  SearchAreaLayoutComponent,
  SearchAreaItemComponent,
  FlexRowBreakerComponent,
  SearchAreaExtraComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    NzFormModule,
    NzIconModule,
    NzButtonModule,
  ],
  exports: [...COMPONENTS],
})
export class SearchAreaLayoutModule {
}
