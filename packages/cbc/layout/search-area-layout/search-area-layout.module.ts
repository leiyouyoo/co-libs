import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { SearchAreaLayoutComponent } from './search-area-layout.component';
import { SearchAreaItemComponent } from './search-area-item.component';
import { FlexRowBreakerComponent } from './flex-row-breaker.component';


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
