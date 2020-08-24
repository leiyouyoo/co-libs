import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormModalComponent } from './user-form-modal/user-form-modal.component';
import { LocationFormModalComponent } from './location-form-modal/location-form-modal.component';
import { LocationFormComponent } from './location-form/location-form.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SearchMapComponent } from '../search-map/search-map.component';


@NgModule({
  declarations: [
    LocationFormComponent,
    LocationFormModalComponent,
    UserFormModalComponent,
    SearchMapComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    NgZorroAntdModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
  exports: [
    LocationFormComponent,
    LocationFormModalComponent,
    UserFormModalComponent,
  ],
})
export class NetworkSharedModule { }

export * from './location-form/location-form.component'
export * from './location-form-modal/location-form-modal.component'
export * from './user-form-modal/user-form-modal.component'
