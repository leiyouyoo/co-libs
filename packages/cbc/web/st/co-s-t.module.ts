import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoACLModule } from '@co/acl';
import { CoUtilModule } from '@co/core';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { STRowDirective } from './st-row.directive';
import { STWidgetHostDirective } from './st-widget-host.directive';
import { STComponent } from './st.component';
import {
  NzAutocompleteModule,
  NzButtonModule,
  NzDatePickerModule, NzInputNumberModule,
  NzPopoverModule,
  NzSelectModule,
  NzSpinModule, NzTreeModule,
} from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';
import { SettingOutline, DeleteOutline, EllipsisOutline, FilterOutline, MinusOutline } from '@ant-design/icons-angular/icons';
import { CalcScrollDirective } from './calc-scroll.directive';
import { CoSTWidgetHostDirective } from './co-st-va-widget-host.directive';
import { LoadOnScrollDirective } from './load-on-scroll.directive';
import { ColumnConfigComponent } from './column-config.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InternalI18nPipe } from './internal-i18n.pipe';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { StNumberInputComponent } from './st-number-input.component';
import { FixScrollingXDirective } from './fix-scrolling-x.directive';

const COMPONENTS = [STComponent, StNumberInputComponent];
const internalDeclaration = [ ColumnConfigComponent, InternalI18nPipe ];
const DIRECTIVES = [STRowDirective, STWidgetHostDirective, CalcScrollDirective, CoSTWidgetHostDirective, LoadOnScrollDirective, FixScrollingXDirective];
const icons = [SettingOutline, DeleteOutline, EllipsisOutline, FilterOutline, MinusOutline];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoUtilModule,
    CoACLModule,
    NzPopconfirmModule,
    NzTableModule,
    NzBadgeModule,
    NzCheckboxModule,
    NzDividerModule,
    NzDropDownModule,
    NzMenuModule,
    NzRadioModule,
    NzTagModule,
    NzInputModule,
    NzToolTipModule,
    NzSelectModule,
    NzAutocompleteModule,
    TranslateModule,
    NzIconModule,
    NzDatePickerModule,
    NzSpinModule,
    NzButtonModule,
    NzPopoverModule,
    DragDropModule,
    NzResizableModule,
    NzTreeModule,
    NzInputNumberModule,
  ],
  declarations: [...internalDeclaration, ...COMPONENTS, ...DIRECTIVES, ],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class CoSTModule {
  constructor(private nzIconService: NzIconService,
              ) {
    this.nzIconService.addIcon(...icons);
  }
}
