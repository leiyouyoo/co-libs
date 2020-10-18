
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
// tslint:disable-next-line: import-blacklist
import { NzAutocompleteModule ,NzInputModule} from 'ng-zorro-antd';
import { CoMapComponent } from './map.component';

/**
 * 地图组件模块
 */
@NgModule({
  declarations: [
    CoMapComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzInputModule,
    TranslateModule,
    NzAutocompleteModule
  ],
  exports: [CoMapComponent]
})
export class CoMapModule { }

