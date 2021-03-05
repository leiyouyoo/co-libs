import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  forwardRef, Injector,
  Input,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable } from 'rxjs';

import { PickerComponentBase } from '@co/cbc/core';
import { PUBPlaceService } from '@co/cds';
import * as _ from 'lodash';
import { PortTemplateComponent } from './port-template.component';

/**
 * 选择器控件
 */
@Component({
  selector: 'co-port-picker',
  exportAs: 'coPortPicker',
  templateUrl: '../templates/picker-template.component.html',
  host: { '[class.co-picker]': 'true' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PortPickerComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PortPickerComponent extends PickerComponentBase {
  //#region  构造函数

  constructor(cdr: ChangeDetectorRef, private portService: PUBPlaceService,
              private injector: Injector,
              private componentFactoryResolver: ComponentFactoryResolver) {
    super(cdr);

    this.coLabelMember = 'name';
    this.coDropdownMode = 'custom';
  }
  //#region  override

  //#endregion

  ngOnInit() {
    super.ngOnInit();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PortTemplateComponent);
    const component = componentFactory.create(this.injector);
    component.changeDetectorRef.detectChanges();
    this.coItemRender = component.instance.template;
    this.nzSelectComponent.nzOptionHeightPx = 86;
  }

  fetchRemoteData(_condition: any): Observable<any> {
    _condition.id = _condition.ids;
      return this.portService.getAll(_condition);
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  // writeValue(modelValue: NzSafeAny | NzSafeAny[]): void {
  //   if (this.value !== modelValue) {
  //     this.value = this.optionList;
  //     this.cdrs.markForCheck();
  //   }
  // }
}
