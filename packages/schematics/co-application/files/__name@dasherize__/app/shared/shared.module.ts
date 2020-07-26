import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoACLModule } from '@co/acl';
import { CoConfigManager } from '@co/core';
import { CoCommonModule } from '@co/common';
import { CoFormModule } from '@co/form';

import { SHARED_CO_MODULES } from './shared-co.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

// #region 第三方库
import { CountdownModule } from 'ngx-countdown';
import { DragulaModule } from 'ng2-dragula';

const THIRDMODULES = [CountdownModule, DragDropModule];
// #endregion


// #region 自定义组件和指令
import { environment } from '../../environments/environment';
environment.SERVER_URL = CoConfigManager.getValue("serverUrl");

const COMPONENTS_ENTRY = [
];
const COMPONENTS = [...COMPONENTS_ENTRY];
const DIRECTIVES = [];
// #endregion


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    RouterModule,
    ReactiveFormsModule,
    CoACLModule.forRoot(),
    CoFormModule.forRoot(),
    CoCommonModule.forRoot({ environment }),
    DragulaModule.forRoot(),
    ...SHARED_CO_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  entryComponents: COMPONENTS_ENTRY,
  exports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    ReactiveFormsModule,
    RouterModule,
    CoACLModule,
    CoFormModule,
    CoCommonModule,
    // i18n
    TranslateModule,
    ...SHARED_CO_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule { }
