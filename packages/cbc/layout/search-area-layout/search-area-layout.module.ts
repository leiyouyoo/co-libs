import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchAreaLayoutComponent } from './search-area-layout.component';
import { SearchAreaItemComponent } from '@co/cbc/layout/search-area-layout/search-area-item.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FlexRowBreakerComponent } from '@co/cbc/layout/search-area-layout/flex-row-breaker.component';


const COMPONENTS = [SearchAreaLayoutComponent, SearchAreaItemComponent, FlexRowBreakerComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    NzFormModule,
  ],
  exports: [...COMPONENTS],
})
export class SearchAreaLayoutModule {
}
